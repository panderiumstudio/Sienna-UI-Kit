import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import SNText from './SNText.js'
import { getStylesFromType } from "../util/stylesService";

class SNButton extends Component {

    componentName = 'SNButton';

    _renderChildren(style) {
        const displayText = (text) => (<SNText style={[style, this.props.contentStyle]}>{text}</SNText>);
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
        const { style, type, ...touchableProps } = this.props;

        const { container, content } = getStylesFromType(type, this.componentName);

        return (
            <TouchableOpacity
                style={[container, style, styles.button]}
                {...touchableProps}
            >
                {this.props.children && this._renderChildren(content)}
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