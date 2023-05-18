import { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const sanitizeNumber = (value: string): number => {
    return parseInt(value);
};

const random = (min: number, max: number): number =>
    min + Math.round(Math.random() * (max - min));

type Props = {
    title: string;
    min: number;
    max: number;
    onQuickEdit: (value: {
        title?: string;
        min?: number;
        max?: number;
    }) => void;
    onEdit: () => void;
};

export const NumberRandomizer = ({
    title,
    min,
    max,
    onEdit,
    onQuickEdit,
}: Props) => {
    const [value, setValue] = useState(random(min, max));

    return (
        <Frame>
            <Title value={title} onChange={title => onQuickEdit({ title })} />
            <Value
                onClick={() => setValue(random(min, max))}
                onDoubleClick={onEdit}
            >
                {value}
            </Value>
            <Controls>
                <Limit
                    value={min.toString()}
                    onChange={newMin =>
                        onQuickEdit({ min: sanitizeNumber(newMin) })
                    }
                />
                <Limit
                    value={max.toString()}
                    onChange={newMax =>
                        onQuickEdit({ max: sanitizeNumber(newMax) })
                    }
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
    background: ${({ theme }) => theme.color.widgetBackground};
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
