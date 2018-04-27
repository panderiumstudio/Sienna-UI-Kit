import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SNText from './src/components/SNText.js'
import SNButton from './src/components/SNButton.js'

export default class App extends React.Component {


    componentDidMount() {
        Expo.Font.loadAsync({
            'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
            'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
            'open-sans-light': require('./src/assets/fonts/OpenSans-Light.ttf'),
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <SNButton type="yellow">Button</SNButton>
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
