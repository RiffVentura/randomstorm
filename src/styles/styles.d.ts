import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            background: string;
            cloud: string;
            widgetBackground: string;
            locked: string;
            selected: string;
        };
        typography: {
            fontFamily: string;
            weight: {
                default: string;
                light: string;
                bold: string;
                icon: string;
            };
            size: {
                default: string;
                title: string;
                big: string;
                icon: string;
            };
        };
    }
}
