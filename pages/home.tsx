import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export default function Home(): React.ReactElement {
  return (
    <Layout style={styles.container}>
      <Text category='h5'>商家注册</Text>
      <Text appearance='hint'>欢迎使用商家注册应用</Text>
      <Button style={styles.button}>开始</Button>
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

