import React, { useState } from 'react';
import { View, Text, TouchableOpacity, PanResponder, Animated, StyleSheet } from 'react-native';

const DraggableItem = ({ item, index, onMove, onEdit, onDelete }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [pan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setIsDragging(true);
      pan.setOffset({ x: pan.x._value, y: pan.y._value });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: (e, gestureState) => {
      pan.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: () => {
      setIsDragging(false);
      pan.flattenOffset();
    },
  });

  const handleDragStart = () => {
    onMove({ from: index, to: index }); // Notify the parent component of the drag start
  };

  const handleDragEnd = () => {
    onMove({ from: index, to: index }); // Notify the parent component of the drag end
  };

  return (
    <Animated.View
      style={[
        styles.itemContainer,
        isDragging && styles.draggingItem,
        { transform: pan.getTranslateTransform() },
      ]}
      {...panResponder.panHandlers}
      onMoveShouldSetResponderCapture={() => true}
    >
      <View style={styles.itemRow}>
        <View style={styles.itemContent}>
          <Text style={styles.itemName}>{item.foodName}</Text>
          <Text style={styles.itemPrice}>Price: {item.foodPrice}</Text>
        </View>
        <View style={styles.itemButtons}>
          <TouchableOpacity style={styles.editButton} onPress={onEdit}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f7f7f7',
  },
  draggingItem: {
    opacity: 0.7,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 14,
  },
  itemButtons: {
    flexDirection: 'row',
  },
  editButton: {
    margin: 5,
  },
  deleteButton: {
    margin: 5,
  },
});

export default DraggableItem;
