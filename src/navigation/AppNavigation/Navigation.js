import { View, Text, ImageBackground } from 'react-native';
import HomeScreen from '../../views/HomeScreen/homeScreen';
import Login from '../../views/LoginPage/login';
import OTP from '../../views/OTP/otp';
import Personal from '../../views/Personal-Information/Personal';
import Onboarding from '../../views/OnBoarding/onboarding';
import MyTabs from '../BottomTabNavigation/BottomNavigation';
import IceCreamDetails from '../../views/IceCreamDetails/IceCreamDetails';
import AllShops from '../../views/AllShops/AllShops';
import Map from '../../views/Map/Map';
import SelectCoupon from '../../views/SelectCoupon/SelectCoupon';
import ChangeLocation from '../../views/ChangeLocation/ChangeLocation';
import FreeScoop from '../../views/FreeScoop/FreeScoop';
import QRpage from '../../views/QRpage/QRpage';
import CouponPage from '../../views/CouponPage/CouponPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


function SplashScreenImage({ navigation }) {
    setTimeout(() => {
        navigation.replace('Onboarding');
    }, 2000);
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assets/images/Splash.png")} >
        </ImageBackground>
    );
}

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="SplashScreenImage" component={SplashScreenImage} options={{ headerShown: false }} />
                    <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="OTP" component={OTP} options={{ headerShown: false }} />
                    <Stack.Screen name="Map" component={Map} options={{ headerShown: false }} />
                    <Stack.Screen name="Personal" component={Personal} options={{ headerShown: false }} />
                    <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />
                    <Stack.Screen name="IceCreamDetails" component={IceCreamDetails} options={{ headerShown: false }} />
                    <Stack.Screen name="AllShops" component={AllShops} options={{ headerShown: false }} />
                    <Stack.Screen name="SelectCoupon" component={SelectCoupon} options={{ headerShown: false }} />
                    <Stack.Screen name="ChangeLocation" component={ChangeLocation} options={{ headerShown: false }} />
                    <Stack.Screen name="FreeScoop" component={FreeScoop} options={{ headerShown: false }} />
                    <Stack.Screen name="QRpage" component={QRpage} options={{ headerShown: false }} />
                    <Stack.Screen name="CouponPage" component={CouponPage} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};
export default Navigation;