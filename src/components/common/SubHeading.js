import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const SubHeading = props => {
    return (
        <View>
            <Text style={styles.text}>{props.title}</Text>
        </View >
    );
};
export default SubHeading;
const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: '#7F7F7F',
        marginTop: 15,
        marginBottom: 10,
        fontWeight: '400'
    },
});