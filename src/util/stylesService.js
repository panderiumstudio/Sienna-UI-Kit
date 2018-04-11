import {ComponentTypes} from '../styles/componentTypes'

export const getStylesFromType = (types, componentName) => {
    const typesArray = parseTypesString(types);
};

const parseTypesString = types => types.split(' ');