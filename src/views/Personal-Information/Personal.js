import React, { useState } from "react";
import BackButton from "../../components/common/BackButton";
import HeadingText from "../../components/common/HeadingText";
import SubHeading from '../../components/common/SubHeading';
import FullButton from "../../components/common/FullButton";
import InputField from "../../components/common/InputField";
import { ImageBackground, StyleSheet, View, } from "react-native";
const Personal = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.9 }}>
                <ImageBackground source={require('../../assets/images/signup.png')} style={styles.image}>
                    <View style={styles.backButtonContainer}>
                        <BackButton onPress={() => navigation.navigate('OTP')} />
                    </View>
                    <View style={styles.mainContainer}>
                        <HeadingText title="Personal information" />
                        <SubHeading title="Enter personal information" />
                        <SubHeading title="Name" />
                        <InputField placeholder="johnsonmarkson" />
                        <SubHeading title="Email" />
                        <InputField placeholder="johnsonmarkson@gmail.com" />
                    </View>
                </ImageBackground>
            </View>
            <View style={{ flex: 0.1 }}>
                <FullButton title="Next" onPress={() => navigation.navigate('Map')} />
            </View>
        </View>
    );
};
export default Personal;
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 400,
        justifyContent: 'center'
    },
    backButtonContainer: {
        top: 50,
    },
    mainContainer: {
        top: 190,
        left: 20
    },
});

