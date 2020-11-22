/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// @ts-ignore
import version from '../version';
import MonoText from './MonoText';

export default function VersionDisplay() {
  const { bottom, left, right } = useSafeAreaInsets();
  return (
    <View
      style={{
        alignSelf: 'stretch'
      }}>
      <MonoText
        style={{
          fontSize: 10,
          padding: 10,
          textAlign: 'left',
          marginBottom: bottom,
          marginLeft: left,
          marginRight: right
        }}>
        Foundry Playground v{version}
      </MonoText>
    </View>
  );
}
