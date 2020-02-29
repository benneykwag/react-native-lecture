import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import Styled from "styled-components/native";
import IMovie from '~/Screens/MovieHome'
const Container = Styled.View`
    margin: 8px 0px;
`;
const InfoContainer = Styled.View`
    justify-content: space-between;
    padding: 8px 16px;
`;

const Title = Styled.Text`
    font-size: 16px;
    color: #FFFFFF;
    font-weight: bold
`;

const CatalogContainer = Styled.View`
    height: 201px;
`;

const CatalogImageContainer = Styled.TouchableOpacity`
    padding: 8px 4px;
`;
const CatalogImage = Styled.Image`

`;

interface Props {
    title: string,
    url: string,
    onPress: (id: number) => void
}

const SubCatalogList = ({ title, url, onPress }: Props) => {
    const [data, setData] = useState<Array<IMovie>>([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setData(json.data.movies);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <Container>
            <InfoContainer>
                <Title>
                    {title}
                </Title>
                <CatalogContainer>
                    <FlatList horizontal={true} data={data}
                        keyExtractor={(item, index) => {
                            return `catalogList-${item.id}-${index}`;
                        }}
                        renderItem={({ item, index }) => {
                            return (
                                <CatalogImageContainer activeOpacity={1}
                                    onPress={() => {
                                        onPress(item.id);
                                    }}>
                                    <CatalogImage
                                        source={{ uri: item.large_cover_image }}
                                        style={{ width: 136, height: 201 }}
                                    />
                                </CatalogImageContainer>
                            );
                        }}
                    />
                </CatalogContainer>
            </InfoContainer>
        </Container>
    );
};
export default SubCatalogList