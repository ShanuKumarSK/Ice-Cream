import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from './styles';
const MostPopularSlider = ({ navigation }) => {

    return (
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.mostPopularWrapper}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('IceCreamDetails')}>
                                <Image source={item.image} style={styles.mostPopularImage} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.mostPopularTitle}>{item.title}</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};
export default MostPopularSlider;

const data = [
    {
        id: 1,
        image: require('../../assets/images/popularIcon1.png'),
        title: 'Italian Ice',
    },
    {
        id: 2,
        image: require('../../assets/images/popularIcon2.png'),
        title: 'Ice-Pancake',

    },
    {
        id: 3,
        image: require('../../assets/images/popularIcon3.png'),
        title: 'Mango lick lollies',
    },
    {
        id: 4,
        image: require('../../assets/images/popularIcon4.png'),
        title: 'Marocon ice',
    },
    {
        id: 5,
        image: require('../../assets/images/popularIcon1.png'),
        title: 'Italian Ice',
    },
    {
        id: 6,
        image: require('../../assets/images/popularIcon2.png'),
        title: 'Ice-Pancake',
    },
    {
        id: 7,
        image: require('../../assets/images/popularIcon3.png'),
        title: 'Mango lick lollies',
    },
    {
        id: 8,
        image: require('../../assets/images/popularIcon4.png'),
        title: 'Marocon ice',
    }
];