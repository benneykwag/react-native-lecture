import React, {Component} from 'react';
import {View, Text} from 'react-native';


interface appProps {

}

interface appState {
    title: string
}

class Header extends Component<appProps, appState> {
    constructor(props: appProps){
        super(props);
        this.state = {
            title: 'Hello'
        }
    }

    render(){
        return (
            <View><Text>{this.state.title}</Text></View>
        )
    }
}

export default Header;