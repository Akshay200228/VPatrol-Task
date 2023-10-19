import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { commonStyles } from '../styles';

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
      <TouchableOpacity style={[styles.submitbtn, commonStyles.viewListButton]} title="Submit" onPress={handleSubmit} ><Text style={styles.btntext}>Submit</Text></TouchableOpacity>
    </Animated.View>
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
    color: '#171717',
  },
  input: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
  },
  submitbtn:{
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  btntext:{
    textAlign:'center',
    color:'#ffff',
    fontSize:18
  }
});

export default AddFoodItemForm;
