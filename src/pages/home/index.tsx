import React from 'react';
import {View, StyleSheet, PermissionsAndroid, Platform} from 'react-native';
import {MapView} from 'react-native-amap3d';

export default function Home(): React.ReactElement {
  const [enableLocation, setEnableLocation] = React.useState(false);
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]).then(result => {
        const fine =
          result[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION];
        const coarse =
          result[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION];
        setEnableLocation(
          fine === PermissionsAndroid.RESULTS.GRANTED ||
            coarse === PermissionsAndroid.RESULTS.GRANTED,
        );
      });
    } else {
      setEnableLocation(true);
    }
  }, []);
  return (
    <View style={styles.container}>
      {/* <MapView
        style={styles.map}
        initialCameraPosition={{
          target: {latitude: 39.91095, longitude: 116.37296},
          zoom: 16,
        }}
        myLocationEnabled={enableLocation}
        myLocationButtonEnabled={enableLocation}
      /> */}
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
