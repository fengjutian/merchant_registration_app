import React from 'react';
import { Layout, Text, Button, Input} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
export default function MerchantList(): React.ReactElement {

   const [value, setValue] = React.useState('');
  return (
    <Layout style={styles.container}>
       <Input
        placeholder='请输入'
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
      />
      <Button
        style={styles.button}
        appearance='outline'
        status='primary'
      >
        搜索
      </Button>
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