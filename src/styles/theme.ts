import { DefaultTheme } from 'styled-components';

export const LigthTheme: DefaultTheme = {
    color: {
        background: '#eeeeee',
        cloud: '#bbeff1',
        widgetBackground: '#f5f5f5',
        locked: '#e9e9e9',
        selected: '#6d6d6d',
    },
    typography: {
        fontFamily: 'Montserrat',
        weight: {
            default: 'medium',
            light: 'LightItalic',
            bold: 'SemiBold',
            icon: 'Bold',
        },
        size: {
            default: 18,
            title: 20,
            big: 27,
            icon: 32,
        },
    },
};
