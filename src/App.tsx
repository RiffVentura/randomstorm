import { useReducer, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { Edit } from './components/Edit';
import { Grid } from './components/Grid';
import { Scroller, ScrollerHandle } from './components/Scroller';
import { initialState, reducer } from './Reducer';
import GlobalStyles from './styles/GlobalStyles';
import { LightTheme } from './styles/theme';

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const scrollerRef = useRef<ScrollerHandle>(null);

    const GridComponent = (
        <Grid
            randomizers={state.randomizers}
            onEdit={() => scrollerRef.current?.toggle()}
        />
    );

    return (
        <ThemeProvider theme={LightTheme}>
            <GlobalStyles />
            <Scroller
                ref={scrollerRef}
                top={<Edit onSave={() => scrollerRef.current?.toggle()} />}
                bottom={GridComponent}
            />
        </ThemeProvider>
    );
}
export default App;
