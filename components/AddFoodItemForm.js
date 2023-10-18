import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AddFoodItemForm = ({ onSubmit, initialValues, onClose }) => {
  const [foodName, setFoodName] = useState(initialValues.foodName || '');
  const [foodPrice, setFoodPrice] = useState(initialValues.foodPrice || '');

  const handleSubmit = () => {
    const newItem = {
      foodName,
      foodPrice,
    };

    onSubmit(newItem);
    setFoodName('');
    setFoodPrice('');
  };

  return (
    <View style={styles.formContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <MaterialIcons name="close" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Add Food Item</Text>
      <TextInput
        style={styles.input}
        value={foodName}
        onChangeText={setFoodName}
        placeholder="Food Name"
      />
      <TextInput
        style={styles.input}
        value={foodPrice}
        onChangeText={setFoodPrice}
        placeholder="Food Price"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
  },
});

export default AddFoodItemForm;
