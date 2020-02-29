import React from 'react'
import Styled from 'styled-components/native'

const Container = Styled.View`
    flex:1;
    align-items: center;
    justify-content: center
`;

const Label = Styled.Text`

`;

interface Props { }

const EmptyItem = ({ }: Props) => {
    return (<Container><Label>하단에 "+" 버튼을 클릭하세요.</Label></Container>)
}

export default EmptyItem