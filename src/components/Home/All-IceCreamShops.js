import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import CustomText from '../../components/common/CustomText';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const AllIceCreamShops = ({ }) => {
    const navigation = useNavigation();
    return (
        <View>
            <FlatList
                // horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('IceCreamDetails')}>
                                    <Image source={item.image} style={styles.allIceCreamImage} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.allIceCreamTextWrapper}>
                                <Text style={styles.allIceCreamText}>{item.title}</Text>
                                <CustomText text="All flavour" onPress={() => navigation.navigate('AllShops')} />
                                <Text style={styles.allIceCreamLocation}>{item.location}</Text>
                                <Text style={styles.allIceCreamRating}>{item.rating}</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );

};
export default AllIceCreamShops;

const data = [
    {
        id: 1,
        image: require('../../assets/images/FlavourIcon3.png'),
        title: 'The royal Shop',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 2,
        image: require('../../assets/images/FlavourIcon2.png'),
        location: 'Bandra kurla . 12Km',
        title: 'Haap Ice cream',
        rating: '* 4.1',
    },
    {
        id: 3,
        image: require('../../assets/images/FlavourIcon3.png'),
        title: 'Rainbow',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 4,
        image: require('../../assets/images/FlavourIcon4.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 5,
        image: require('../../assets/images/FlavourIcon1.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 6,
        image: require('../../assets/images/FlavourIcon3.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 7,
        image: require('../../assets/images/FlavourIcon2.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
];