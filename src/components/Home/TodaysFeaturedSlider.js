import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import styles from './styles';
const TodaysFeaturedSlider = () => {
    return (
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('IceCreamDetails')}>
                                <ImageBackground source={item.image} style={styles.todayFeatureImage}>
                                    <View style={styles.todayFeatureTextWrapper}>
                                        <Text style={styles.todayFeatureImageText}>{item.title}</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
};
export default TodaysFeaturedSlider;
const data = [
    {
        id: 1,
        image: require('../../assets/images/featureImage.png'),
        title: 'GET 50% OFF ON YOUR FIRST ORDER',
    },
    {
        id: 2,
        image: require('../../assets/images/featureImage.png'),
        title: 'GET 50% OFF ON YOUR FIRST ORDER',
    },
    {
        id: 3,
        image: require('../../assets/images/featureImage.png'),
        title: 'GET 50% OFF ON YOUR FIRST ORDER',
    },
    {
        id: 4,
        image: require('../../assets/images/featureImage.png'),
        title: 'GET 50% OFF ON YOUR FIRST ORDER',
    },
];