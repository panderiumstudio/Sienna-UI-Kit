import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

class SNAvatar extends Component {

}

SNAvatar.propTypes = {
    size: PropTypes.oneOf([
        'verySmall',
        'small',
        'medium',
        'big'
    ]),
    onPress: PropTypes.func,
    hasOverlay: PropTypes.bool,
    isStoriesAvatar: PropTypes.bool,
    source: PropTypes.string
};

SNAvatar.defaultProps = {
    size: 'small',
    hasOverlay: false,
    isStoriesAvatar: false
}