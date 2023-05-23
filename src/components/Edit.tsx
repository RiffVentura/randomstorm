import { useState } from 'react';
import styled from 'styled-components';
import Clouds from '../assets/clouds-top.svg';
import { Randomizer, RandomizerDraft } from '../models/Randomizer';
import { IconButton } from './IconButton';
import { Input } from './Input';
import { PresetsDropdown } from './PresetsDropdown';

const castToRandomizerDraft = (randomizer: Randomizer): RandomizerDraft => {
    if (randomizer === null) {
        return {
            title: 'Label',
            type: 'list',
            list: '',
        };
    }

    if (randomizer.type === 'number') {
        return { ...randomizer };
    } else if (randomizer.type === 'list') {
        return { ...randomizer, list: randomizer.list.join('\n') };
    }

    throw Error('Unknown randomizer type:');
};

const castToRandomizer = (randomizer: RandomizerDraft): Randomizer => {
    if (randomizer.type === 'number') {
        return { ...randomizer };
    } else if (randomizer.type === 'list') {
        return {
            ...randomizer,
            list: randomizer.list.split('\n').filter(value => value.length > 0),
        };
    }

    throw Error('Unknown randomizer type:');
};

type Props = {
    randomizer: Randomizer;
    onSave: (randomizer: Randomizer) => void;
    onCancel: () => void;
};

export const Edit = ({ randomizer, onSave, onCancel }: Props) => {
    const [randomizerDraft, setRandomizerDraft] = useState(() =>
        castToRandomizerDraft(randomizer),
    );

    return (
        <Container>
            <img src={Clouds} />
            <LabelInput
                value={randomizerDraft.title}
                onChange={event =>
                    setRandomizerDraft({
                        ...randomizerDraft,
                        title: event.target.value,
                    })
                }
            />
            <section>
                <IconButton
                    label='List'
                    icon='abc.'
                    onClick={() => {
                        if (randomizerDraft.type === 'list') {
                            return;
                        }
                        setRandomizerDraft({
                            title: randomizerDraft.title,
                            type: 'list',
                            list: '',
                        });
                    }}
                    selected={randomizerDraft.type === 'list'}
                />
                <IconButton
                    label='Number'
                    icon='123.'
                    onClick={() => {
                        if (randomizerDraft.type === 'number') {
                            return;
                        }
                        setRandomizerDraft({
                            title: randomizerDraft.title,
                            type: 'number',
                            min: 0,
                            max: 100,
                        });
                    }}
                    selected={randomizerDraft.type === 'number'}
                />
            </section>
            {randomizerDraft.type === 'list' && (
                <ListValueSection>
                    <ListHeader>
                        <ListTitle>Entry list</ListTitle>
                        <PresetsDropdown
                            onPresetValues={values =>
                                setRandomizerDraft({
                                    ...randomizerDraft,
                                    list: values.join('\n'),
                                })
                            }
                        />
                    </ListHeader>
                    <Textarea
                        placeholder='Place one entry per line like so : &#10;- Banana&#10;- Apple&#10;- Peach'
                        value={randomizerDraft.list}
                        onChange={event =>
                            setRandomizerDraft({
                                ...randomizerDraft,
                                list: event.target.value,
                            })
                        }
                    ></Textarea>
                </ListValueSection>
            )}
            {randomizerDraft.type === 'number' && (
                <NumberParameters>
                    <NumberParameter>
                        <label>Min</label>
                        <Input
                            value={randomizerDraft.min.toString()}
                            onChange={min =>
                                setRandomizerDraft({
                                    ...randomizerDraft,
                                    min: parseInt(min),
                                })
                            }
                        />
                    </NumberParameter>
                    <NumberParameter>
                        <label>Max</label>
                        <Input
                            value={randomizerDraft.max.toString()}
                            onChange={max =>
                                setRandomizerDraft({
                                    ...randomizerDraft,
                                    max: parseInt(max),
                                })
                            }
                        />
                    </NumberParameter>
                </NumberParameters>
            )}
            <SubmitControls>
                <CancelButton onClick={onCancel}>Cancel</CancelButton>
                <SaveButton
                    onClick={() => onSave(castToRandomizer(randomizerDraft))}
                >
                    Save
                </SaveButton>
            </SubmitControls>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */

    height: 100vh;

    & > img {
        position: absolute;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`;

const LabelInput = styled.input`
    font-size: ${({ theme }) => theme.typography.size.icon};
    font-weight: ${({ theme }) => theme.typography.weight.light};
    font-style: italic;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.selected};
    text-align: center;
    outline: none;
    margin: 50px 0 150px 0;
`;

const ListValueSection = styled.section`
    display: flex;
    flex-direction: column;
`;
const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const ListTitle = styled.label`
    line-height: 1;
    font-size: ${({ theme }) => theme.typography.size.default};
    padding: 10px 20px;
`;

const Textarea = styled.textarea`
    height: 200px;
    width: 600px;
    resize: none;
    border: none;
    border-radius: 5px;
    padding: 20px;
    color: ${({ theme }) => theme.color.selected};
    background-color: ${({ theme }) => theme.color.widgetBackground};
    font-family: ${({ theme }) => theme.typography.fontFamily}, sans-serif;
    outline: none;
    &:hover {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    }
`;

const NumberParameters = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 10%;
    text-align: center;
    margin-top: 100px;
`;

const NumberParameter = styled.div`
    display: flex;
    flex-direction: column;

    & input {
        margin-top: 10px;
        text-align: center;
    }
`;

const SubmitControls = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25vw;
    margin-top: 40px;
    margin-bottom: 50px;
`;

const SaveButton = styled.button`
    background: ${({ theme }) => theme.color.selected};
    color: ${({ theme }) => theme.color.widgetBackground};
`;

const CancelButton = styled.button`
    background: ${({ theme }) => theme.color.widgetBackground};
    color: ${({ theme }) => theme.color.selected};
`;
