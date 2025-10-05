// import { useRouter } from 'expo-router';
// import React from 'react';

// import type { LoginFormProps } from '@/components/loginForm';
// import { LoginForm } from '@/components/loginForm';
// import { FocusAwareStatusBar } from '@/components/ui';
// import { useAuth } from '@/lib';

// export default function Login() {
//   const router = useRouter();
//   const signIn = useAuth.use.signIn();

//   const onSubmit: LoginFormProps['onSubmit'] = (data) => {
//     console.log(data);
//     signIn({ access: 'access-token', refresh: 'refresh-token' });
//     router.push('/');
//   };
//   return (
//     <>
//       <FocusAwareStatusBar />
//       <LoginForm onSubmit={onSubmit} />
//     </>
//   );
// }

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const login = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>login</Text>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
