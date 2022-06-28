import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackButton from "../../components/common/BackButton";
import LocationSearchBar from '../../components/common/LocationSearchBar';
import { WebView } from 'react-native-webview';

const ChangeLocation = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.Maplocation}>

                    <WebView source={{ html: '<iframe width="100%" height="100%"  scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Parkview%20Residence%20Colony,%20Sector%2066,%20Sahibzada%20Ajit%20Singh%20Nagar,%20Punjab%20160066+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">swimming watch</a></iframe>' }} />
                    <View style={styles.searchBar}>
                        <LocationSearchBar />
                    </View>
                    <View style={styles.backButtonContainer}><BackButton onPress={() => navigation.navigate('Tabs')} /></View>
                </View>
            </View>

        </View>
    );
};

export default ChangeLocation;

const styles = StyleSheet.create({

    Maplocation: {
        width: "100%",
        height: "100%",
        position: "relative",
    },
    backButtonContainer: {
        top: 98,
        left: 20,
        position: "absolute",
    },
    searchBar: {
        width: "100%",
        position: "absolute",
        marginTop: "10%",

    }
});