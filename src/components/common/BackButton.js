import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
const BackButton = props => {
    return (
        <TouchableOpacity style={styles.myState} onPress={props.onPress}>
            <Image source={require('../../assets/images/Vector.png')} />
        </TouchableOpacity>
    );
};
export default BackButton;
const styles = StyleSheet.create({
    myState: {
        position: 'absolute',
        left: 20,
        top: -40,
    },
});
