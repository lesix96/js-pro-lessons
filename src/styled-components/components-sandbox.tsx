import React from 'react';
import styled, { css } from "styled-components";
import { COLOR } from './color-constants';

interface BoxProps {
    width: string;
    height: string;
    backColor?: string;
}

interface FlexBoxProps {
    alignItems?: string;
    justifyContent?: string;
    flexDirection?: string;
}

const Box = styled.div<BoxProps>`
  display: block;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  background-color: ${p => p.backColor};
`;

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  align-items: ${p => p.alignItems || 'center'};
  justify-content: ${p => p.justifyContent || 'center'};
  flex-direction: ${p => p.flexDirection || 'row'};
`;

const H1 = styled.h1`
  font-size: 16px;
  color: red;
`;

const P = styled.p`
  font-size: 12px;
  color: wheat;
`;

interface IButtonProps {
    primary?: boolean;
    outlined?: boolean;
    color?: string;
}

const Button = styled.button<IButtonProps>`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  background-color: red;
  transition: 0.6s linear;
  
  &:hover:enabled {
    background-color: orange;
  }
  
  ${props => props.primary && css` /*css - для вложенных шаблонных литералов*/
    color: white;
    background-color: gold;
  `}

  ${({ outlined, color, theme }) => outlined && css` /*css - для вложенных шаблонных литералов*/
    color: ${color || theme.colors.primary};
    border: 1px solid ${color || theme.colors.primary};
    background-color: pink;
  `}
`;

const LargeButton = styled(Button)`
  width: 300px;
  height: 100px;
  
  @media ${props => props.theme.media.phone} {
    background-color: black;
  }
`// стили можно расширять на основе уже существующих компонентов
// таким образом LargeButton наследует все свойства от Button
// и при этом обладает своими собственными

const StyledComponents = () => {
    return (
        <>
            <FlexBox>
                <Box width='100' height='200' backColor={COLOR.gold} />
                <Box width='100' height='400' backColor={COLOR.purple}>
                    <H1>Hello</H1>
                    <P>World</P>
                </Box>
                <Button primary>Primary button</Button>
                <Button outlined>Red outlined button</Button>
                <LargeButton disabled={true}>Large Button</LargeButton>
            </FlexBox>
        </>
    )
}

export default StyledComponents;
