import React, { type FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { logoImage } from '@/assets';
import { Colors } from '@/utils/Constants';
import { screenHeight, screenWidth } from '@/utils/Scaling';

const SplashScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={logoImage} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: screenHeight * 0.7,
    width: screenWidth * 0.7,
    resizeMode: 'contain',
  },
});
