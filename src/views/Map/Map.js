import React from "react";
import { StyleSheet, Text, View, Image, } from "react-native";
import FullButton from "../../components/common/FullButton";
import BackButton from "../../components/common/BackButton";
import { WebView } from 'react-native-webview';
const MapPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.9 }}>
                <View style={styles.Maplocation}>
                    <WebView source={{ html: '<iframe width="100%" height="100%"  scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Parkview%20Residence%20Colony,%20Sector%2066,%20Sahibzada%20Ajit%20Singh%20Nagar,%20Punjab%20160066+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">swimming watch</a></iframe>' }} />
                    <View style={styles.backButtonContainer}><BackButton onPress={() => navigation.navigate('Personal')} /></View>
                </View>
                <View style={{ left: 15 }}>
                    <Text style={styles.Text1}>Location</Text>
                    <Text style={styles.Text2}>
                        <Image style={{ height: 30, width: 30 }} source={require('../../assets/images/location2.png')} />Delvin street</Text>
                    <Text style={styles.Text3}>Malad, Malad West, Sydney, Australia </Text>
                </View>
            </View>
            <View style={{ flex: 0.1 }}>
                <FullButton title="Confirm location" onPress={() => navigation.navigate('Tabs')} />
            </View>
        </View>
    );
};
export default MapPage;
const styles = StyleSheet.create({
    Maplocation: {
        width: 400,
        height: 550,
    },
    backButtonContainer: {
        bottom: 450,
    },
    Text1: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: "600",
        color: '#7F7F7F'
    },
    Text2: {
        color: "#FF5B87",
        fontSize: 20,
        lineHeight: 60,
        fontWeight: "700",
    },
    Text3: {
        fontSize: 16,
        fontWeight: "700",
        opacity: 0.6,
        color: '#7F7F7F'
    },


});