import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@ezi-rewards/types';
import Button from './components/Button';

// Define props for HomeScreen
type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hi, You have </Text>
      <View>
        <Text>Header</Text>
      </View>
      <View style={styles.buttonRow}>
        <Button />
        <Button />
      </View>
      <View>
        <Text>Barcode Image Holder</Text>
      </View>
      <View>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </View>
      <View>
        <Text>Footer Holder</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
  },
});
