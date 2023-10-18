import React from 'react';
import { View, Text, Button } from 'react-native';

const FoodItem = ({ item, onEdit, onDelete }) => {
  return (
    <View>
      <Text>{item}</Text>
      <Button title="Edit" onPress={onEdit} />
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
};

export default FoodItem;
