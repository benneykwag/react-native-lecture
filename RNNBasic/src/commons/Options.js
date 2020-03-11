const { Navigation } = require('react-native-navigation');
export const Colors = {
  background: '#e8e8e8',
  primary: '#5847ff'
}

const setDefaultOptions = () => Navigation.setDefaultOptions({
  layout: {
    componentBackgroundColor: Colors.background,
    orientation: ['portrait'],
    direction: 'locale'
  },
  bottomTabs: {
    titleDisplayMode: 'alwaysShow'
  },
  bottomTab: {
    selectedIconColor: Colors.primary,
    selectedTextColor: Colors.primary
  }
});

export default setDefaultOptions