import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const HeadingText = props => {
    return (
        <View>
            <Text style={styles.text}>{props.title}</Text>
        </View >
    );
};
export default HeadingText;
const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 30,
        fontWeight: "700",
        textAlign: 'left',
    },
});


