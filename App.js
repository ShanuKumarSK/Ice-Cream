import React from 'react';
import Navigation from './src/navigation/AppNavigation/Navigation';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
}
