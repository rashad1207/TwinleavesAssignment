import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Button title="Remove" onPress={() => dispatch(removeFromCart(item))} />
    </View>
  );

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        <FlatList data={cart} renderItem={renderItem} keyExtractor={(item) => item.id} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  cartItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  name: { fontSize: 18 },
  empty: { textAlign: 'center', marginTop: 50, fontSize: 16 },
});

export default CartScreen;
