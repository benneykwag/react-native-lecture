import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import Styled from 'styled-components/native'
import BigCatalog from '~/Components/BigCatalog'
import Movie from '~/Screens/MovieHome'
const Container = Styled.View`
    height: 300px;
    margin-bottom: 8px;
`;
interface Props {
    url: string;
    onPress: (id: number) => void;
}

const BigCatalogList = ({ url, onPress }: Props) => {
    const [data, setData] = useState<Array<IMovie>>([]);
    useEffect(() => {
        fetch(url).then(response => response.json()).then(json => {
            console.log(json)
            setData(json.data.movies)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (<Container>

        <FlatList
            horizontal={true}
            pagingEnabled={true}
            data={data}
            keyExtractor={(item, index) => {
                return `bigScreen-${index}`;
            }}
            renderItem={({ item, index }) => {
                return <BigCatalog 
                id={(item as IMovie).id}
                image={item.large_cover_image}
                year={item.year}
                title={item.title}
                genres={item.genres}
                onPress={onPress}
                />
            }}
        />
    </Container>)
}
export default BigCatalogList