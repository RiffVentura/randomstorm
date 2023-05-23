import { useState } from 'react';
import styled from 'styled-components';
import { presets } from '../presets';

type Props = {
    className?: string;
    onPresetValues: (values: string[]) => void;
};

export const PresetsDropdown = ({ className, onPresetValues }: Props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Container className={className}>
            <Button onClick={() => setOpen(true)}>Presets</Button>
            {isOpen && (
                <SelectBox>
                    {presets.map(({ name, values }, index) => (
                        <Option
                            key={index}
                            onClick={() => {
                                onPresetValues(values);
                                setOpen(false);
                            }}
                        >
                            {name}
                        </Option>
                    ))}
                </SelectBox>
            )}
        </Container>
    );
};

const Container = styled.div`
    width: 20rem;
    position: relative;
`;

const Button = styled.button`
    width: 100%;
    text-align: left;
    line-height: 1;
    font-size: ${({ theme }) => theme.typography.size.default};
    background-color: ${({ theme }) => theme.color.widgetBackground};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const SelectBox = styled.div`
    color: ${({ theme }) => theme.color.selected};
    background-color: ${({ theme }) => theme.color.widgetBackground};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 10px 10px;
    border-radius: 5px;
    width: 20rem;
    position: absolute;
    margin-top: 2px;
`;

const Option = styled.div`
    border-radius: 5px;
    padding-left: 10px;
    &:hover {
        background-color: ${({ theme }) => theme.color.locked};
    }
`;
