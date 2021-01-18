import styled, { css } from 'styled-components';

interface ListItemProps {
  isCurrentWeekDay?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #CF0563;
  background: #FE75AD;
  opacity: 0.7;
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
      color: #FFF;
      background-color: #FE75AD;
    `
  }
`;