import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    maincontainer: {
        paddingLeft: 20
    },
    headerArea: {
        width: "95%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        justifyContent: "space-between",
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerImage: {
        width: 40,
        height: 40,
    },
    mainImage: {
        width: "95%",
        height: 200,
        marginTop: 10,
        borderRadius: 12,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    subtitle: {
        fontSize: 13,
        width: '75%',
        lineHeight: 17,
        color: '#7F7F7F',
    },
    headerTextArea: {
        left: 15,
    },
    headerName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    likeImage: {
        width: 30,
        height: 27
    },
    likes: {
        paddingLeft: 10,
        color: 'black'
    },
    bottomArea: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    addButton: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'flex-end',
        bottom: '6%',
        right: '5%',
    },
    addButtonBackground: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusIcon: {
        width: 20,
        height: 20
    },
});

export default styles;