import React, { useEffect, useLayoutEffect } from 'react';
import { View, FlatList, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/cartSlice';

const ProductListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { list: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 15 }}>
          <Text style={{ fontSize: 18 }}>🛒</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.main_category}</Text>
      <View style={styles.buttons}>
        <Button title="Details" onPress={() => navigation.navigate('ProductDetail', { product: item })} />
        <Button title="Add to Cart" onPress={() => dispatch(addToCart(item))} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      {status === 'loading' ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  productItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  name: { fontSize: 18, fontWeight: 'bold' },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  scannerBtn: { backgroundColor: '#2196F3', padding: 10, marginBottom: 10, borderRadius: 5 },
  scanText: { color: 'white', textAlign: 'center' },
});

export default ProductListScreen;
