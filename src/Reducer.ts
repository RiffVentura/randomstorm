import { Randomizer } from './models/Randomizer';

type RandomstormState = {
    randomizers: Randomizer[];
};

type CreateAction = {
    type: 'create';
};

type Action = CreateAction;

const emptyRandomizerList = Array.from(Array(12).keys(), slot => ({
    slot: slot + 1,
    type: 'empty' as const,
    title: 'Label',
}));

export const initialState: RandomstormState = {
    randomizers: emptyRandomizerList,
};

export const reducer = (state: RandomstormState, action: Action) => {
    switch (action.type) {
        case 'create':
            return { ...state, randomizers: [...state.randomizers] };
        default:
            throw new Error('Unsupported reducer action ' + action.type);
    }
};
