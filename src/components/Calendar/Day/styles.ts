import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface ContainerProps {
  isToday: boolean;
  hasEvent: boolean;
  isADayOfTheCurrentMonth: boolean;
}

export const Container = styled.li<ContainerProps>`
  width: 2.5rem;
  height: 2.5rem;
  color: ${props => props.theme.primaryFontColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;

  ${(props) => 
    props.isToday && 
    css`
      color: ${props => props.theme.secondaryFontColor};
      font-weight: bold;
    `
  }

  ${(props) => 
    props.hasEvent && 
    css`
      background-color: ${props => lighten(0.2, props.theme.primaryColor)};
      border-radius: 0.5rem;
    `
  }

  ${(props) => 
    !props.isADayOfTheCurrentMonth && 
    css`
      opacity: 0.25;
    `
  }
`;