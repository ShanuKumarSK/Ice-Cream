import React from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import BackButton from '../../components/common/BackButton';
import HeadingText from '../../components/common/HeadingText';
import FullButton from '../../components/common/FullButton';
import SubHeading from '../../components/common/SubHeading';
import CustomText from '../../components/common/CustomText';
import { ImageBackground, StyleSheet, View } from 'react-native';
const OTP = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.9 }}>
                <ImageBackground
                    source={require('../../assets/images/signup.png')}
                    style={styles.image}>
                    <View style={styles.backButtonContainer}>
                        <BackButton onPress={() => navigation.navigate('Login')} />
                    </View>
                    <View style={styles.mainContainer}>
                        <HeadingText title="OTP" />
                        <SubHeading title="We've send 4 Digit OTP to +91 95651212112" />
                        <CustomText text="Change mobile" />
                        <SubHeading title="OTP" />
                        <View>
                            <OTPTextInput
                                containerStyle={styles.otpContainer}
                                textInputStyle={styles.otpTextInput}
                            />
                        </View>
                        <CustomText text="Resend" />
                    </View>
                </ImageBackground>
            </View>
            <View style={{ flex: 0.1 }}>
                <FullButton
                    title="Next"
                    onPress={() => navigation.navigate('Personal')}
                />
            </View>
        </View>
    );
};
export default OTP;
const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 400,
        justifyContent: 'center',
    },
    backButtonContainer: {
        top: 30,
    },
    mainContainer: {
        top: 150,
        left: 20,
    },
    otpContainer: {
        width: 320,
        marginBottom: 20
    },
    otpTextInput: {
        borderRadius: 50,
        borderBottomWidth: 2,
        borderWidth: 2,
    },
});
