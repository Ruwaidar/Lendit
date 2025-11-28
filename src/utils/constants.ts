// App Constants
export const APP_NAME = 'Lendit';
export const APP_VERSION = '1.0.0';

// API Configuration (for future backend integration)
export const API_BASE_URL = __DEV__
  ? 'http://localhost:3000/api'
  : 'https://api.lendit.com/api';

// Categories
export const CATEGORIES = {
  ELECTRONICS: 'Electronics',
  MUSICAL_INSTRUMENTS: 'Musical Instruments',
  OUTDOOR_GEAR: 'Outdoor Gear',
  PARTY_EQUIPMENT: 'Party Equipment',
  DESIGNER_CLOTHES: 'Designer Clothes',
  OTHER: 'Other',
} as const;

// Subcategories
export const SUBCATEGORIES = {
  ELECTRONICS: ['Speakers', 'Microphones', 'Audio Equipment', 'Cameras'],
  MUSICAL_INSTRUMENTS: ['Guitars', 'Pianos', 'Drums', 'Violins', 'Wind Instruments'],
  OUTDOOR_GEAR: ['Tents', 'Hiking Gear', 'Camping Equipment', 'Backpacks'],
  PARTY_EQUIPMENT: ['Beer Kegs', 'Party Equipment', 'Event Supplies', 'Tables & Chairs'],
  DESIGNER_CLOTHES: ['Designer Dresses', 'Formal Wear', 'Accessories', 'Shoes'],
} as const;

// Rental Status
export const RENTAL_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

// Availability Status
export const AVAILABILITY_STATUS = {
  AVAILABLE: 'available',
  RENTED: 'rented',
  UNAVAILABLE: 'unavailable',
} as const;

// Item Condition
export const ITEM_CONDITION = {
  NEW: 'new',
  LIKE_NEW: 'like_new',
  GOOD: 'good',
  FAIR: 'fair',
} as const;

// Colors
export const COLORS = {
  PRIMARY: '#007AFF',
  SECONDARY: '#5856D6',
  SUCCESS: '#34C759',
  WARNING: '#FF9500',
  ERROR: '#FF3B30',
  BACKGROUND: '#F5F5F5',
  TEXT_PRIMARY: '#333333',
  TEXT_SECONDARY: '#666666',
  TEXT_TERTIARY: '#999999',
  BORDER: '#E0E0E0',
} as const;

// Map Configuration
export const MAP_CONFIG = {
  DEFAULT_LATITUDE: 37.7749,
  DEFAULT_LONGITUDE: -122.4194,
  DEFAULT_LATITUDE_DELTA: 0.05,
  DEFAULT_LONGITUDE_DELTA: 0.05,
} as const;

