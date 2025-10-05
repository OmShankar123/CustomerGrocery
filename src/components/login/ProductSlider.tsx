import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { imageData } from '@/utils/dummyData';

const ProductSlider = () => {
  const rows = useMemo(() => {
    const result = [];
    for (let i = 0; i < imageData.length; i += 4) {
      result.push(imageData.slice(i, i + 4));
    }
    return result;
  }, []);

  return (
    <View pointerEvents="none">
      <Text>ProductSlider</Text>
    </View>
  );
};

export default ProductSlider;

const styles = StyleSheet.create({});
