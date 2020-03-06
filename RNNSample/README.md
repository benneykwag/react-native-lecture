## Getting Started

1. Clone the repo
```bash
git clone https://github.com/kanzitelli/react-native-navigation-starter.git new-project
```

2. Install packages
```bash
cd new-project
npm i
cd ios/ && pod install && cd ../
```

3. Rename the app using [react-native-rename](https://github.com/junedomingo/react-native-rename) if needed. If you do so, don't forget to run `cd ios/ && pod install && cd ../` when the process is finished. Also keep in mind that bundle identifier must be valid for both platforms or change it manually.

4. Run it!
```bash
react-native run-ios
react-native run-android
```

## Todos
yarn add typescript @types/react @types/react-native @types/styled-components babel-plugin-root-import

yarn add react-native-ui-lib react-native-reanimated

yarn add @react-native-community/blur

yarn add react-native-gesture-handler

yarn add @react-native-community/datetimepicker