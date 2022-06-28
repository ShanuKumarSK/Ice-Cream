import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TabHeading from '../../components/common/TabHeading';
import styles from './Social_styles';
const Social = () => {
    const data = [
        {
            id: 1,
            image: require('../../assets/images/Rectangle10.png'),
            profile: require('../../assets/images/Profile1.png'),
            name: 'Guy Hawkins',
            title: 'Amet minim mollit non deserunt ullamco est',
            subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            date: '2 days ago',
            likes: '312',
        },
        {
            id: 2,
            image: require('../../assets/images/Rectangle11.png'),
            profile: require('../../assets/images/Profile2.png'),
            name: 'Johnson martin',
            title: 'Amet minim mollit non deserunt ullamco est',
            subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            date: '2 days ago',
            likes: '312',
        },
        {
            id: 3,
            image: require('../../assets/images/Rectangle10.png'),
            profile: require('../../assets/images/Profile1.png'),
            name: 'Guy Hawkins',
            title: 'Amet minim mollit non deserunt ullamco est',
            subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            date: '2 days ago',
            likes: '312',
        },
        {
            id: 4,
            image: require('../../assets/images/Rectangle11.png'),
            profile: require('../../assets/images/Profile2.png'),
            name: 'Johnson martin',
            title: 'Amet minim mollit non deserunt ullamco est',
            subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            date: '2 days ago',
            likes: '312',
        },
    ];
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['rgba(243,124,250, 0.3)', 'rgba(255,186,99, 0.3)']} style={{ flex: 1 }} >
                <TabHeading title='Social' />
                <View style={styles.addButton}>
                    <ImageBackground source={require('../../assets/images/Uploadback.png')} style={styles.addButtonBackground} >
                        <Image source={require('../../assets/images/PlusIcon.png')} style={styles.plusIcon} />
                    </ImageBackground>
                </View>
                <FlatList
                    // horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.maincontainer}>
                                <View style={styles.headerArea}>
                                    <View style={styles.headerLeft}>
                                        <View>
                                            <Image source={item.profile} style={styles.headerImage} />
                                        </View>
                                        <View style={styles.headerTextArea}>
                                            <Text style={styles.headerName}>{item.name}</Text>
                                            <Text style={styles.subtitle}>{item.date}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Image source={require('../../assets/images/ShareIcon.png')} style={styles.headerImage} />
                                    </View>
                                </View>
                                <View>
                                    <View>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.subtitle}>{item.subtitle}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('IceCreamDetails')}>
                                        <Image source={item.image} style={styles.mainImage} />
                                    </TouchableOpacity>
                                    <View style={styles.bottomArea}>
                                        <Image source={require('../../assets/images/LikeIcon.png')} style={styles.likeImage} />
                                        <Text style={styles.likes}>{item.likes}</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />
            </LinearGradient>
        </View >
    );
};
export default Social;