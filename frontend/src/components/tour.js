/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import { Text, ShowDescription, ShowsTable, ShowRow, ShowTickets } from '../styles/HomeStyles.js';

import { Button, theme, Wrapper } from '../styles/Globals.js';

const ATag = styled.a`
  color: ${theme.secondaryWhite};
  text-decoration: none;
  -webkit-transition: color 0.5s ease-out;
  -moz-transition: color 0.5s ease-out;
  -o-transition: color 0.5s ease-out;
  transition: color 0.5s ease-out;

  &:hover {
    color: ${theme.accentPinkRed};
  }
`;

const Tour = ({ date, location, name, tickets, description }) => (
  <Wrapper>
    <ShowsTable>
      <ShowRow>
        <ShowDescription>
          <Text>{date}</Text>
          <Text>@ {name}</Text>
          <Text>{location}</Text>
          <Text>{description}</Text>
        </ShowDescription>
        <ShowTickets>
          <Button type="">
            <ATag href={tickets} rel="noopener norefferer" target="_blank">
              Tickets
            </ATag>
          </Button>
        </ShowTickets>
      </ShowRow>
    </ShowsTable>
  </Wrapper>
);

export default Tour;
