import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffebcd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 400,
        padding: 20,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor: '#ff69b4',
        borderWidth: 2,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff6347',
    },
    text: {
        fontSize: 18,
        color: '#4b0082',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#ff69b4',
        padding: 10,
        marginBottom: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#ff6347',
        width: 400,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    }
});

const Details = ({navigation, route }) => {
    const { item } = route.params;

    const [mydata, setMydata] = useState(route.params.status);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Year: {item.year}</Text>
                <Text style={styles.text}>Performance Type: {item.type}</Text>
                <Text style={styles.text}>Employment: {item.employment}</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Back To Home</Text>
            </TouchableOpacity>
        </View>


    );
};

export default Details;
