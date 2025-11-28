// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  profileImage?: string;
  rating?: number;
  totalRentals?: number;
  createdAt: Date;
  updatedAt: Date;
}

// Item Types
export interface RentalItem {
  id: string;
  title: string;
  description: string;
  category: Category;
  subcategory?: string;
  ownerId: string;
  owner: User;
  pricePerDay: number;
  pricePerWeek?: number;
  pricePerMonth?: number;
  images: string[];
  location: Location;
  availability: AvailabilityStatus;
  condition: ItemCondition;
  createdAt: Date;
  updatedAt: Date;
}

export enum Category {
  ELECTRONICS = 'Electronics',
  MUSICAL_INSTRUMENTS = 'Musical Instruments',
  OUTDOOR_GEAR = 'Outdoor Gear',
  PARTY_EQUIPMENT = 'Party Equipment',
  DESIGNER_CLOTHES = 'Designer Clothes',
  OTHER = 'Other',
}

export enum AvailabilityStatus {
  AVAILABLE = 'available',
  RENTED = 'rented',
  UNAVAILABLE = 'unavailable',
}

export enum ItemCondition {
  NEW = 'new',
  LIKE_NEW = 'like_new',
  GOOD = 'good',
  FAIR = 'fair',
}

// Location Types
export interface Location {
  id: string;
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  state?: string;
  zipCode?: string;
  country: string;
}

// Rental Types
export interface Rental {
  id: string;
  itemId: string;
  item: RentalItem;
  renterId: string;
  renter: User;
  lenderId: string;
  lender: User;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  status: RentalStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum RentalStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

// Forum Types
export interface ForumPost {
  id: string;
  authorId: string;
  author: User;
  title: string;
  content: string;
  category?: string;
  likes: number;
  comments: ForumComment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ForumComment {
  id: string;
  postId: string;
  authorId: string;
  author: User;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

