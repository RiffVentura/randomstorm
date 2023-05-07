import styled from 'styled-components';

type IconButtonProps = {
    label: string;
    icon: string;
    onClick: () => void;
    selected?: boolean;
};

export const IconButton = ({
    label,
    icon,
    onClick,
    selected = false,
}: IconButtonProps) => {
    return (
        <Container>
            <Button selected={selected} onClick={onClick}>
                {icon}
            </Button>
            <label>{label}</label>
        </Container>
    );
};

const Container = styled.span`
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    line-height: 22px;
    margin: 22px;
`;

type ButtonProps = {
    selected: boolean;
};

const Button = styled.button<ButtonProps>`
    font-weight: ${({ theme }) => theme.typography.weight.icon};
    font-size: ${({ theme }) => theme.typography.size.icon};
    background: ${({ theme, selected }) =>
        selected ? theme.color.selected : theme.color.widgetBackground};
    color: ${({ theme, selected }) =>
        selected ? theme.color.widgetBackground : theme.color.selected};
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
`;
