import { useState } from 'react';
import styled from 'styled-components';
import Clouds from '../assets/clouds-top.svg';
import { Randomizer } from '../models/Randomizer';
import { IconButton } from './IconButton';

type Props = {
    randomizer: Randomizer | null;
    onSave: () => void;
};

export const Edit = ({ randomizer, onSave }: Props) => {
    const [editedRandomizer, setEditedRandomizer] = useState(randomizer);

    if (null === editedRandomizer) {
        return null;
    }

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
            <ListValueSection>
                <label>Entry list</label>
                <Textarea
                    placeholder='Place one entry per line like so : &#10;- Banana&#10;- Apple&#10;- Peach'
                ></Textarea>
            </ListValueSection>
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
