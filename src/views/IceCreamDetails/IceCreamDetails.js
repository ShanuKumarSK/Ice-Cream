import React from 'react';
import { View, Image, StyleSheet, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import BackButton from '../../components/common/BackButton';
import CustomText from '../../components/common/CustomText';
import Heading from '../../components/common/Heading';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const IceCreamDetails = () => {

    const navigation = useNavigation();
    return (
        <>
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['rgba(243,124,250, 0.3)', 'rgba(255,186,99, 0.3)']} style={{ flex: 1 }} >
                    <Image
                        style={styles.imageContainer}
                        source={require('../../assets/images/FlavourIcon4.png')}
                    />
                    <View style={styles.backButton}>
                        <BackButton onPress={() => navigation.navigate('AllShops')} />
                    </View>
                    <View style={styles.textArea}>
                        <Text style={styles.icecreamDetailsHeading}>Rainbow ice cream</Text>
                        <CustomText text="All flavours" onPress={() => navigation.navigate('SelectCoupon')} />
                        <Text style={styles.description}>Reference site about
                            Lorem Ipsum, giving information on its origins, as well as a random Lipsum
                            generator.</Text>
                        <Heading title="Recommended products" />

                        <View>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={data}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={styles.container}>
                                            <View>
                                                <TouchableOpacity onPress={() => navigation.navigate('SelectCoupon')}>
                                                    <Image source={item.image} style={styles.allIceCreamImage} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.allIceCreamTextWrapper}>
                                                <Text style={styles.allIceCreamText}>{item.title}</Text>
                                                <TouchableOpacity style={styles.getButton} onPress={() => navigation.navigate('SelectCoupon')}>
                                                    <Text style={styles.getText}>Get</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    );
                                }}
                            />
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </>
    );
};
export default IceCreamDetails;

const data = [
    {
        id: 1,
        image: require('../../assets/images/FlavourIcon3.png'),
        title: 'The royal Shop',
    },
    {
        id: 2,
        image: require('../../assets/images/FlavourIcon2.png'),
        title: 'Haap Ice cream',
    },
    {
        id: 3,
        image: require('../../assets/images/FlavourIcon4.png'),
        title: 'Rainbow',
    },
];
const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: 370,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        height: 29,
        alignContent: 'center',
    },
    backButton: {
        bottom: 270,
    },
    textArea: {
        padding: 20
    },
    icecreamDetailsHeading: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },
    description: {
        width: "84%",
        lineHeight: 20,
    },
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
    getButton: {
        backgroundColor: '#FF5B87',
        width: 60,
        borderRadius: 15,
        height: 25,
        marginTop: 20,
    },
    getText: {
        color: 'white',
        textAlign: 'center',
        alignContent: 'center',
    },
});