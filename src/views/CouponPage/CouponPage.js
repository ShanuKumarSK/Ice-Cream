import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FullButton from "../../components/common/FullButton";
import styles from './CouponPage_styles';
import CrossButton from '../../components/common/CrossButton';

const CouponPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Show this to counter</Text>
                <View style={styles.CrossButton}>
                    <CrossButton />
                </View>
                <ImageBackground source={require('../../assets/images/CouponBackground.png')} style={styles.couponBackground}>
                    <View style={styles.textarea}>
                        <Text style={styles.heading}>Baskin Robbins</Text>
                        <Text style={styles.date}>14 February 2020</Text>
                        <Text style={styles.time}>11:50 Pm</Text>
                        <Text style={styles.ordertext}>Order number</Text>
                        <Text style={styles.ordernumber}>44416545646444</Text>
                    </View>
                    <Image source={require('../../assets/images/DashLine.png')} style={styles.dashline} />
                    <Image source={require('../../assets/images/CouponBarCode.png')} style={styles.barcode} />
                </ImageBackground>
            </View>
            <View style={{ flex: 0.1 }}>
                <FullButton title="Share" onPress={() => navigation.navigate('Tabs')} />
            </View>
        </View>
    );
};

export default CouponPage;
