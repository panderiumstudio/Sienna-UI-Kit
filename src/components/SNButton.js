import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class SNButton extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.onPress}
            >
                <Text> Touch Here </Text>
            </TouchableOpacity>
            )
    }

}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
});


export default SNButton;