import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import AddFoodItemForm from '../components/AddFoodItemForm';
import { commonStyles } from '../styles';
import FoodItemList from '../components/FoodItemList';

const MainScreen = () => {
  const navigation = useNavigation();
  const [foodItems, setFoodItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingItemIndex, setEditingItemIndex] = useState(null);

  const handleAddItem = (item) => {
    if (editingItemIndex !== null) {
      const updatedItems = [...foodItems];
      updatedItems[editingItemIndex] = item;
      setFoodItems(updatedItems);
      setEditingItemIndex(null);
    } else {
      setFoodItems([...foodItems, item]);
    }
    setShowForm(false);
  };

  const handleToggleForm = () => {
    // Toggle the form's visibility
    setShowForm(!showForm);
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Food Item Lists</Text>

      <FoodItemList
        foodItems={foodItems}
        onEditItem={(index) => {
          setShowForm(true);
          setEditingItemIndex(index);
        }}
        onDeleteItem={(index) => {
          const updatedItems = [...foodItems];
          updatedItems.splice(index, 1);
          setFoodItems(updatedItems);
        }}
      />

      {showForm && (
        <View style={commonStyles.overlay}>
          <AddFoodItemForm
            onSubmit={handleAddItem}
            onClose={handleToggleForm}
            initialValues={
              editingItemIndex !== null ? foodItems[editingItemIndex] : { foodName: '', foodPrice: '' }
            }
          />
        </View>
      )}

      <View style={commonStyles.buttonContainer}>
        <TouchableOpacity style={commonStyles.addButton} onPress={handleToggleForm}>
          <MaterialIcons name="add" size={24} color="white" />
          <Text style={commonStyles.buttonText}>Add Food Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={commonStyles.viewListButton}
          onPress={() => navigation.navigate('FinalFoodList', { foodItems })}
        >
          <MaterialIcons name="list" size={24} color="white" />
          <Text style={commonStyles.buttonText}>View Final Food List</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default MainScreen;