import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ExternalLink } from 'lucide-react-native';
import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import styles from './notificationStyles';



interface FlossProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  amazonUrl: string;
}

const flossProducts: FlossProduct[] = [
  {
    id: 1,
    name: 'Floss Picks',
    description: 'Easy to use, perfect for on-the-go',
    price: '$8.99',
    amazonUrl: 'https://amazon.com',
  },
  {
    id: 2,
    name: 'Thread Floss',
    description: 'Classic and effective',
    price: '$4.99',
    amazonUrl: 'https://amazon.com',
  },
  {
    id: 3,
    name: 'Water Flosser',
    description: 'High-tech deep clean',
    price: '$59.99',
    amazonUrl: 'https://amazon.com',
  },
];

export default function BuyFlossScreen() {
  const router = useRouter();

  const handleViewOnAmazon = (url: string) => {
    Linking.openURL(url);
  };

  const handleContinue = () => {
    router.push('/reminders/sinkPlacement');
  };

  return (
    <LinearGradient
      colors={['#3D5FA8', '#2B4A9F', '#1E3A8A', '#1E3270']}
      locations={[0, 0.3, 0.7, 1]}
      style={styles.container}
    >
      {/* Progress dots */}
      <View style={styles.progressRow}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
      </View>

      {/* Content */}
      <ScrollView 
      style={{ flex: 1, width: '100%' }} 
      contentContainerStyle={{ alignItems: 'center', paddingVertical: 24 }}
      >
        {/* Title */}
        <View style={{ alignItems: 'center', marginBottom: 32, paddingHorizontal: 16 }}>
          <Text style={styles.title}>Buy your favorite floss 🦷</Text>
          <Text style={styles.subtitle}>Choose what works best for you</Text>
        </View>

        {/* Product Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ width: '100%', alignSelf: 'center' }} contentContainerStyle={{ paddingHorizontal: 16, gap: 16, justifyContent: 'center', alignItems: 'center' }}>
          {flossProducts.map((product) => (
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 20,
                padding: 16,
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.2)',
                width: 200,
              }}
            >
              <View
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 16,
                  height: 120,
                  marginBottom: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: 12 }}>
                  [Product Image]
                </Text>
              </View>

              <View style={{ marginBottom: 12 }}>
                <Text style={[styles.title, { fontSize: 16, marginBottom: 4 }]}>
                  {product.name}
                </Text>
                <Text style={[styles.subtitle, { fontSize: 14 }]}>
                  {product.description}
                </Text>
                <Text style={{ color: '#22d3ee', fontSize: 14, fontWeight: '600', marginTop: 4 }}>
                  {product.price}
                </Text>
              </View>

              <Pressable
                onPress={() => handleViewOnAmazon(product.amazonUrl)}
                style={({ pressed }) => [
                  styles.primaryButton,
                  { opacity: pressed ? 0.8 : 1 },
                ]}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <Text style={styles.primaryButtonText}>View on Amazon</Text>
                  <ExternalLink size={16} color="#2A3F8F" strokeWidth={2.5} />
                </View>
              </Pressable>
            </View>
          ))}
        </ScrollView>

        {/* Continue Button */}
        <Pressable
          onPress={handleContinue}
          style={({ pressed }) => [
            {
              width: '100%',
              maxWidth: 320,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              paddingVertical: 16,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.2)',
              marginTop: 24,
              marginHorizontal: 16,
              opacity: pressed ? 0.8 : 1,
            },
          ]}
        >
          <Text style={[styles.secondaryButtonText, { fontSize: 16, fontWeight: '600' }]}>
            I already have floss
          </Text>
        </Pressable>
      </ScrollView>

      <View style={styles.bottomSpacer} />
    </LinearGradient>
  );
}
