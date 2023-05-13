import { useState } from 'react';
import styled from 'styled-components';
import Clouds from '../assets/clouds-top.svg';
import { Randomizer } from '../models/Randomizer';
import { IconButton } from './IconButton';
import { Input } from './Input';

type Props = {
    randomizer: Randomizer | null;
    onSave: () => void;
};

export const Edit = ({ randomizer, onSave }: Props) => {
    const [editedRandomizer, setEditedRandomizer] = useState(randomizer);

    if (null === editedRandomizer) {
        return null;
    }

    const type = 'number';

    return (
        <Container>
            <img src={Clouds} />
            <LabelInput value={editedRandomizer.title} />
            <section>
                <IconButton
                    label='List'
                    icon='abc.'
                    onClick={() => null}
                    selected
                />
                <IconButton label='Number' icon='123.' onClick={() => null} />
            </section>
            {type === 'list' && (
                <ListValueSection>
                    <label>Entry list</label>
                    <Textarea
                        placeholder='Place one entry per line like so : &#10;- Banana&#10;- Apple&#10;- Peach'
                    ></Textarea>
                </ListValueSection>
            )}
            {type === 'number' && (
                <NumberParameters>
                    <NumberParameter>
                        <label>Min</label>
                        <Input value='0' onChange={() => null} />
                    </NumberParameter>
                    <NumberParameter>
                        <label>Max</label>
                        <Input value='0' onChange={() => null} />
                    </NumberParameter>
                </NumberParameters>
            )}
            <SubmitControls>
                <CancelButton onClick={onSave}>Cancel</CancelButton>
                <SaveButton onClick={onSave}>Save</SaveButton>
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

const Textarea = styled.textarea`
    height: 200px;
    width: 600px;
    resize: none;
    border: none;
    border-radius: 5px;
    padding: 20px;
    color: ${({ theme }) => theme.color.selected};
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
