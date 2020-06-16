/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import CardSwiper from './src/main/CardSwiper';
import imgs from './src/assets/imgs';

const image = [
  { key: '0', img: imgs.image },
  { key: '1', img: imgs.image },
  { key: '2', img: imgs.image },
  { key: '3', img: imgs.image },
  { key: '4', img: imgs.image },
];

const App = () => <CardSwiper data={image} />;

export default App;
