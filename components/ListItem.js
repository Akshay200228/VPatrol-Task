import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { commonStyles } from '../styles';

const ListItem = ({ item, index, onEdit, onDelete, drag, isActive }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: isActive ? 'lightgrey' : 'white',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      onLongPress={drag}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={commonStyles.itemNumber}>{index + 1}.</Text>
        <Text style={commonStyles.itemName}>{item.foodName}</Text>
      </View>
      <Text style={commonStyles.itemPrice}>Price: ₹ {item.foodPrice}</Text>
      <View style={commonStyles.itemButtons}>
        <TouchableOpacity style={commonStyles.editButton} onPress={onEdit}>
          <MaterialIcons name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <View style={commonStyles.divider} />
        <TouchableOpacity style={commonStyles.deleteButton} onPress={onDelete}>
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
