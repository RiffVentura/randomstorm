import { Randomizer } from './models/Randomizer';

type SaveAction = { type: 'save'; randomizer: Randomizer };
type CancelAction = { type: 'cancel' };
type EditRandomizerAction = { type: 'edit-randomizer'; slotId: number };
type QuickEditRandomizerAction = {
    type: 'quick-edit';
    slotId: number;
    values: {
        title?: string;
        min?: number;
        max?: number;
    };
};
type Action =
    | EditRandomizerAction
    | QuickEditRandomizerAction
    | SaveAction
    | CancelAction;

type RandomstormState = {
    randomizers: Randomizer[];
    editSlotId: number;
};

export const initialState: RandomstormState = {
    randomizers: Array(12).fill(null),
    editSlotId: -1,
};

export const reducer = (state: RandomstormState, action: Action) => {
    const newState = structuredClone(state) as RandomstormState;

    if (action.type === 'edit-randomizer') {
        if (action.slotId < 0 || action.slotId >= state.randomizers.length) {
            throw new Error('Editing an invalid slot number: ' + action.slotId);
        }
        newState.editSlotId = action.slotId;
        return newState;
    } else if (action.type === 'quick-edit') {
        const { slotId, values } = action;
        if (slotId < 0 || action.slotId >= state.randomizers.length) {
            throw new Error('Editing an invalid slot number: ' + slotId);
        }

        newState.randomizers[slotId] = {
            ...state.randomizers[slotId],
            ...values,
        } as Randomizer;
        return newState;
    } else if (action.type === 'save') {
        if (state.editSlotId === -1) {
            throw new Error('Saving in a non editing mode');
        }
        newState.randomizers[newState.editSlotId] = structuredClone(
            action.randomizer,
        );
        newState.editSlotId = -1;
        return newState;
    } else if (action.type === 'cancel') {
        newState.editSlotId = -1;
        return newState;
    }

    throw new Error('Unsupported reducer action');
};
