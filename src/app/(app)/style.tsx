import * as React from 'react';

import { Buttons } from '@/components/buttons';
import { Colors } from '@/components/colors';
import {
  FocusAwareStatusBar,
  SafeAreaView,
  ScrollView,
} from '@/components/global';
import { Inputs } from '@/components/inputs';
import { Typography } from '@/components/typography';

export default function Style() {
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="px-4">
        <SafeAreaView className="flex-1">
          <Typography />
          <Colors />
          <Buttons />
          <Inputs />
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
