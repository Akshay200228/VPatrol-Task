import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import DraggableFlatList from 'react-native-draggable-flatlist';
import AddFoodItemForm from '../components/AddFoodItemForm';
import ListItem from '../components/ListItem';
import { commonStyles } from '../styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
    setShowForm(!showForm);
  };

  const onEditItem = (index) => {
    setEditingItemIndex(index);
    setShowForm(true);
  };

  const onDeleteItem = (index) => {
    const updatedItems = [...foodItems];
    updatedItems.splice(index, 1);
    setFoodItems(updatedItems);
  };

  const screenHeight = Dimensions.get('window').height;
  const listHeight = 0.6 * screenHeight; // 60% of the screen height

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Food Item Lists</Text>

      <ScrollView style={{ height: listHeight }}>
        <GestureHandlerRootView>
          <DraggableFlatList
            data={foodItems}
            keyExtractor={(item, index) => `${item.foodName}_${index}_${Date.now()}`}
            renderItem={({ item, index, drag, isActive }) => (
              <ListItem
                item={item}
                index={index}
                onEdit={() => onEditItem(index)}
                onDelete={() => onDeleteItem(index)}
                drag={drag}
                isActive={isActive}
              />
            )}
            onDragEnd={({ data }) => {
              setFoodItems(data);
            }}

          />
        </GestureHandlerRootView>
      </ScrollView>

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
      )
      }
      <View style={commonStyles.horizontalLine} />
      <TouchableOpacity
        style={commonStyles.addButton}
        onPress={handleToggleForm}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name="add" size={24} color="green" />
          <Text style={commonStyles.addbuttonText}>Add Food Item</Text>
        </View>
      </TouchableOpacity>

      {/* This is where the "View Final Food List" button is placed at the bottom */}
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
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
    </View>
  );
};

export default MainScreen;
