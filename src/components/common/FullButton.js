import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const FullButton = props => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default FullButton;

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        width: "90%",
        borderRadius: 40,
        paddingHorizontal: 10,
        height: 55,
        backgroundColor: '#FF5B87',
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 15,
    },
});
