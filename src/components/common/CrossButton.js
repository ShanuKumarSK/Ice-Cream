import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const CrossButton = props => {
    return (
        <TouchableOpacity style={styles.myState} onPress={props.onPress}>
            <Image source={require('../../assets/images/CrossIcon.png')} style={styles.crossImage} />
        </TouchableOpacity>
    );
};

export default CrossButton;

const styles = StyleSheet.create({
    myState: {
        position: 'absolute',
        top: -30,
    },
    crossImage: {
        width: 20,
        height: 20,
    },
});