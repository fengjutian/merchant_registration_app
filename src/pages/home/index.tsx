import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MapView, AMapSdk } from 'react-native-amap3d'

export default function Home(): React.ReactElement {
  React.useEffect(() => {
    AMapSdk.init('5131350db8ad49230fd4c7f3cab4f1d8')
  }, [])
  return (
    <View style={styles.container}>
      <MapView
        coordinate={{
          latitude: 39.91095,
          longitude: 116.37296,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});