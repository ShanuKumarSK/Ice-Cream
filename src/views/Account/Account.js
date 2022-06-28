import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import TabHeading from '../../components/common/TabHeading';
import ProfileList from '../../components/common/ProfileList';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Account_styles';

const Account = () => {
    return (
        <>
            <View style={styles.maincontainer}>
                <LinearGradient style={styles.maincontainer} colors={['rgba(243,124,250, 0.3)', 'rgba(255,186,99, 0.3)']}>
                    <TabHeading title='Profile' />
                    <ScrollView>
                        <View style={styles.container}>
                            <Image style={styles.image} source={require('../../assets/images/Account.png')} />
                            <View style={styles.nameArea}>
                                <Text style={styles.profilename}>Johnson markson</Text>
                                <Text style={styles.locationText}>
                                    <Image style={styles.loactionlogo} source={require('../../assets/images/location1.png')} />
                                    Dalvin street
                                </Text>
                            </View>
                        </View>
                        <View style={styles.waferArea} >
                            <ImageBackground source={require('../../assets/images/wafer.png')}>
                                <Text style={styles.offerText}>YOU HAVE ONLY 4 FREE SCOOPS LEFT FOR THIS MONTH</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.borderLine} />
                        <View>
                            <ProfileList title='My account' />
                            <ProfileList title='Post orders' />
                            <ProfileList title='My coupons' />
                            <ProfileList title='Elic Premium' />
                            <ProfileList title='Payment method' />
                        </View>
                        <View style={styles.labelArea}>
                            <Text style={styles.labelText} >Discount benefits</Text>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </View>
        </>
    );
};
export default Account;
