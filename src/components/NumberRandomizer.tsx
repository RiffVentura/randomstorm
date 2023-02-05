import { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const sanitizeNumber = (value: string): number => {
    return parseInt(value);
};

const random = (min: number, max: number): number =>
    min + Math.round(Math.random() * (max - min));

export const NumberRandomizer = () => {
    const [title, setTitle] = useState('Title');
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [value, setValue] = useState(random(min, max));

    return (
        <Frame>
            <Title value={title} onChange={newValue => setTitle(newValue)} />
            <Value onClick={() => setValue(random(min, max))}>{value}</Value>
            <Controls>
                <Limit
                    value={min.toString()}
                    onChange={newMin => setMin(sanitizeNumber(newMin))}
                />
                <Limit
                    value={max.toString()}
                    onChange={newMax => setMax(sanitizeNumber(newMax))}
                />
            </Controls>
        </Frame>
    );
};

const Frame = styled.section`
    width: 240px;
    height: 180px;
    font-size: ${({ theme }) => theme.typography.size.default};
    font-weight: ${({ theme }) => theme.typography.weight.light};
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 1rem;
    user-select: none;
`;
const Value = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.typography.size.big};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
`;
const Controls = styled.div`
    display: flex;
    text-align: center;
    & > :first-child {
        text-align: left;
    }
    & > :last-child {
        text-align: right;
    }
`;
const Limit = styled(Input)`
    width: 50%;
    text-align: inherit;
`;
const Title = styled(Input)`
    text-align: center;
`;
