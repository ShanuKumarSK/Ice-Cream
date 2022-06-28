import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackButton from "../../components/common/BackButton";
import FullButton from "../../components/common/FullButton";

const FreeScoop = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.9 }}>

                <ImageBackground source={require('../../assets/images/FreeScoopBackground.png')} style={styles.BackgroundImage}>

                    <View>
                        <View style={styles.whiteBackground}>
                            <Image source={require('../../assets/images/FreeScoopImage.png')} style={styles.image} />
                        </View>
                        <View style={styles.texts}>
                            <Text style={styles.title}>Free 1 scoop ice-cream</Text>
                            <Text style={styles.subtitle}>Maximum discount upto $10.00 on orders above $50..</Text>
                        </View>
                    </View>
                    <View style={styles.backButton}>
                        <BackButton onPress={() => navigation.navigate('SelectCoupon')} />
                    </View>
                </ImageBackground>
                <Text style={styles.heading}>Please find QR in the store to get yourfree ice-cream</Text>
            </View>
            <View style={{ flex: 0.1 }}>
                <FullButton title="Scan now" onPress={() => navigation.navigate('CouponPage')} />
            </View>
        </View>
    );
};

export default FreeScoop;

const styles = StyleSheet.create({
    BackgroundImage: {
        width: '100%',
        height: 350,
    },
    whiteBackground: {
        backgroundColor: 'white',
        width: 90,
        height: 90,
        borderRadius: 50,
        marginLeft: 20,
        top: 115,
        justifyContent: 'center',
    },
    image: {
        width: 42,
        height: 55,
        alignSelf: 'center',
    },
    texts: {
        marginLeft: 20,
        top: 140,
    },
    title: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
        paddingBottom: 10,
    },
    subtitle: {
        color: 'white',
        fontSize: 15,
        letterSpacing: 1,
        lineHeight: 22,
        width: '90%'
    },
    backButton: {
        bottom: 80,
    },
    heading: {
        color: 'black',
        fontSize: 19,
        paddingLeft: 20,
        paddingTop: 25,
        width: '80%',
        lineHeight: 30,
    },

});