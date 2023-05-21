type NumberRandomizer = {
    title: string;
    type: 'number';
    min: number;
    max: number;
};

type ListRandomizer = {
    title: string;
    type: 'list';
    list: string[];
};

export type Randomizer = NumberRandomizer | ListRandomizer | null;

type ListRandomizerDraft = {
    title: string;
    type: 'list';
    list: string;
};

type NumberRandomizerDraft = {
    title: string;
    type: 'number';
    min: number;
    max: number;
};

export type RandomizerDraft = ListRandomizerDraft | NumberRandomizerDraft;

export type RandomizerHandle = {
    randomize: () => void;
};
