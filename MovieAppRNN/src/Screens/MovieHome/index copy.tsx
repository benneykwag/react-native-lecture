import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import Styled from 'styled-components/native'

import BitCatalogList from '../BigCatalogList'
import SubCatalogList from '../SubCatalogList'
// import SubCatalogList from '/SubCatalogList'
const Navigation = require('../../services/Navigation');
const { stack, component } = require('../../commons/Layouts');

import Screens from '~/Screens/Screens';
const { isString, get } = require('lodash');
const Container = Styled.ScrollView`
    flex:1;
    background-color: #141414;
`;
const StyleButton = Styled.TouchableOpacity`
    padding: 8px;
`;

const Icon = Styled.Image``;


const MovieHome = ({ }) => {
    const _logout = () => {
        AsyncStorage.removeItem('key');
    }
    useEffect(() => {
        
    }, [])
    return (<Container>
        <BitCatalogList
            onPress={() => {
                Navigation.showModal(Screens.MovieDetail);
            }}
            url="https://yts.mx/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5" />
        <SubCatalogList title="최신 등록순" url="https://yts.mx/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10"
            onPress={(id: number) => {
                Navigation.showModal(Screens.MovieDetail);
            }} />
        <SubCatalogList title="평점순" url="https://yts.mx/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10"
            onPress={(id: number) => {
                Navigation.showModal(Screens.MovieDetail);
            }} />
        <SubCatalogList title="다운로드순" url="https://yts.mx/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10"
            onPress={(id: number) => {
                Navigation.showModal(Screens.MovieDetail);
            }} />
    </Container>)
}

export default MovieHome