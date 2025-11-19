import React from 'react';
import {View, ImageProps} from 'react-native';
import { Layout, Text, Button, Input, ButtonGroup, Avatar, ListItem, List } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const InstallButton = () => <Button size="tiny">INSTALL</Button>;

export default function MerchantList(): React.ReactElement {
  const [value, setValue] = React.useState('');
  const merchants = React.useMemo(() => ([
    { id: '1', name: 'UI Kitten 商城', description: 'React Native 组件示例' },
    { id: '2', name: '猫猫咖啡', description: '精品咖啡与甜品' },
    { id: '3', name: '小李书店', description: '图书与文具' },
    { id: '4', name: '好味道餐厅', description: '家常菜与特色菜' },
  ]), []);
  const [displayed, setDisplayed] = React.useState(merchants);
  const ItemImage = (props: ImageProps): React.ReactElement => <Avatar {...props} style={[props.style, styles.itemImage]}/>;
  const onSearch = React.useCallback(() => {
    const q = value.trim();
    if (!q) {
      setDisplayed(merchants);
      return;
    }
    const lower = q.toLowerCase();
    setDisplayed(merchants.filter(m => m.name.toLowerCase().includes(lower) || m.description.toLowerCase().includes(lower)));
  }, [value, merchants]);
  const renderItem = ({ item }: { item: { id: string, name: string, description: string } }) => (
    <ListItem
      title={item.name}
      description={item.description}
      accessoryLeft={ItemImage}
      accessoryRight={InstallButton}
    />
  );

  return (
    <Layout style={styles.container}>
      <View style={styles.searchContainer} >
        <Input
          placeholder="请输入"
          value={value}
          style={{width: '80%', marginRight: 8}}
          onChangeText={nextValue => setValue(nextValue)}
          onSubmitEditing={onSearch}
        />
        <Button
          appearance="outline"
          status="primary"
          onPress={onSearch}
        >搜索</Button>
      </View>
      <List
        data={displayed}
        renderItem={renderItem}
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
  },
});