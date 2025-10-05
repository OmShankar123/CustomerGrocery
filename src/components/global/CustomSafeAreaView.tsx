import { type FC, type ReactNode } from 'react';
import { SafeAreaView, StyleSheet, View, type ViewStyle } from 'react-native';

import { Colors } from '@/utils/Constants';

interface CustomSafeAreaViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

const CustomSafeAreaView: FC<CustomSafeAreaViewProps> = ({
  children,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <SafeAreaView />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
  },
});
export default CustomSafeAreaView;
