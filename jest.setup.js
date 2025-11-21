jest.mock('react-native-amap3d', () => ({
  MapView: () => null,
  AMapSdk: {init: jest.fn()},
}));

jest.mock('@ui-kitten/components', () => {
  const React = require('react');
  const {View, Text} = require('react-native');
  const Placeholder = props => React.createElement(View, props);
  return {
    ApplicationProvider: Placeholder,
    Layout: Placeholder,
    BottomNavigation: Placeholder,
    BottomNavigationTab: Placeholder,
    Icon: Placeholder,
    IconRegistry: Placeholder,
    Avatar: Placeholder,
    List: Placeholder,
    ListItem: Placeholder,
    Button: Placeholder,
    Input: Placeholder,
    Text,
  };
});

jest.mock('@ui-kitten/eva-icons', () => ({
  EvaIconsPack: {},
}));

jest.mock('@eva-design/eva', () => ({
  light: {},
}));
