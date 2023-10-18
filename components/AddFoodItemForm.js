import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AddFoodItemForm = ({ onSubmit, initialValues, onClose }) => {
  const [foodName, setFoodName] = useState(initialValues.foodName || '');
  const [foodPrice, setFoodPrice] = useState(initialValues.foodPrice || '');
  const [error, setError] = useState('');

  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);

  const handleSubmit = () => {
    if (foodName.trim() === '' || foodPrice.trim() === '') {
      setError('Please fill in all fields.');
    } else if (isNaN(foodPrice) || foodPrice.trim() === '') {
      setError('Please enter a valid numeric Food Price.');
    } else {
      const newItem = {
        foodName,
        foodPrice,
      };

      onSubmit(newItem);
      setFoodName('');
      setFoodPrice('');
      setError('');
    }
  };

  return (
    <Animated.View style={[styles.formContainer, { opacity: fadeAnim }]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add Food Item</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <MaterialIcons name="close" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <Text style={styles.errorText}>{error}</Text>
      <TextInput
        style={styles.input}
        value={foodName}
        onChangeText={setFoodName}
        placeholder="Food Name"
      />
      <TextInput
        style={styles.input}
        value={foodPrice}
        onChangeText={(text) => {
          if (!isNaN(text)) {
            setFoodPrice(text);
          }
        }}
        placeholder="Food Price"
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#9FE2BF', 
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  closeButton: {
    top: 4,
    right: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 10,
  },
});

export default AddFoodItemForm;
