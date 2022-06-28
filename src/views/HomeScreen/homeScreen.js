import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import Heading from '../../components/common/Heading';
import HomePageTopSlider from '../../components/Home/HomePageTopSlider';
import AllIceCreamShops from '../../components/Home/All-IceCreamShops';
import MostPopularSlider from '../../components/Home/MostPopularSlider';
import TodaysFeaturedSlider from '../../components/Home/TodaysFeaturedSlider';
import TrendingFlavourSlider from '../../components/Home/TrendingFlavourSlider';
import CustomText from '../../components/common/CustomText';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }) => {
    const data = [
        {
            id: 1,
        },
    ];
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['rgba(243,124,250, 0.3)', 'rgba(255,186,99, 0.3)']} style={{ flex: 1 }} >
                <TouchableOpacity onPress={() => navigation.navigate('ChangeLocation')}>
                    <View style={styles.locationContainer}>
                        <View>
                            <Image style={styles.locationIcon} source={require('../../assets/images/location1.png')} />
                        </View>
                        <View style={styles.textWrapper}>
                            <Text style={styles.locationHeading}>Delvin street</Text>
                            <Text style={styles.locationSubHeading}>
                                Malad, Malad West, Sydney, Australia{'...'}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ }) => {
                        return (
                            <View style={{ paddingLeft: '5%' }}>
                                <HomePageTopSlider />
                                <Heading title="Most popular Ice-cream" />
                                <MostPopularSlider />
                                <Heading title="Today's featured" />
                                <TodaysFeaturedSlider />
                                <Heading title="Trending Flavours" />
                                <TrendingFlavourSlider />
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                    <Heading title="All Ice-cream shops" />
                                    <View style={styles.seeall}>
                                        <CustomText text="See all" onPress={() => navigation.navigate('AllShops')} />
                                    </View>
                                </View>
                                <AllIceCreamShops />
                            </View>
                        );
                    }}
                />
            </LinearGradient>
        </View>
    );
};
export default HomeScreen;
const styles = StyleSheet.create({
    locationContainer: {
        paddingTop: 40,
        height: 110,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    locationIcon: {
        width: 40,
        height: 40,
        marginLeft: 15
    },
    textWrapper: {
        paddingLeft: 10,
    },
    locationHeading: {
        color: '#1E3A4F',
        fontSize: 17,
        fontWeight: "700"
    },
    locationSubHeading: {
        color: '#1E3A4F',
    },
    seeall: {
        marginTop: 25,
        right: 15,
    },
});