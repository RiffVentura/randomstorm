import { useState } from 'react';
import styled from 'styled-components';
import Clouds from '../assets/clouds-top.svg';
import { Randomizer } from '../models/Randomizer';

type Props = {
    randomizer: Randomizer | null;
    onSave: () => void;
};

export const Edit = ({ randomizer, onSave }: Props) => {
    const [editedRandomizer, setEditedRandomizer] = useState(randomizer);
    return (
        <Container>
            <img src={Clouds} />
            <h1>Edit</h1>
            <h2>{editedRandomizer?.slot}</h2>
            <button onClick={onSave}>Ok</button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;

    & > img {
        position: absolute;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`;
