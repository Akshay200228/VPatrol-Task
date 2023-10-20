import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { commonStyles } from '../styles';
import DraggableFlatList from 'react-native-draggable-flatlist';

const FoodItemList = ({ foodItems, onEditItem, onDeleteItem, onItemMove }) => {
  const handleItemMove = (dragData) => {
    // You will receive the updated data with the items' new positions here
    onItemMove(dragData);
  };

  return (
    <DraggableFlatList
      data={foodItems}
      keyExtractor={(item, index) => `${item.foodName}_${index}_${Date.now()}`}
      renderItem={({ item, index, drag, isActive }) => (
        <View style={commonStyles.itemContainer}>
          <View style={commonStyles.itemRow}>
            <View style={commonStyles.itemContent}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={drag}
                >
                  <Text style={commonStyles.itemNumber}>{index + 1}.</Text>
                </TouchableOpacity>
                <Text style={commonStyles.itemName}>{item.foodName}</Text>
              </View>
              <Text style={commonStyles.itemPrice}>Price: ₹ {item.foodPrice}</Text>
            </View>
            <View style={commonStyles.itemButtons}>
              <TouchableOpacity
                style={commonStyles.editButton}
                onPress={() => onEditItem(index)}
              >
                <MaterialIcons name="edit" size={24} color="blue" />
              </TouchableOpacity>
              <View style={commonStyles.divider} />
              <TouchableOpacity
                style={commonStyles.deleteButton}
                onPress={() => onDeleteItem(index)}
              >
                <AntDesign name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      onDragEnd={({ data }) => handleItemMove(data)} // Pass the updated data to your custom handler
    />
  );
};

export default FoodItemList;
