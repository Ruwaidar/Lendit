import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Category} from '../types';

const {width} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const categories = [
    {
      id: '1',
      name: 'Electronics & Audio',
      icon: 'speaker',
      items: ['Speakers', 'Microphones', 'Audio Equipment'],
      color: '#FF6B6B',
    },
    {
      id: '2',
      name: 'Musical Instruments',
      icon: 'music-note',
      items: ['Guitars', 'Pianos', 'Drums', 'Violins'],
      color: '#4ECDC4',
    },
    {
      id: '3',
      name: 'Outdoor & Adventure',
      icon: 'terrain',
      items: ['Tents', 'Hiking Gear', 'Camping Equipment'],
      color: '#45B7D1',
    },
    {
      id: '4',
      name: 'Party & Events',
      icon: 'celebration',
      items: ['Beer Kegs', 'Party Equipment', 'Event Supplies'],
      color: '#FFA07A',
    },
    {
      id: '5',
      name: 'Designer Clothes',
      icon: 'checkroom',
      items: ['Designer Dresses', 'Formal Wear', 'Accessories'],
      color: '#9B59B6',
    },
    {
      id: '6',
      name: 'Other Equipment',
      icon: 'category',
      items: ['Various Items', 'Specialty Equipment'],
      color: '#95A5A6',
    },
  ];

  const renderCategoryCard = (category: typeof categories[0]) => (
    <TouchableOpacity
      key={category.id}
      style={[styles.categoryCard, {borderLeftColor: category.color}]}
      activeOpacity={0.7}>
      <View style={styles.categoryHeader}>
        <Icon name={category.icon} size={32} color={category.color} />
        <Text style={styles.categoryName}>{category.name}</Text>
      </View>
      <View style={styles.categoryItems}>
        {category.items.map((item, index) => (
          <Text key={index} style={styles.categoryItem}>
            • {item}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Lendit</Text>
        <Text style={styles.subtitle}>
          Rent equipment and designer clothes for short-term use
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Browse Categories</Text>
        <View style={styles.categoriesContainer}>
          {categories.map(renderCategoryCard)}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity style={styles.quickAccessCard} activeOpacity={0.7}>
            <Icon name="forum" size={24} color="#007AFF" />
            <Text style={styles.quickAccessText}>Community Forum</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessCard} activeOpacity={0.7}>
            <Icon name="map" size={24} color="#007AFF" />
            <Text style={styles.quickAccessText}>View Map</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    padding: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  categoriesContainer: {
    gap: 12,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 12,
  },
  categoryItems: {
    marginLeft: 44,
  },
  categoryItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  quickAccessContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  quickAccessCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickAccessText: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    fontWeight: '500',
  },
});

export default HomeScreen;

