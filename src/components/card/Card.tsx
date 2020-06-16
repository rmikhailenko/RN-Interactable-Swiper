import React, { ReactElement, useRef, Dispatch, SetStateAction, useEffect } from 'react';
import { View, Text, Animated, ImageSourcePropType } from 'react-native';
import Interactable from 'react-native-interactable';
import styles from './styles';
import FastImage from 'react-native-fast-image';

interface Props {
  img: ImageSourcePropType | number
}

const Card = ({ img, snapValue }: Props): ReactElement => {
  let animatedValue = useRef(new Animated.Value(0)).current;


  return (
    <View style={styles.container}>
      <Interactable.View
        style={styles.container}
        horizontalOnly={true}
        snapPoints={[{ x: 390 }, { x: 0, damping: 0.8 }, { x: -390 }]}
        animatedValueX={animatedValue}>
        <Animated.View
          style={[
            styles.card,
            {
              transform: [
                {
                  rotate: animatedValue.interpolate({
                    inputRange: [-250, 0, 250],
                    outputRange: ['10deg', '0deg', '-10deg'],
                  }),
                },
              ],
            },
          ]}>
          <FastImage style={styles.image} source={img} />
          <Animated.View
            style={[
              styles.overlay,
              { backgroundColor: '#de6d77' },
              {
                opacity: animatedValue.interpolate({
                  inputRange: [-120, 0],
                  outputRange: [0.8, 0],
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                }),
              },
            ]}>
            <Text style={styles.overlayText}>Decline</Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.overlay,
              { backgroundColor: '#2f9a5d' },
              {
                opacity: animatedValue.interpolate({
                  inputRange: [0, 120],
                  outputRange: [0, 0.8],
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                }),
              },
            ]}>
            <Text style={styles.overlayText}>Accept</Text>
          </Animated.View>
        </Animated.View>
      </Interactable.View>
    </View>
  );
};

export default Card;
