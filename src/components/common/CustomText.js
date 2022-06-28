import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const CustomText = props => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.root}> {props.text} </Text>
            </TouchableOpacity>
        </View>
    );
};
export default CustomText;
const styles = StyleSheet.create({
    root: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#FF5B87',
        paddingVertical: 5,
    },
});