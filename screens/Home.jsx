  import React from 'react';
  import { ScrollView, View, Text, StyleSheet } from 'react-native';
  import FeatureCard from '../components/FeatureCard';
  import SmallCard from '../components/SmallCard';
  import SectionHeader from '../components/SectionHeader';
  import { Colors } from '../constants/Colors';
  import { MaterialCommunityIcons as Icons } from '@expo/vector-icons';

  export default function Home({ navigation }) {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Main feature rows */}
        <View style={styles.row}>
          <FeatureCard title="Ẩm Thực" color="#FFE2E0" onPress={() => navigation.navigate('Ưu đãi')} />
          <FeatureCard title="Phong Cảnh" color="#E7D9FF" onPress={() => navigation.navigate('Lịch trình')} />
        </View>

        <View style={styles.row}>
          <FeatureCard title="Combo tiết kiệm" color="#D6EDFF" onPress={() => navigation.navigate('Ưu đãi')} />
          <FeatureCard title="Hoạt động" color="#FFF1D6" onPress={() => navigation.navigate('Ưu đãi')} />
          <FeatureCard title="Chỗ ở riêng" color="#D9F6E4" onPress={() => navigation.navigate('Ưu đãi')} />
        </View>

        {/* Small quick actions */}
        <View style={styles.smallRow}>
          <SmallCard title="Đưa đón sân bay" />
          <SmallCard title="Thuê xe" />
          <SmallCard title="eSIM" />
          <SmallCard title="Hướng dẫn viên" />
          <SmallCard title="Vé xe buýt" />
        </View>

        <SectionHeader title="Tiếp tục lên kế hoạch cho chuyến đi" />
        <View style={styles.card}>
          <View style={styles.cardImage}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.cardTitle}>Món ăn ngon ở Quảng Ngãi </Text> <Icons name="fire" size={30} color={"red"} />
          </View>
          <Text style={styles.cardPrice}>Từ 200,000 ₫</Text>
          <Text style={styles.cardSub}>Giá trung bình mỗi hành khách</Text>
          <Text style={styles.cardSub}>10 thg 10 - 15 thg 10 • 1 khách</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SectionHeader title="Những địa điểm hot Trend!!" />
          <Icons name="camera" size={30} style={{ marginLeft: 8 }} />
        </View>

        <View style={[styles.card, { backgroundColor: '#EAF8EE' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.cardTitle}>Biển Mỹ Khê</Text> <Icons name="wave" size={27} color={"blue"} />
          </View>
          <Text style={styles.cardSub}>Xem thêm...</Text>
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
      paddingHorizontal: 16,
      paddingTop: 40,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    smallRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      marginVertical: 20,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 15,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2,
    },
    cardTitle: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    cardSub: {
      color: Colors.subText,
      marginTop: 4,
    },
    cardPrice: {
      fontWeight: 'bold',
      color: Colors.danger,
      marginTop: 4,
    },
    cardImage: {
      height: 110,
      borderRadius: 12,
      backgroundColor: '#badbefff',
      marginBottom: 10,
      shadowOffset: { width:  0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      marginVertical: 8,
    },
  });
