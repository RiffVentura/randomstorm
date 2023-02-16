import { forwardRef, ReactNode, useImperativeHandle, useState } from 'react';
import styled, { keyframes } from 'styled-components';

export type ScrollerHandle = {
    toggle: () => void;
};

type ScrollerProps = {
    top: ReactNode;
    bottom: ReactNode;
};

export const Scroller = forwardRef<ScrollerHandle, ScrollerProps>(
    function RefScroller({ top, bottom }, ref) {
        const [isTopMounted, setTopMounted] = useState(false);
        const [topFadingIn, setTopFadingIn] = useState(false);

        const [isBottomMounted, setBottomMoutned] = useState(true);
        const [bottomFadingIn, setBottomFadingIn] = useState(true);

        useImperativeHandle(
            ref,
            () => ({
                toggle() {
                    if (isTopMounted) {
                        setTopFadingIn(false);
                        setBottomFadingIn(true);
                        setBottomMoutned(true);
                    } else {
                        setBottomFadingIn(false);
                        setTopFadingIn(true);
                        setTopMounted(true);
                    }
                },
            }),
            [isTopMounted],
        );

        const animationTopEnd = () => {
            if (!topFadingIn) {
                setTopMounted(false);
            }
        };
        const animationBottomEnd = () => {
            if (!bottomFadingIn) {
                setBottomMoutned(false);
            }
        };

        return (
            <Container>
                {isTopMounted && (
                    <Pane
                        scroll={topFadingIn ? 'DownIn' : 'UpOut'}
                        onAnimationEnd={animationTopEnd}
                    >
                        {top}
                    </Pane>
                )}
                {isBottomMounted && (
                    <Pane
                        scroll={bottomFadingIn ? 'UpIn' : 'DownOut'}
                        onAnimationEnd={animationBottomEnd}
                    >
                        {bottom}
                    </Pane>
                )}
            </Container>
        );
    },
);

const scrollDownIn = keyframes`
    0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;
const scrollUpOut = keyframes`
    0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;
const scrollUpIn = keyframes`
    0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const scrollDownOut = keyframes`
    0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
`;

const Pane = styled.div<{ scroll: string }>`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: 500ms ease-in-out 0s 1 both
        ${({ scroll }) => {
            switch (scroll) {
                case 'UpOut':
                    return scrollUpOut;
                case 'DownIn':
                    return scrollDownIn;
                case 'UpIn':
                    return scrollUpIn;
                case 'DownOut':
                    return scrollDownOut;
                default:
                    return 'none';
            }
        }};
`;
