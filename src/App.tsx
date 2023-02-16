import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { Edit } from './components/Edit';
import { Grid } from './components/Grid';
import { Scroller, ScrollerHandle } from './components/Scroller';
import GlobalStyles from './styles/GlobalStyles';
import { LightTheme } from './styles/theme';

function App() {
    const scrollerRef = useRef<ScrollerHandle>(null);

    return (
        <ThemeProvider theme={LightTheme}>
            <GlobalStyles />
            <Scroller
                ref={scrollerRef}
                top={<Edit onSave={() => scrollerRef.current?.toggle()} />}
                bottom={<Grid onEdit={() => scrollerRef.current?.toggle()} />}
            />
        </ThemeProvider>
    );
}
export default App;
