import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
const InputField = props => {
    return (
        <View style={styles.inputField}>
            <TextInput style={styles.textinput} placeholder={props.placeholder} keyboardType="default" />
        </View>
    );
};
export default InputField;
const styles = StyleSheet.create({
    inputField: {
        borderWidth: 1,
        width: "90%",
        borderRadius: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        opacity: 0.5,
        marginTop: 10,
    },
    textinput: {
        height: 50,
        fontSize: 16,
        color: '#7F7F7F',
        justifyContent: 'center',
        paddingLeft: 30,
    },
});
