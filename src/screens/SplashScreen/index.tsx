import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@ezi-rewards/types';

type Props = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

export const SplashScreen: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen'); // 🔥 Auto navigate after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup to avoid memory leaks
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
