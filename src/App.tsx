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

    const handleEdit = (id: number) => {
        dispatch({ type: 'edit-randomizer', slotId: id });
        scrollerRef.current?.toggle();
    };

    const handleSave = () => {
        dispatch({ type: 'save' });
        scrollerRef.current?.toggle();
    };

    const GridComponent = (
        <Grid randomizers={state.randomizers} onEdit={handleEdit} />
    );

    const EditComponent = (
        <Edit randomizer={state.editRandomizer} onSave={handleSave} />
    );

    return (
        <ThemeProvider theme={LightTheme}>
            <GlobalStyles />
            <Scroller
                ref={scrollerRef}
                top={EditComponent}
                bottom={GridComponent}
            />
        </ThemeProvider>
    );
}
export default App;
