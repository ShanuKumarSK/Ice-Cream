import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        width: '100%',
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontWeight: '700',
        fontSize: 21,
        paddingVertical: 45,
    },
    couponBackground: {
        height: '88%',
        width: '93%',
        left: 13,
    },
    barcode: {
        width: 120,
        height: 95,
        alignSelf: 'center',
        right: 15,
        top: 110,
    },
    dashline: {
        width: 250,
        height: 1,
        alignSelf: 'center',
        right: 15,
        top: 45,
    },
    textarea: {
        alignItems: 'center',
        width: '90%',
    },
    heading: {
        color: 'black',
        fontWeight: '600',
        fontSize: 40,
        paddingVertical: 35,
    },
    date: {
        color: 'black',
        fontWeight: '600',
        fontSize: 24,
    },
    time: {
        color: 'gray',
        fontWeight: '500',
        fontSize: 18,
        paddingVertical: 15,
    },
    ordertext: {
        color: 'black',
        fontWeight: '500',
        fontSize: 18,
        paddingVertical: 8,
    },
    ordernumber: {
        color: 'black',
        fontWeight: '700',
        fontSize: 24,
    },
    CrossButton: {
        left: 160,
        bottom: 40,
    },
});

export default styles;