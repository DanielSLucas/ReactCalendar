import styled from 'styled-components';

export const Container = styled.div`
  width: 20rem;
  height: 22rem;
  background: ${props => props.theme.backgroundColor};
  
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.header`
  width: 100%;
  height: 3rem;
  background: ${props => props.theme.primaryColor};
  
  display: flex;
  display: row;
  align-items: center;
  justify-content: space-between;

  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  display: row;
  justify-content: center;
  align-items: center;
  
  color: ${props => props.theme.headerFontColor};
  font-size: 1.5rem;
`;


export const MonthYearLabel = styled.div`
  width: 70%;
  font-size: 1.25rem;
`;

export const TodayButton = styled.button`
  height: 100%;
  width: 20%;
  border: none;
  background: transparent;
  color: ${props => props.theme.headerFontColor};
  font-size: 1rem;
  margin-right: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.primaryColor};
  }
`;

export const PreviousButton = styled.button`
  height: 100%;
  width: 15%;
  border: none;
  border-top-left-radius: 0.5rem;
  background: transparent;
  color: ${props => props.theme.headerFontColor};
  transition: background-color 0.2s;

  svg {
    color: ${props => props.theme.headerFontColor};
    transition: color 0.2s;
  }

  &:hover {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.primaryColor};

    svg {
      color: ${props => props.theme.primaryColor};
    }
  }
`;

export const NextButton = styled.button`
  height: 100%;
  width: 15%;
  border: none;
  border-top-right-radius: 0.5rem;
  background: transparent;
  color: ${props => props.theme.headerFontColor};
  transition: background-color 0.2s;

  svg {
    color: ${props => props.theme.headerFontColor};
    transition: color 0.2s;
  }

  &:hover {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.primaryColor};

    svg {
      color: ${props => props.theme.primaryColor};
    }
  }
`;

export const WeekContainer = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;