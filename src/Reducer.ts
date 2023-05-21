import { Randomizer } from './models/Randomizer';

type QuickEditValues = {
    title?: string;
    min?: number;
    max?: number;
};

type SaveAction = { type: 'save'; randomizer: Randomizer };
type CancelAction = { type: 'cancel' };
type EditRandomizerAction = { type: 'edit-randomizer'; slotId: number };
type DeleteAction = { type: 'delete'; slotId: number };
type QuickEditRandomizerAction = {
    type: 'quick-edit';
    slotId: number;
    values: QuickEditValues;
};
type Action =
    | EditRandomizerAction
    | QuickEditRandomizerAction
    | DeleteAction
    | SaveAction
    | CancelAction;

type RandomstormState = {
    randomizers: Randomizer[];
    editSlotId: number;
};

export const initialState: RandomstormState = {
    randomizers:
        JSON.parse(localStorage.getItem('randomizers') ?? 'null') ??
        Array(12).fill(null),
    editSlotId: -1,
};

export const reducer = (state: RandomstormState, action: Action) => {
    const newState = structuredClone(state) as RandomstormState;

    switch (action.type) {
        case 'edit-randomizer':
            edit(newState, action.slotId);
            break;
        case 'quick-edit':
            quickEdit(newState, action.slotId, action.values);
            break;
        case 'save':
            save(newState, action.randomizer);
            break;
        case 'cancel':
            cancel(newState);
            break;
        case 'delete':
            remove(newState, action.slotId);
            break;
        default:
            throw new Error('Unsupported reducer action');
    }

    localStorage.setItem('randomizers', JSON.stringify(newState.randomizers));

    return newState;
};

const save = (state: RandomstormState, randomizer: Randomizer) => {
    if (state.editSlotId === -1) {
        throw new Error('Saving in a non editing mode');
    }
    state.randomizers[state.editSlotId] = structuredClone(randomizer);
    state.editSlotId = -1;
};

const remove = (state: RandomstormState, slotId: number) => {
    if (slotId < 0 || slotId >= state.randomizers.length) {
        throw new Error('Editing an invalid slot number: ' + slotId);
    }
    state.randomizers[slotId] = null;
};

const cancel = (state: RandomstormState) => {
    state.editSlotId = -1;
};

const edit = (state: RandomstormState, slotId: number) => {
    if (slotId < 0 || slotId >= state.randomizers.length) {
        throw new Error('Editing an invalid slot number: ' + slotId);
    }
    state.editSlotId = slotId;
};

const quickEdit = (
    state: RandomstormState,
    slotId: number,
    values: QuickEditValues,
) => {
    if (slotId < 0 || slotId >= state.randomizers.length) {
        throw new Error('Editing an invalid slot number: ' + slotId);
    }

    state.randomizers[slotId] = {
        ...state.randomizers[slotId],
        ...values,
    } as Randomizer;
};
