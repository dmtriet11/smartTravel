import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FeatureCard({ title, color, onPress }) {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 12,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontWeight: 'bold', fontSize: 16 },
});
