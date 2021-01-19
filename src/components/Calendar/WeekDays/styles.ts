import styled, { css } from 'styled-components';
import { opacify } from 'polished';

interface ListItemProps {
  isCurrentWeekDay?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.secondaryFontColor};
  background: ${props => opacify(-0.3, props.theme.primaryColor)};
  margin-bottom: 0.5rem;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const ListItem = styled.li<ListItemProps>`
  width: 2.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;

  ${(props) => 
    props.isCurrentWeekDay && 
    css`
      color: ${props => props.theme.headerFontColor};
    `
  }
`;