import styled from 'styled-components';
import { NumberRandomizer } from './NumberRandomizer';
import Clouds from '../assets/clouds-bottom.svg';

type Props = {
    onEdit: (id: string) => void;
};

export const Grid = ({ onEdit }: Props) => {
    return (
        <Container>
            <img src={Clouds} />
            <NumberRandomizer onEdit={onEdit} />
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
