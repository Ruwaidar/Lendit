# Lendit - Equipment & Designer Clothes Rental Marketplace

A mobile application that connects lenders and renters for short-term equipment and designer clothes rentals.

## Features

- **Home Screen**: Browse categories of rental items (Electronics, Musical Instruments, Outdoor Gear, Party Equipment, Designer Clothes)
- **Profile Page**: User profile management with rental history and settings
- **Community Forum**: Connect with other users, ask questions, and share experiences
- **Location/Map**: View all available rental items on an interactive map with location-based filtering

## Project Structure

```
Lendit/
├── src/
│   ├── navigation/       # Navigation configuration
│   ├── screens/          # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── ForumScreen.tsx
│   │   └── MapScreen.tsx
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions and constants
├── database/             # Database schema files
│   ├── schema.sql
│   └── README.md
├── App.tsx               # Main app component
├── package.json          # Dependencies
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (>= 16)
- React Native development environment set up
- iOS Simulator (for Mac) or Android Emulator

### Installation

1. Install dependencies:
```bash
npm install
```

2. For iOS (Mac only):
```bash
cd ios && pod install && cd ..
```

3. Start the Metro bundler:
```bash
npm start
```

4. Run on iOS:
```bash
npm run ios
```

5. Run on Android:
```bash
npm run android
```

## Database Setup

The database schema is located in the `database/` directory. See `database/README.md` for setup instructions.

The schema includes:
- Users table
- Rental items table
- Locations table
- Rentals/transactions table
- Forum posts and comments
- Reviews and ratings
- User favorites

## Tech Stack

- **React Native** - Mobile framework
- **TypeScript** - Type safety
- **React Navigation** - Navigation library
- **React Native Maps** - Map functionality
- **React Native Vector Icons** - Icon library

## Future Development

- Backend API integration
- User authentication
- Payment processing
- Push notifications
- Real-time chat
- Advanced search and filtering
- Image upload and management

## License

Copyright © 2025 Lendit. All rights reserved.
