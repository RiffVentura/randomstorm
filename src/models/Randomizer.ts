type EmptyRandomizer = {
    slot: number;
    title: string;
    type: 'empty';
};

type NumberRandomizer = {
    slot: number;
    title: string;
    type: 'number';
    min: number;
    max: number;
};

type ListRandomizer = {
    slot: number;
    title: string;
    type: 'list';
};

export type Randomizer = NumberRandomizer | EmptyRandomizer | ListRandomizer;
