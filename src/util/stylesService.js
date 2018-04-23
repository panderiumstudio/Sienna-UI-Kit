import _ from 'lodash'
import {ComponentTypes} from '../styles/componentTypes'
import CONSTANTS from './constants.js'

export const getStylesFromType = (types, componentName) => {
    const typesArray = parseTypesString(types);
    const componentStyles = getComponentStyles(componentName) || [];
    const componentBaseStyle = componentStyles[CONSTANTS.STYLES.BASE];
    const componentStylesByType = getStylesByTypes(typesArray, componentName);
    return _.merge(componentBaseStyle, componentStylesByType);
};

const parseTypesString = types => types.split(' ');
const getComponentStyles = componentName => ComponentTypes[componentName];
const getStylesByTypes = (types, componentStyles) => {
    let stylesByType = [];
    types.forEach(type => {
        if(componentStyles[type]) {
            stylesByType.push(componentStyles[type]);
        }
    });
    return stylesByType;
};