import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export default function SmallCard({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 5,
  },
  text: { fontSize: 12, fontWeight: '500' },
});
