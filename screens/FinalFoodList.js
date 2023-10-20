import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FinalFoodList = ({ route }) => {
  const { foodItems } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Final Food List</Text>
      {foodItems.length > 0 ? (
        <Text style={styles.foodItems}>{JSON.stringify(foodItems)}</Text>
      ) : (
        <Text style={styles.noData}>No Data Found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'start', // Note: 'start' should be replaced with 'flex-start'
    justifyContent: 'start', // Note: 'start' should be replaced with 'flex-start'
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
  noData: {
    fontSize: 16,
    color: 'gray',
  },
});

export default FinalFoodList;
