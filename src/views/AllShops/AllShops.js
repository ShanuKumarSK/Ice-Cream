import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';
import BackButton from "../../components/common/BackButton";
import TabHeading from '../../components/common/TabHeading';
import SearchInput from '../../components/common/SearchInput';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../../components/common/CustomText';
import styles from './AllShops_styles';
const AllShops = ({ }) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient style={{ flex: 1 }} colors={['rgba(243,124,250, 0.3)', 'rgba(255,186,99, 0.3)']} >
                <View style={{}}>
                    <TabHeading title='        All-Shops' />
                </View>
                <View>
                    <BackButton onPress={() => navigation.navigate('Tabs')} />
                </View>
                <SearchInput />
                <View style={{ flex: 1 }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('IceCreamDetails')}>
                                    <Image
                                        source={item.image}
                                        style={styles.imageArea}
                                    />
                                </TouchableOpacity>
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <CustomText text="All flavour" onPress={() => navigation.navigate('AllShops')} />
                                    <Text style={styles.description}>{item.location}</Text>
                                    <Text style={styles.description}>{item.rating}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </LinearGradient>
        </View>
    );
};
export default AllShops;

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
        image: require('../../assets/images/FlavourIcon4.png'),
        title: 'Rainbow',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 4,
        image: require('../../assets/images/FlavourIcon1.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 5,
        image: require('../../assets/images/FlavourIcon3.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 6,
        image: require('../../assets/images/FlavourIcon2.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 7,
        image: require('../../assets/images/FlavourIcon4.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 8,
        image: require('../../assets/images/FlavourIcon1.png'),
        title: 'The royal Shop',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 9,
        image: require('../../assets/images/FlavourIcon3.png'),
        location: 'Bandra kurla . 12Km',
        title: 'Haap Ice cream',
        rating: '* 4.1',
    },
    {
        id: 10,
        image: require('../../assets/images/FlavourIcon2.png'),
        title: 'Rainbow',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 11,
        image: require('../../assets/images/FlavourIcon4.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 12,
        image: require('../../assets/images/FlavourIcon1.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 13,
        image: require('../../assets/images/FlavourIcon3.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 14,
        image: require('../../assets/images/FlavourIcon2.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 15,
        image: require('../../assets/images/FlavourIcon4.png'),
        location: 'Bandra kurla . 12Km',
        title: 'Haap Ice cream',
        rating: '* 4.1',
    },
    {
        id: 16,
        image: require('../../assets/images/FlavourIcon1.png'),
        title: 'Rainbow',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 17,
        image: require('../../assets/images/FlavourIcon3.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 18,
        image: require('../../assets/images/FlavourIcon2.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 19,
        image: require('../../assets/images/FlavourIcon4.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
    {
        id: 20,
        image: require('../../assets/images/FlavourIcon1.png'),
        title: 'Kwality walls',
        location: 'Bandra kurla . 12Km',
        rating: '* 4.1',
    },
];
