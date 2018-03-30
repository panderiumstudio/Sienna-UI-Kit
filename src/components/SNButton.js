import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import SNText from './SNText.js'

class SNButton extends Component {

    constructor(props) {
        super(props);
    }

    _renderChildren(style) {
        const displayText = (text) => (<SNText>{text}</SNText>);
        if (typeof this.props.children === 'string') {
            return displayText(this.props.children)
        }
        const children = Array.isArray(this.props.children)
            ? this.props.children
            : [this.props.children];
        return React.Children.map(children, (child) => {
            if (typeof child === 'string') {
                return displayText(child);
            } else {
                let {style: childStyle, ...childProps} = child.props;
                return React.cloneElement(child, {
                    style: [this.props.contentStyle, childStyle],
                    ...childProps
                });
            }
        })
    }

    render() {
        const {
            style,
            type
        } = this.props;
        return (
            <TouchableOpacity
                style={styles.button}
            >
                {this.props.children && _renderChildren()}
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