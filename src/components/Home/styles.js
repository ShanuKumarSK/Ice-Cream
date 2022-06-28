import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    ///Top Slider
    topSliderImage: {
        borderRadius: 8,
        height: 130,
        width: 190,
        marginRight: 20
    },
    ///Most Popular
    mostPopularWrapper: {
        width: 70,
        alignContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    mostPopularImage: {
        width: 60,
        height: 60,
        marginTop: 15,
        borderRadius: 10,
    },
    mostPopularTitle: {
        width: 62,
        fontSize: 14,
        color: 'black',
        paddingTop: 8,
        fontWeight: "400",
        textAlign: 'center',
    },
    ///Today's Featured
    todayFeatureImage: {
        width: 250,
        height: 150,
        marginTop: 15,
        borderRadius: 10,
        marginRight: 10
    },
    todayFeatureTextWrapper: {
        width: "60%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    todayFeatureImageText: {
        fontWeight: "700",
        color: "black",
        fontSize: 17,
        lineHeight: 25
    },
    ///Trending Flavour
    trendingFlavourWrapper: {
        width: 70,
        alignItems: 'center',
        marginRight: 20,
    },
    trendingFlavourImage: {
        width: 60,
        height: 60,
        marginTop: 15,
        borderRadius: 10,
    },
    trendingFlavourTitle: {
        fontSize: 13,
        color: 'black',
        paddingTop: 8,
        fontWeight: "400",
    },
    ///AllIceCreamShops
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    allIceCreamImage: {
        width: 100,
        height: 110,
        marginTop: 25,
        marginRight: 20,
        borderRadius: 10,
    },
    allIceCreamTextWrapper: {
        top: 38
    },
    allIceCreamText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    allIceCreamLocation: {
        color: '#7F7F7F'
    },
    allIceCreamRating: {
        color: '#7F7F7F',
        paddingTop: 5,
    },

});

export default styles;