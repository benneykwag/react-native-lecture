import React, { Fragment } from "react";
import { StatusBar, SafeAreaView } from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import Styled from "styled-components/native";
import Counter from "./Screens/Counter";

const Container = Styled.View`
  flex:1;
  background-color: #EEE;
`;

const App = () => {
  return (
    <Container>
      <Counter title="카운터 앱" initValue={10} />
    </Container> 
  );
}
export default App;