import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text>{product.main_category}</Text>
      {/* <Text>Price: {product.price || 'N/A'}</Text> */}

      <Button title="Add to Cart" onPress={() => dispatch(addToCart(product))} />
      <Button title="Remove from Cart" onPress={() => dispatch(removeFromCart(product))} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});

export default ProductDetailScreen;
