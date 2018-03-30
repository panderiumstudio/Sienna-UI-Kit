import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Font} from 'expo';
import SNText from './src/components/SNText.js'

export default class App extends React.Component {


    componentDidMount() {
        Font.loadAsync({
            'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
            'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
            'open-sans-light': require('./src/assets/fonts/OpenSans-Light.ttf'),
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <SNText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, vero!</SNText>
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
        paddingHorizontal: 20
    },
});
