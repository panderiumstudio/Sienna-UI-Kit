import merge from 'deepmerge'
import is from 'is_js'
import {ComponentTypes} from '../styles/componentTypes'
import CONSTANTS from './constants.js'

export const getStylesFromType = (types, componentName) => {
    const typesArray = is.not.undefined(types) && is.not.empty(types) ? parseTypesString(types) : [];
    const componentStyles = getComponentStyles(componentName) || [];
    const componentBaseStyle = componentStyles[CONSTANTS.STYLES.BASE] || [];
    const componentStylesByType = getStylesByTypes(typesArray, componentStyles);
    const combinedStyles = [componentBaseStyle, ...componentStylesByType];
    return merge.all(combinedStyles);
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