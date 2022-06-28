import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const DotPagination = (props) => {
    return (
        <View style={[styles.container]}>
            <Dot color={props.currentIndex == 0 ? "black" : "gray"} />
            <Dot color={props.currentIndex == 1 ? "black" : "gray"} />
            <Dot color={props.currentIndex == 2 ? "black" : "gray"} />

        </View>
    );
};


const Dot = (props) => {
    return (
        <View
            style={[
                styles.dot,
                {
                    marginHorizontal: 5,
                    backgroundColor: props.color,
                }
            ]}
        />
    );
};


export default DotPagination;

const styles = StyleSheet.create({
    dot: {
        borderRadius: 7,
        height: 10,
        width: 10,
        marginTop: 40,
        marginBottom: 35,
        flexDirection: 'row'
    },
    container: {
        flexDirection: 'row',
    }
});