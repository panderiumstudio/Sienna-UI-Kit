import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Font} from 'expo';

export default class App extends React.Component {


    componentDidMount() {
        Font.loadAsync({
            'openSans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
            'openSans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
            'openSans-light': require('./src/assets/fonts/OpenSans-Light.ttf'),
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontFamily: 'openSans-bold'}}>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
