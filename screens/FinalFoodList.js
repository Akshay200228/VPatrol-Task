import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FinalFoodList = ({ route }) => {
  const { foodItems } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Final Food List</Text>
      <Text style={styles.foodItems}>{JSON.stringify(foodItems)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'start',
    justifyContent: 'start',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  foodItems: {
    fontSize: 16,
  },
});

export default FinalFoodList;
