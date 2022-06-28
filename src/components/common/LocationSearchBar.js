import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
const LocationSearchBar = () => {
    return (
        <>
            <View>
                <TextInput
                    placeholder="Take me back to ELIC"
                    style={styles.root}
                    keyboardType="default"
                />
            </View>
        </>
    );
};
export default LocationSearchBar;
const styles = StyleSheet.create({

    root: {
        paddingLeft: 50,
        paddingVertical: 13,
        borderRadius: 10,
        fontSize: 16,
        borderColor: '#1E3A4F',
        backgroundColor: '#fff',
        width: "90%",
        alignSelf: "center",
    },
});