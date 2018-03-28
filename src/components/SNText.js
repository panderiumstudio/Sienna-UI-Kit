import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import {COLORS} from '../styles/colors.js';

class SNText extends Component {

    render() {
        const {
            style,
            children,
            ...textProps
        } = this.props;
        return (
            <Text style={[defaultStyles.baseText, style]} {...textProps}>{children}</Text>
        );
    }
}

const defaultStyles = StyleSheet.create({
    baseText: {
        fontSize: 14,
        fontFamily: 'open-sans',
        color: COLORS.primaryText,
    }
});

export default SNText;