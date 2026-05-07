import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { Colors, Layout, Spacing } from '../core/Theme';

const { width } = Dimensions.get('window');

const FEATURES = [
  {
    key: 'drawing',
    title: '١- الرسم الحر',
    subtitle: 'التوقيع والرسم اليدوي',
    icon: '✏️',
    route: '/drawing' as const,
    color: Colors.cyan,
    glow: Colors.cyanGlow,
    active: true,
  },
  {
    key: 'proximity',
    title: '٢- مستشعر التقارب',
    subtitle: 'التفاعل عبر المسافات',
    icon: '📡',
    route: '/proximity' as const,
    color: Colors.neonGreen,
    glow: Colors.greenGlow,
    active: true,
  },
];

const FeatureCard = ({ feature, index, onPress }: any) => {
  const scale = useSharedValue(0.9);
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withDelay(index * 200, withTiming(1, { duration: 800 }));
    scale.value = withDelay(index * 200, withSpring(1));
  }, []);

  const cardAnim = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    if (feature.active) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      onPress();
    }
  };

  return (
    <Animated.View style={[styles.cardContainer, cardAnim]}>
      <TouchableOpacity
        style={[styles.card, { borderColor: feature.color + '33' }]}
        onPress={handlePress}
        activeOpacity={0.85}
      >
        <BlurView intensity={20} tint="dark" style={styles.cardBlur}>
          <View style={[styles.iconContainer, { backgroundColor: feature.glow }]}>
            <Text style={styles.icon}>{feature.icon}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>{feature.title}</Text>
            <Text style={styles.cardSubtitle}>{feature.subtitle}</Text>
          </View>
          <View style={[styles.statusDot, { backgroundColor: feature.active ? feature.color : '#444' }]} />
        </BlurView>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Text style={styles.welcome}>اهلا بك في</Text>
          <Text style={styles.title}>Wing</Text>
          <Text style={styles.subtitle}>Gesture Kit v2.0</Text>
        </View>

        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {FEATURES.map((f, i) => (
            <FeatureCard 
              key={f.key} 
              feature={f} 
              index={i} 
              onPress={() => router.push(f.route)} 
            />
          ))}
          
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>+ ١٣ ميزة إضافية قريباً</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  safe: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  welcome: {
    color: Colors.textSecondary,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    color: '#FFF',
    fontSize: 34,
    fontWeight: '900',
    marginTop: 4,
  },
  subtitle: {
    color: Colors.cyan,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 2,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 100, // Account for floating tab bar
  },
  cardContainer: {
    marginBottom: 16,
    width: '100%',
  },
  card: {
    borderRadius: Layout.radiusM,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderWidth: 1,
    overflow: 'hidden',
  },
  cardBlur: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
  },
  cardSubtitle: {
    color: Colors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  infoBox: {
    marginTop: 20,
    padding: 20,
    borderRadius: Layout.radiusS,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
  },
  infoText: {
    color: Colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Home;
