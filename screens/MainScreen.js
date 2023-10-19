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

      <TouchableOpacity
        style={commonStyles.addButton}
        onPress={handleToggleForm}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name="add" size={24} color="green" />
          <Text style={commonStyles.addbuttonText}>Add Food Item</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.viewListButton}
        onPress={() => navigation.navigate('FinalFoodList', { foodItems })}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name="list" size={24} color="white" />
          <Text style={commonStyles.finalbuttonText}>View Final Food List</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

export default MainScreen;