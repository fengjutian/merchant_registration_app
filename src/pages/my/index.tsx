import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
export default function MerchantList(): React.ReactElement {
  return (
    <Layout style={styles.container}>
      <Text category='h5'>商家列表</Text>
      <Text appearance='hint'>欢迎使用商家注册应用</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: '100%'
  },
  button: {
    marginTop: 16
  }
});