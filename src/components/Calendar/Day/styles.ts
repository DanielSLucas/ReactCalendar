import styled, { css } from 'styled-components';

interface ContainerProps {
  isToday: boolean;
  hasEvent: boolean;
  isADayOfTheCurrentMonth: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;

  ${(props) => 
    props.isToday && 
    css`
      color: #CF0563;
      font-weight: bold;
      border-radius: 50%;
    `
  }

  ${(props) => 
    props.hasEvent && 
    css`
      background-color: #FBD2E5;
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