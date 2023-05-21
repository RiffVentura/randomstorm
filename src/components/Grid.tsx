import { useEffect, useRef, createRef, RefObject } from 'react';
import styled from 'styled-components';
import { NumberRandomizer } from './NumberRandomizer';
import Clouds from '../assets/clouds-bottom.svg';
import { EmptySlot } from './EmptySlot';
import { Randomizer, RandomizerHandle } from '../models/Randomizer';

const useSpacebarPress = (handler: () => void) => {
    const savedHandler = useRef<() => void>(() => null);

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        savedHandler.current = handler;

        const eventListener = (event: KeyboardEvent) =>
            event.key === ' ' ? savedHandler.current() : null;
        window.addEventListener('keydown', eventListener);

        return () => {
            window.removeEventListener('keydown', eventListener);
        };
    }, []);
};

type RandomizerRefCollectionRef = RefObject<RandomizerHandle>[];

type Props = {
    randomizers: Randomizer[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onQuickEdit: (
        slotId: number,
        value: {
            title?: string;
            min?: number;
            max?: number;
        },
    ) => void;
};

export const Grid = ({ randomizers, onEdit, onQuickEdit, onDelete }: Props) => {
    const randomizersRef = useRef<RandomizerRefCollectionRef>([]);
    useSpacebarPress(() => {
        randomizersRef.current.forEach(ref => ref.current?.randomize());
    });

    randomizersRef.current = randomizers.map(
        (_, index) => randomizersRef.current[index] ?? createRef(),
    );

    const randomizerComponents = randomizers.map((randomizer, slotId) => {
        if (randomizer === null) {
            return <EmptySlot key={slotId} onClick={() => onEdit(slotId)} />;
        }

        switch (randomizer.type) {
            case 'number':
                return (
                    <NumberRandomizer
                        key={slotId}
                        ref={randomizersRef.current[slotId]}
                        title={randomizer.title}
                        min={randomizer.min}
                        max={randomizer.max}
                        onEdit={() => onEdit(slotId)}
                        onDelete={() => onDelete(slotId)}
                        onQuickEdit={values => onQuickEdit(slotId, values)}
                    />
                );
            default:
                throw new Error('Unknown type');
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
