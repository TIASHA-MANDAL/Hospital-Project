import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,Dimensions } from 'react-native';
import SearchList from './SearchList';
import AppList from './AppList';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FontFamily, Color, Border, FontSize } from "../../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;

const Reports = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    const handleBack = () => {
        navigation.goBack();
    };

    const headerAppoint = () => (
        <View style={styles.viewList2451}>
              <View style={styles.header2451}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton13}>
                    <Text><Icon name="angle-left" size={30} color={Color.colorBlack} /></Text>
                </TouchableOpacity>
                <Text style={styles.text2451}>My Appointments</Text>
            </View>
            <SearchList setSearchText={setSearchText} />
        </View>
    );

    return (
        <SafeAreaView style={styles.appbar2451}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    {headerAppoint()}
                </View>
                <FlatList
                    data={[]}
                    renderItem={({ item }) => null}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={<AppList searchText={searchText} />}
                    style={styles.flatList}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // paddingTop: 35,
        paddingTop: windowWidth*0.08,
    },
    headerContainer: {
        paddingHorizontal: 3,
    },
    viewList2451: {
        marginHorizontal: 10,
        marginTop: 5,
    },
    header2451: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    text2451: {
        fontSize: 25,
        marginLeft: 30,
        fontFamily: "bold01",
    },
    appbar2451: {
        flex: 1,
        backgroundColor: '#fff'
    },
    backButton13: {
        marginRight: 10,
        position: 'absolute',
        left: 0,
    },
    flatList: {
        paddingHorizontal: 2
    },
});

export default Reports;