import styled from 'styled-components';

export const EmptySlot = () => {
    return <Frame>+</Frame>;
};

const Frame = styled.section`
    width: 240px;
    height: 180px;
    font-size: 90px;
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    background: ${({ theme }) => theme.color.background};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 1rem;
    user-select: none;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

    &:hover {
        transform: scale(1.025, 1.025);
        background: ${({ theme }) => theme.color.widgetBackground};
    }
`;
