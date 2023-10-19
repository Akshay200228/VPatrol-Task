import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { commonStyles } from '../styles';

const FoodItemList = ({ foodItems, onEditItem, onDeleteItem }) => {
  return (
    <FlatList
      data={foodItems}
      keyExtractor={(item, index) => `${item.foodName}_${index}_${Date.now()}`}
      renderItem={({ item, index }) => (
        <View style={commonStyles.itemContainer}>
          <View style={commonStyles.itemRow}>
            <View style={commonStyles.itemContent}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => handleMenuClick(item)}
                >
                  <AntDesign name="checkcircleo" size={24} color="black" />
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
    />
  );
};

export default FoodItemList;
