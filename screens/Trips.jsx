import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from '../components/SectionHeader';
import { Colors } from '../constants/Colors';

export default function Trips() {
  return (
    <View style={styles.container}>
      <SectionHeader title="Lịch trình" />
      <Text style={styles.text}>Bạn chưa có lịch trình nào.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 16 },
  text: { color: Colors.subText, marginTop: 10 },
});
