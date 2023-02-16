import { DefaultTheme } from 'styled-components';

export const LightTheme: DefaultTheme = {
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
            default: '500',
            light: '200',
            bold: '700',
            icon: '800',
        },
        size: {
            default: '18px',
            title: '20px',
            big: '27px',
            icon: '32px',
        },
    },
};
