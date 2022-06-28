import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    paddingHorizontal: 60,
    height: 55,
    backgroundColor: '#FF5B87',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
  }
});

