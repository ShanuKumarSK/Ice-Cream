import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
    },
    nameArea: {
        flexDirection: 'column',
        alignSelf: 'center',
    },
    locationText: {
        fontSize: 15,
        fontWeight: '700',
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        justifyContent: 'space-around'
    },
    image: {
        flexDirection: "column",
        alignSelf: 'center',
        width: 70,
        height: 70,
    },
    waferArea: {
        margin: 10,
        marginTop: 30,
        borderRadius: 20,
        overflow: 'hidden'
    },
    profilename: {
        flexDirection: "column",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: '#1E3A4F',
        marginRight: 60,
    },
    loactionlogo: {
        width: 20,
        height: 20,
    },
    offerText: {
        color: '#070923',
        fontSize: 15,
        alignSelf: 'center',
        textAlign: 'center',
        margin: 20,
        fontWeight: '800',
        letterSpacing: 2
    },
    borderLine: {
        marginTop: 20,
        borderBottomColor: '#3F4279',
        borderBottomWidth: 3,
        width: '93%',
        alignSelf: 'center'
    },
    labelArea: {
        height: 27,
        backgroundColor: '#FEC20C',
        borderRadius: 50,
        width: 140,
        bottom: 110,
        left: 140,
        flexDirection: 'column'
    },
    labelText: {
        margin: 5,
        fontSize: 12,
        alignSelf: 'center',
        color: 'white',
    },
});

export default styles;