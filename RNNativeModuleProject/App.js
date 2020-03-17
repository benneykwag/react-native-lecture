import React from 'react'
import { View, Text, NativeModules, Platform } from 'react-native'

class App extends React.Component {
  render () {
    // 네이티브 모듈 설정
    const { RNCustomToastModule, RNNativeToastLibrary } = NativeModules

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            backgroundColor: 'blue',
            width: 200,
            color: 'white',
            fontWeight: 'bold',
            height: 60
          }}
          onPress={() => {
            // 최종 토스트 모듈 호출.
            if(Platform.OS == 'android'){
              RNCustomToastModule.show('Awesome', RNCustomToastModule.SHORT)
            }else{
              RNCustomToastModule.show('Awesome')
            }
          }}
        >
          Hello
        </Text>
      </View>
    )
  }
}

export default App
