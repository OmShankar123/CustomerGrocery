import React from 'react';
import { StyleSheet, View } from 'react-native';

import CustomSafeAreaView from '@/components/global/CustomSafeAreaView';
import ProductSlider from '@/components/login/ProductSlider';

const CustomerLoginScreen = () => {
  return (
    <View style={styles.container}>
      <CustomSafeAreaView>
        <ProductSlider />
      </CustomSafeAreaView>
    </View>
  );
};

export default CustomerLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
