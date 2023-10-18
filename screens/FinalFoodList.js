import React from 'react';
import { View, Text } from 'react-native';

const FinalFoodList = ({ route }) => {
  const { foodItems } = route.params;

  return (
    <View>
      <Text>Final Food List</Text>
      <Text>{JSON.stringify(foodItems)}</Text>
    </View>
  );
};

export default FinalFoodList;
