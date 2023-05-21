import { forwardRef, useState, useImperativeHandle, useCallback } from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { RandomizerHandle } from '../models/Randomizer';

const random = (list: string[]): string => {
    if (list.length === 0) {
        return '';
    }
    const randomIndex = Math.round(Math.random() * (list.length - 1));
    return list[randomIndex];
};

type Props = {
    title: string;
    list: string[];
    onQuickEdit: (value: { title?: string }) => void;
    onEdit: () => void;
    onDelete: () => void;
};

export const ListRandomizer = forwardRef<RandomizerHandle, Props>(
    function ListRandomizer(
        { title, list, onEdit, onQuickEdit, onDelete },
        ref,
    ) {
        const [isLocked, setLocked] = useState(false);
        const [value, setValue] = useState(() => random(list));
        const randomize = useCallback(() => {
            if (isLocked) {
                return;
            }
            setValue(random(list));
        }, [isLocked, list]);

        useImperativeHandle(ref, () => ({ randomize }));

        return (
            <Frame isLocked={isLocked}>
                <Title
                    value={title}
                    onChange={title => onQuickEdit({ title })}
                    onDoubleClick={onEdit}
                />
                <Value
                    onClick={randomize}
                    onContextMenu={event => {
                        event.preventDefault();
                        setLocked(!isLocked);
                    }}
                >
                    {value}
                </Value>
                <Delete onClick={onDelete}>✖</Delete>
            </Frame>
        );
    },
);

const Frame = styled.section<{
    isLocked: boolean;
}>`
    width: 240px;
    height: 180px;
    font-size: ${({ theme }) => theme.typography.size.default};
    font-weight: ${({ theme }) => theme.typography.weight.light};
    background: ${({ theme, isLocked }) =>
        isLocked ? theme.color.locked : theme.color.widgetBackground};
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 1rem;
    user-select: none;
    position: relative;

    & > button {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s,
            opacity 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    &:hover > button {
        visibility: visible;
        opacity: 1;
    }
`;
const Value = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.typography.size.big};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    margin-bottom: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 220px;
`;

const Title = styled(Input)`
    text-align: center;
`;

const Delete = styled.button`
    background-color: #b62727;
    color: ${({ theme }) => theme.color.background};
    font-size: 12px;
    padding: 2px;
    line-height: 1;
    position: absolute;
    height: 25px;
    width: 25px;
    right: 1rem;
    top: 1.3rem;
    border-radius: 2px;

    &:hover {
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
        background-color: #c72f2f;
    }
`;
