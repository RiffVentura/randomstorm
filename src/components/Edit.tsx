import styled from 'styled-components';
import Clouds from '../assets/clouds-top.svg';

type Props = {
    onSave: () => void;
};

export const Edit = ({ onSave }: Props) => {
    return (
        <Container>
            <img src={Clouds} />
            <h1>Edit</h1>
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
