import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#FF5B87',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButtonContainer: {
        right: 190,
        top: 30,
    },
    bottomsection: {
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    upperslider: {
        justifyContent: "center",
        alignItems: "center",
    },
    container:
    {
        width, alignItems: 'center'
    },
    titleWrapper: {
        width: 165,

    },
    title: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: 'bold',
        color: 'black',
        lineHeight: 35,
    },
    imageWrapper: {
        paddingVertical: 30,
    },
    image: {
        width: 307,
        height: 307,
    },
    skipButtonContainer: {
        width: "20%",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginLeft: 40,
    },
    skipButtonText: {
        fontSize: 18,
        color: "gray",
        alignSelf: "center",
    },
});

export default styles;