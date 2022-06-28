import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Heading = props => {
    return (
        <View>
            <Text style={styles.text}>{props.title}</Text>
        </View >
    );
};
export default Heading;
const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 20,
        marginTop: 25,
        fontWeight: "600",
    },
});
