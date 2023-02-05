import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { LigthTheme } from './styles/theme';
import { NumberRandomizer } from './components/NumberRandomizer';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid blue;
    height: 100vh;
`;

function App() {
    return (
        <ThemeProvider theme={LigthTheme}>
            <GlobalStyles />
            <Container>
                <NumberRandomizer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
