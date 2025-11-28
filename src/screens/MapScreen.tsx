import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

interface MapItem {
  id: string;
  title: string;
  category: string;
  price: number;
  latitude: number;
  longitude: number;
  available: boolean;
}

const MapScreen: React.FC = () => {
  const [mapType, setMapType] = useState<'standard' | 'satellite'>('standard');
  const [selectedItem, setSelectedItem] = useState<MapItem | null>(null);

  // Placeholder items with locations - will be replaced with actual data from backend
  const mapItems: MapItem[] = [
    {
      id: '1',
      title: 'JBL PartyBox 310',
      category: 'Electronics',
      price: 45,
      latitude: 37.7749,
      longitude: -122.4194,
      available: true,
    },
    {
      id: '2',
      title: 'Fender Stratocaster',
      category: 'Musical Instruments',
      price: 60,
      latitude: 37.7849,
      longitude: -122.4094,
      available: true,
    },
    {
      id: '3',
      title: 'Designer Evening Dress',
      category: 'Designer Clothes',
      price: 80,
      latitude: 37.7649,
      longitude: -122.4294,
      available: false,
    },
    {
      id: '4',
      title: '4-Person Camping Tent',
      category: 'Outdoor Gear',
      price: 35,
      latitude: 37.7549,
      longitude: -122.4394,
      available: true,
    },
    {
      id: '5',
      title: 'Beer Keg Setup',
      category: 'Party Equipment',
      price: 55,
      latitude: 37.7949,
      longitude: -122.3994,
      available: true,
    },
  ];

  const initialRegion = {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const handleMarkerPress = (item: MapItem) => {
    setSelectedItem(item);
  };

  const handleRentPress = () => {
    if (selectedItem) {
      Alert.alert(
        'Rent Item',
        `Would you like to rent "${selectedItem.title}" for $${selectedItem.price}/day?`,
        [
          {text: 'Cancel', style: 'cancel'},
          {text: 'Rent Now', onPress: () => {}},
        ],
      );
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        mapType={mapType}
        showsUserLocation={true}
        showsMyLocationButton={true}>
        {mapItems.map(item => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            onPress={() => handleMarkerPress(item)}
            pinColor={item.available ? '#4CAF50' : '#FF9800'}>
            <View style={styles.markerContainer}>
              <View
                style={[
                  styles.marker,
                  !item.available && styles.markerUnavailable,
                ]}>
                <Icon
                  name="location-on"
                  size={30}
                  color={item.available ? '#FFFFFF' : '#FF9800'}
                />
              </View>
            </View>
          </Marker>
        ))}
      </MapView>

      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() =>
            setMapType(mapType === 'standard' ? 'satellite' : 'standard')
          }
          activeOpacity={0.7}>
          <Icon
            name={mapType === 'standard' ? 'satellite' : 'map'}
            size={24}
            color="#333"
          />
        </TouchableOpacity>
      </View>

      {selectedItem && (
        <View style={styles.itemCard}>
          <View style={styles.itemCardHeader}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>{selectedItem.title}</Text>
              <Text style={styles.itemCategory}>{selectedItem.category}</Text>
            </View>
            <TouchableOpacity
              onPress={() => setSelectedItem(null)}
              activeOpacity={0.7}>
              <Icon name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>
          <View style={styles.itemCardBody}>
            <View style={styles.priceContainer}>
              <Text style={styles.priceLabel}>Price per day</Text>
              <Text style={styles.priceValue}>${selectedItem.price}</Text>
            </View>
            <View style={styles.availabilityContainer}>
              <View
                style={[
                  styles.availabilityDot,
                  !selectedItem.available && styles.availabilityDotUnavailable,
                ]}
              />
              <Text style={styles.availabilityText}>
                {selectedItem.available ? 'Available' : 'Currently Rented'}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.rentButton,
              !selectedItem.available && styles.rentButtonDisabled,
            ]}
            onPress={handleRentPress}
            disabled={!selectedItem.available}
            activeOpacity={0.7}>
            <Text style={styles.rentButtonText}>
              {selectedItem.available ? 'Rent Now' : 'Not Available'}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, {backgroundColor: '#4CAF50'}]} />
          <Text style={styles.legendText}>Available</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, {backgroundColor: '#FF9800'}]} />
          <Text style={styles.legendText}>Rented</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: height,
  },
  controlsContainer: {
    position: 'absolute',
    top: 20,
    right: 16,
    gap: 8,
  },
  controlButton: {
    backgroundColor: '#FFFFFF',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  markerContainer: {
    alignItems: 'center',
  },
  marker: {
    backgroundColor: '#4CAF50',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  markerUnavailable: {
    backgroundColor: '#FF9800',
  },
  itemCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  itemCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  itemCategory: {
    fontSize: 14,
    color: '#666',
  },
  itemCardBody: {
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
  },
  priceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  availabilityDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
  },
  availabilityDotUnavailable: {
    backgroundColor: '#FF9800',
  },
  availabilityText: {
    fontSize: 14,
    color: '#666',
  },
  rentButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  rentButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  rentButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  legend: {
    position: 'absolute',
    bottom: 200,
    left: 16,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontSize: 12,
    color: '#666',
  },
});

export default MapScreen;

