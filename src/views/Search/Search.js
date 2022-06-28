import { View, Text } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SearchInput from '../../components/common/SearchInput';
import TabHeading from '../../components/common/TabHeading';

export default function Search() {
    return (
        <>
            <View style={{ flex: 1 }}>
                <LinearGradient style={{ flex: 1 }} colors={['rgba(243,124,250, 0.3)', 'rgba(255,186,99, 0.3)']} >
                    <View>
                        <TabHeading title='Search' />
                        <SearchInput />
                    </View>
                </LinearGradient>
            </View>
        </>
    );
}