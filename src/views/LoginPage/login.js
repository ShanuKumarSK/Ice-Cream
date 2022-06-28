import React from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from "react-native";
import BackButton from "../../components/common/BackButton";
import HeadingText from "../../components/common/HeadingText";
import SubHeading from '../../components/common/SubHeading';
import FullButton from "../../components/common/FullButton";
import InputField from "../../components/common/InputField";
const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.9 }}>
                <ImageBackground source={require('../../assets/images/signup.png')} style={styles.image}>
                    <View><BackButton onPress={() => navigation.navigate('Onboarding')} /></View>
                    <View style={styles.mainContainer}>
                        <HeadingText title="Login" />
                        <SubHeading title="Enter your mobile number to continue" />
                        <SubHeading title="Enter mobile number" />
                        <InputField placeholder="+61   999-999-9222" />
                    </View>
                </ImageBackground>
            </View>
            <View style={{ flex: 0.1 }}>
                <FullButton title="Agree & Continue" onPress={() => navigation.navigate('OTP')} />
            </View>
        </View>
    );
};
export default Login;
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 400,
        justifyContent: 'center'
    },
    mainContainer: {
        top: 140,
        left: 20
    },
});



