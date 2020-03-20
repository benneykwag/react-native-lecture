import React, { useState } from 'react';
import { View, Text } from 'react-native';


interface Props {
    title?: string;
    subtitle?: string;
}

const Header = ({ title, subtitle }: Props) => {
    const [msg, setMsg] = useState('Welcome to My App')
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent: 'center'
        }}><Text>{msg}// {title}//{subtitle}</Text></View>
    )
}

export default Header;