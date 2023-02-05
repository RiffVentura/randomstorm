import styled from 'styled-components';

type Props = {
    className?: string;
    value: string;
    onChange: (newValue: string) => void;
};

export const Input = ({ value, onChange, className }: Props) => {
    return (
        <StyledInput
            className={className}
            type='text'
            value={value}
            onChange={event => onChange(event.target.value)}
            onFocus={event => event.target.select()}
        />
    );
};

const StyledInput = styled.input`
    border: none;
    background-color: inherit;
    color: ${({ theme }) => theme.color.selected};
    font-style: italic;
    font-family: ${({ theme }) => theme.typography.fontFamily}, sans-serif;
    font-weight: ${({ theme }) => theme.typography.weight.light};
    font-size: ${({ theme }) => theme.typography.size.title};
    text-transform: uppercase;

    &:focus {
        border-bottom: 1px solid ${({ theme }) => theme.color.selected};
        outline: none;
    }
`;
