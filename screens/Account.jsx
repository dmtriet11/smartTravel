import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import SectionHeader from '../components/SectionHeader';
import { Colors } from '../constants/Colors';

export default function Account() {
  return (
    <View style={styles.container}>
      <SectionHeader title="Hồ sơ" />
      <Image source={{ uri: 'https://placehold.co/100x100' }} style={styles.avatar} />
      <Text style={styles.name}>Lio Nguyễn</Text>
      <Text style={styles.email}>lio.nguyen@example.com</Text>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Chỉnh sửa hồ sơ</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, alignItems: 'center', padding: 16 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginTop: 10 },
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  email: { color: Colors.subText, marginTop: 4 },
  button: { backgroundColor: Colors.primary, padding: 10, borderRadius: 8, marginTop: 12 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
