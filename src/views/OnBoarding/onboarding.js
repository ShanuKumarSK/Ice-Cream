import React from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import BackButton from '../../components/common/BackButton';
import CustomButton from '../../components/common/CustomButton';
import DotPagination from '../../components/common/DotPagination';
import styles from './Onboarding_styles';

const Onboard = [
    {
        key: 1,
        title: 'Order from top &Favourite shop',
        image: require('../../assets/images/Onboarding1.png')
    },
    {
        key: 2,
        title: 'Reedem your reward at store',
        image: require('../../assets/images/Onboarding2.png')
    },
    {
        key: 3,
        title: 'Enjoy your free scoop ice-cream',
        image: require('../../assets/images/Onboarding3.png'),
    },

];
const Onboarding = ({ navigation }) => {
    const renderItem = ({ item, index }) => {
        return (
            <>
                <View style={styles.upperslider}>
                    {index === 1 ? (
                        <View style={styles.container}>
                            <View style={styles.backButtonContainer}>
                                <BackButton onPress={() => navigation.navigate('SplashScreenImage')} />
                            </View>
                            <StatusBar animated={true}
                                backgroundColor="transparent"
                                barStyle={"dark-content"}
                                translucent={true} />
                            <View style={styles.imageWrapper}>
                                <Image style={styles.image} source={item.image} />
                            </View>
                            <DotPagination currentIndex={index} />
                            <View style={styles.titleWrapper}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        </View>
                    ) : (
                        <View style={styles.container}>
                            <View style={styles.titleWrapper}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                            <DotPagination currentIndex={index} />
                            <View style={styles.imageWrapper}>
                                <Image style={styles.image} source={item.image} />
                            </View>
                        </View>
                    ) && index === 2 ? (
                        <View style={styles.container}>
                            <View style={styles.backButtonContainer}>
                                <BackButton onPress={() => navigation.navigate('SplashScreenImage')} />
                            </View>
                            <View style={styles.titleWrapper}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                            <DotPagination currentIndex={index} style={styles.index1dots} />
                            <View style={styles.imageWrapper}>
                                <Image style={styles.image} source={item.image} />
                            </View>

                        </View>

                    ) : (
                        <View style={styles.container}>
                            <View style={styles.titleWrapper}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                            <DotPagination currentIndex={index} style={{ position: 'absolute' }} />
                            <View style={styles.imageWrapper}>
                                <Image style={styles.image} source={item.image} />
                            </View>
                        </View>
                    )}
                </View>
            </>

        );

    };
    const keyExtractor = item => item.title;
    return (
        <View style={{ flex: 1 }}>
            <SwiperFlatList
                style={{ flex: 0.89 }}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                data={Onboard}
                paginationActiveColor={'black'}
                paginationStyleItem={{ bottom: 500 }}
                onChangeIndex={(index) => {
                    index === 2 ? "abc" : "cfd";
                }}
            />
            <View style={[styles.bottomsection, { flex: 0.11 }]}>
                <TouchableOpacity style={styles.skipButtonContainer} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.skipButtonText}>Skip</Text>
                </TouchableOpacity>
                <CustomButton title="Login" onPress={() => navigation.navigate('Login')} />
            </View>
        </View >
    );
};



export default Onboarding;



