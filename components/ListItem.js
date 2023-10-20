import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ListItem = ({ item, index, onEdit, onDelete, drag, isActive }) => {
  return (
    <TouchableOpacity
      style={[
        styles.listItem,
        {
          backgroundColor: isActive ? '#f0f0f0' : 'white',
          transform: [{ scale: isActive ? 1.1 : 1 }],
          zIndex: isActive ? 2 : 1,
        },
      ]}
      activeOpacity={0.8}
      onLongPress={drag}
    >
      <View style={styles.itemContainer}>
        <Text style={styles.itemNumber}>{index + 1}.</Text>
        <Text style={styles.itemName}>{item.foodName}</Text>
      </View>
      <Text style={styles.itemPrice}>Price: ₹ {item.foodPrice}</Text>
      <View style={styles.itemButtons}>
        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
          <MaterialIcons name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    elevation: 2, // Add elevation for Android shadows
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 14,
    color: 'green',
  },
  itemButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    margin: 5,
  },
  deleteButton: {
    margin: 5,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: 'lightgray',
  },
});

export default ListItem;
