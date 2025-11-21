/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten TypeScript template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import Home from './src/pages/home';
import My from './src/pages/my';
import MerchantList from './src/pages/merchant_list';
/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});

export default (): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const pageList = () => {
    if (selectedIndex === 0) {
      return <Home />;
    }
    if (selectedIndex === 1) {
      return <MerchantList />;
    }
    if (selectedIndex === 2) {
      return <My />;
    }
    return null;
  };
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>{pageList()}</Layout>
        <BottomNavigation
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}>
          <BottomNavigationTab title="商家" />
          <BottomNavigationTab title="商家列表" />
          <BottomNavigationTab title="我的" />
        </BottomNavigation>
      </ApplicationProvider>
    </>
  );
};
