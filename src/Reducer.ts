import { Randomizer } from './models/Randomizer';

type SaveAction = { type: 'save' };
type EditRandomizerAction = { type: 'edit-randomizer'; slotId: number };
type Action = EditRandomizerAction | SaveAction;

const emptyRandomizerList = Array.from(Array(12).keys(), slot => ({
    slot: slot,
    type: 'empty' as const,
    title: 'Label',
}));

type RandomstormState = {
    randomizers: Randomizer[];
    editRandomizer: Randomizer | null;
};

export const initialState: RandomstormState = {
    randomizers: emptyRandomizerList,
    editRandomizer: null,
};

export const reducer = (state: RandomstormState, action: Action) => {
    const newState = structuredClone(state) as RandomstormState;

    switch (action.type) {
        case 'edit-randomizer':
            newState.editRandomizer = newState.randomizers[action.slotId];
            return newState;
        case 'save':
            newState.editRandomizer = null;
            return newState;
        default:
            throw new Error('Unsupported reducer action');
    }
};
