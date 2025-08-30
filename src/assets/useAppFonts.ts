import * as Font from 'expo-font';

import { Fonts } from './index';

export function useAppFonts() {
  return Font.useFonts({
    'Okra-Regular': Fonts.okraRegular,
    'Okra-Medium': Fonts.okraMedium,
    'Okra-MediumLight': Fonts.okraMediumLight,
    'Okra-Bold': Fonts.okraBold,
    'Okra-ExtraBold': Fonts.okraExtraBold,
  });
}
