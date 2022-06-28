import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const Item = ({ image }) => (
    <TouchableOpacity>
        <Image style={styles.topSliderImage} source={image} />
    </TouchableOpacity>
);
const HomePageTopSlider = () => {
    const renderItem = ({ item }) => (
        <Item image={item.image} />
    );
    return (
        <>
            <View style={{ flex: 1, marginTop: 20 }}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    initialScrollIndex={0}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    );
};
export default HomePageTopSlider;

const DATA = [
    {
        id: 1,
        image: require('../../assets/images/homebanner1.png'),
    },
    {
        id: 2,
        image: require('../../assets/images/homebanner2.png'),
    },
    {
        id: 3,
        image: require('../../assets/images/homebanner1.png'),
    },
    {
        id: 4,
        image: require('../../assets/images/homebanner2.png'),
    },
];