import React from 'react';
import {View, ImageProps} from 'react-native';
import { Layout, Text, Button, Input, ButtonGroup, Avatar, ListItem} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const InstallButton = () => (
  <Button size='tiny'>
    INSTALL
  </Button>
);

export default function MerchantList(): React.ReactElement {

   const [value, setValue] = React.useState('');

   const ItemImage = (props: ImageProps): React.ReactElement => (
      <Avatar
        {...props}
        style={[props.style, styles.itemImage]}

      />
    );


  return (
    <Layout style={styles.container}>
      <View style={styles.searchContainer} >
        <Input
          placeholder='请输入'
          value={value}
          style={{width: '80%', marginRight: 8}}
          onChangeText={nextValue => setValue(nextValue)}
        />
        <Button
          appearance='outline'
          status='primary'
        >搜索</Button>
      </View>

      <ListItem
        title='UI Kitten'
        description='A set of React Native components'
        accessoryLeft={ItemImage}
        accessoryRight={InstallButton}
      />



    </Layout>
  );
}

const styles = StyleSheet.create({
   itemImage: {
    tintColor: null,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 16,
    width: '100%'
  },
  button: {
    marginTop: 16
  },
  searchContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  }
});