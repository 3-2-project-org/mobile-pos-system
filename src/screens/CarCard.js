import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarCard = ({ carData }) => {
  return (
    <View style={styles.card}>
    
      <View style={styles.details}>
        <Text style={styles.title}>{carData.name}</Text>
        <Text style={styles.price}>Price: ${carData.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default CarCard;
