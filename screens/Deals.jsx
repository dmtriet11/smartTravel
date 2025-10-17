import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from '../components/SectionHeader';
import { Colors } from '../constants/Colors';
import FeatureCard from '../components/FeatureCard';
import SmallCard from '../components/SmallCard';

export default function Deals() {
  return (
    <View style={styles.container}>
      <SectionHeader title="Ưu đãi" />
      <Text style={styles.text}>Danh sách ưu đãi mẫu sẽ nằm ở đây.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 16 },
  text: { color: Colors.subText, marginTop: 10 },
});
