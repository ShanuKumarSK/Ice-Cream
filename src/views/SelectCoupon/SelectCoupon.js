import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react';
import TabHeading from '../../components/common/TabHeading';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from "../../components/common/BackButton";


const Data = [
    {
        id: 1,
        image: require('../../assets/images/Coupon-1.png'),
        code: 'CITIFOODIE',
        title: 'Free 1 scoop ice-cream',
        subtitle: 'Maximum discount upto $10.00 on orders above $50..',
    },
    {
        id: 2,
        image: require('../../assets/images/Coupon-2.png'),
        code: 'CITIFOODIE',
        title: 'Free 2 scoop ice-cream',
        subtitle: 'Maximum discount upto $10.00 on orders above $50..',
    },
    {
        id: 3,
        image: require('../../assets/images/Coupon-3.png'),
        code: 'CITIFOODIE',
        title: 'Free 3 scoop ice-cream',
        subtitle: 'Maximum discount upto $10.00 on orders above $50..',
    },
];

const SelectCoupon = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient style={{ flex: 1 }} colors={['rgba(243,124,250, 0.3)', 'rgba(255,186,99, 0.3)']} >
                <View>
                    <TabHeading title='        Select Coupon' />
                </View>
                <View>
                    <BackButton onPress={() => navigation.navigate('IceCreamDetails')} />
                </View>
                <FlatList
                    data={Data}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>
                                <View style={styles.card}>
                                    <View>
                                        <ImageBackground source={item.image} style={styles.couponBackground}>
                                            <View>
                                                <Text style={styles.onCouponText}>{item.code}</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                    <View style={styles.textContent}>
                                        <View>
                                            <Text style={[styles.title, styles.textSize]}>{item.title} </Text>
                                            <Text style={styles.subtitle}>{item.subtitle}</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity style={styles.whiteBackground}
                                                onPress={() => navigation.navigate('FreeScoop')}
                                            >
                                                <Image
                                                    style={styles.arrowImage}
                                                    source={require('../../assets/images/Coupon-Vector.png')}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />
            </LinearGradient>
        </View>
    );
};

export default SelectCoupon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    card: {
        width: '80%',
    },
    couponBackground: {
        width: 135,
        height: 37,
        justifyContent: 'center',
    },
    onCouponText: {
        alignSelf: "center",
        fontWeight: "bold",
        color: "black",
        fontSize: 14,
        letterSpacing: 1,
        paddingLeft: 12,
    },
    container: {
        paddingTop: 30,
        paddingLeft: 20,
    },
    title: {
        fontSize: 17,
        fontWeight: "700",
        color: "black",
        paddingVertical: 12,
    },
    subtitle: {
        fontSize: 14,
        letterSpacing: 0.5,
        width: "80%",
    },
    whiteBackground: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        right: 40,
    },
    arrowImage: {
        width: 8,
        height: 15,
        alignSelf: "center",
    },
    textContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

