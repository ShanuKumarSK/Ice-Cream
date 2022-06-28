import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../views/HomeScreen/homeScreen';
import Social from '../../views/Social/Social';
import Search from '../../views/Search/Search';
import Account from '../../views/Account/Account';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { height: 75 },
            tabBarActiveTintColor: "#1E3A4F",
            tabBarLabelStyle: { fontSize: 14, fontWeight: '600', marginTop: -10, marginBottom: 10 },
        }} >
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return focused ? (
                        <Image
                            style={styles.bottomTabIcons}
                            source={require('../../assets/images/BottomTab_Home.png')
                            } />
                    ) : (
                        <Image
                            style={styles.bottomTabIcons}
                            source={require('../../assets/images/BottomTabHome.png')
                            } />
                    );
                },
            }} name='Home' component={HomeScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Image
                                style={styles.bottomTabIcons}
                                source={require('../../assets/images/BottomTab_Social.png')
                                } />
                        ) : (
                            <Image
                                style={styles.bottomTabIcons}
                                source={require('../../assets/images/BottomTabSocial.png')
                                } />
                        );
                    },
                }} name="Social" component={Social} />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Image
                                style={styles.bottomTabIcons}
                                source={require('../../assets/images/BottomTab_Search.png')
                                } />
                        ) : (
                            <Image
                                style={styles.bottomTabIcons}
                                source={require('../../assets/images/BottomTabSearch.png')
                                } />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <Image
                                style={styles.bottomTabIcons}
                                source={require('../../assets/images/BottomTab_Account.png')
                                } />
                        ) : (
                            <Image
                                style={styles.bottomTabIcons}
                                source={require('../../assets/images/BottomTabAccount.png')
                                } />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottomTabIcons: {
        width: 30,
        height: 30,
    },
});