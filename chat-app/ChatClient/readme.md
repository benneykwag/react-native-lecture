yarn add redux react-redux
yarn add redux-socket.io
yarn add socket.io-client@2.1.1
yarn add react-navigation
yarn add react-native-reanimated react-native-gesture-handler 
react-native-screens react-native-safe-area-context @react-native-community/masked-view react-navigation-stack
yarn add react-native-gifted-chat

server start
 cd CharServer -> nodemon server.js

yarn ios & yarn android
yarn start --reset-cache

To finalize installation of react-native-screens for Android, add the following two lines to dependencies section in android/app/build.gradle:
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'