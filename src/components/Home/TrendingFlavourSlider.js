import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from './styles';

const TrendingFlavourSlider = () => {

    return (
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.trendingFlavourWrapper}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('IceCreamDetails')}>
                                <Image source={item.image} style={styles.trendingFlavourImage} />
                            </TouchableOpacity>
                            <View style={{}}>
                                <Text style={styles.trendingFlavourTitle}>{item.title}</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};
export default TrendingFlavourSlider;
const data = [
    {
        id: 1,
        image: require('../../assets/images/popularIcon1.png'),
        title: 'Black Berry',
    },
    {
        id: 2,
        image: require('../../assets/images/popularIcon2.png'),
        title: 'Strawberry',
    },
    {
        id: 3,
        image: require('../../assets/images/popularIcon3.png'),
        title: 'Dry-Fruit',
    },
    {
        id: 4,
        image: require('../../assets/images/popularIcon4.png'),
        title: 'Mix',
    },
    {
        id: 5,
        image: require('../../assets/images/popularIcon1.png'),
        title: 'Black Berry',
    },
    {
        id: 6,
        image: require('../../assets/images/popularIcon2.png'),
        title: 'Strawberry',
    },
    {
        id: 7,
        image: require('../../assets/images/popularIcon3.png'),
        title: 'Dry-Fruit',
    },
    {
        id: 8,
        image: require('../../assets/images/popularIcon4.png'),
        title: 'Mix',
    }
];