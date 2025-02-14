import React,{useState, useEffect} from 'react';
import {FlatList, Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffebcd'
    },
    searchBox: {
        height: 40,
        borderColor: '#ff69b4',
        borderWidth: 2,
        borderRadius: 5,
        margin: 30,
        marginTop: 40,
        paddingLeft: 10,
        fontSize: 16,
        color: '#4b0082',
    },
    item: {
        padding: 15,
        backgroundColor: '#f0f8ff',
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: '#8a2be2',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    yearText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff6347',
    },
});


//CREATE NEW VARIABLE
let originalData = []

const Home = ({navigation}) => {
    const [mydata, setMydata] = useState([]);

    useEffect(() => {
        fetch( "https://data.gov.sg/api/action/datastore_search?resource_id=d_bcfbc538552950b5800b8455767aae9e")
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                const records = myJson.result.records;
                if (originalData.length < 1) {
                    setMydata(records);
                    originalData = records;
                }
            })
    }, []);

    //CREATE FilterData() FUNCTION
    const FilterData = (text) => {
        if (text !== '') {
            let myFilteredData = originalData.filter((item) =>
                item.year.toString().includes(text.toString()))
            setMydata(myFilteredData);
        } else {
            setMydata(originalData);
        }
    };


    const renderItem = ({item}) => {
        return (
            <View style={styles.container}>
                <Text> {item.year} </Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.searchBox}
                       onChangeText={(text => {FilterData(text)})}
                       placeholder={"Search by Year"}/>
            <FlatList
                data={mydata}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item}
                                      onPress={() => navigation.navigate('Details', {item})}>
                        <Text style={styles.yearText}>{item.year}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
}

export default Home;
