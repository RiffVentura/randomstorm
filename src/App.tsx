import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { LigthTheme } from './styles/theme';

function App() {
    const [greetMsg, setGreetMsg] = useState('');
    const [name, setName] = useState('');

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke('greet', { name }));
    }

    return (
        <ThemeProvider theme={LigthTheme}>
            <GlobalStyles />
            <div className='container'>
                <h1>Welcome to Twwauri!</h1>

                <div className='row'>
                    <div>
                        <input
                            id='greet-input'
                            onChange={e => setName(e.currentTarget.value)}
                            placeholder='Enter a name...'
                        />
                        <button type='button' onClick={() => greet()}>
                            Greet
                        </button>
                    </div>
                </div>
                <p>{greetMsg}</p>
            </div>
        </ThemeProvider>
    );
}

export default App;
