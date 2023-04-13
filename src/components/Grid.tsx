import styled from 'styled-components';
import { NumberRandomizer } from './NumberRandomizer';
import Clouds from '../assets/clouds-bottom.svg';
import { EmptySlot } from './EmptySlot';
import { Randomizer } from '../models/Randomizer';

type Props = {
    randomizers: Randomizer[];
    onEdit: (id: number) => void;
};

export const Grid = ({ randomizers, onEdit }: Props) => {
    const randomizerComponents = randomizers.map(randomizer => {
        switch (randomizer.type) {
            case 'number':
                return (
                    <NumberRandomizer
                        key={randomizer.slot}
                        onEdit={() => onEdit(randomizer.slot)}
                    />
                );
            case 'empty':
            default:
                return (
                    <EmptySlot
                        key={randomizer.slot}
                        onClick={() => onEdit(randomizer.slot)}
                    />
                );
        }
    });

    return (
        <Container>
            <img src={Clouds} />
            <GridContainer>{randomizerComponents}</GridContainer>
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    padding: 100px;

    & > img {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 40px;
`;
