import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

import { SectionHeader } from '../styles/HomeStyles.js';

import { Button, maxWidthDevice, theme, Wrapper } from '../styles/Globals.js';

const ShowsTable = styled.div`
  width: 100%;
`;

const ShowRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 14px 10px;

  @media screen and ${maxWidthDevice.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ShowDescription = styled.div`
  width: 65%;
`;

const ShowTickets = styled.div`
  display: flex;
  width: 35%;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: ${theme.secondaryWhite};
  margin-bottom: 5px;

  @media screen and ${maxWidthDevice.tablet} {
    text-align: center;
  }
`;

const Tour = () => (
  <Wrapper>
    <SectionHeader>TOUR</SectionHeader>
    <ShowsTable>
      <ShowRow>
        <ShowDescription>
          <Text>September 11, 2020</Text>
          <Text>@ The Mad Hatter</Text>
          <Text>Newport, Kentucky</Text>
          <Text>W/ Boy Meets World</Text>
        </ShowDescription>
        <ShowTickets>
          <Button type="submit">Tickets</Button>
        </ShowTickets>
      </ShowRow>
      <ShowRow>
        <ShowDescription>
          <Text>September 11, 2020</Text>
          <Text>@ The Mad Hatter</Text>
          <Text>Newport, Kentucky</Text>
          <Text>W/ Boy Meets World</Text>
        </ShowDescription>
        <ShowTickets>
          <Button type="submit">Tickets</Button>
        </ShowTickets>
      </ShowRow>
      <ShowRow>
        <ShowDescription>
          <Text>September 11, 2020</Text>
          <Text>@ The Mad Hatter</Text>
          <Text>Newport, Kentucky</Text>
          <Text>W/ Boy Meets World</Text>
        </ShowDescription>
        <ShowTickets>
          <Button type="submit">Tickets</Button>
        </ShowTickets>
      </ShowRow>
      <ShowRow>
        <ShowDescription>
          <Text>September 11, 2020</Text>
          <Text>@ The Mad Hatter</Text>
          <Text>Newport, Kentucky</Text>
          <Text>W/ Boy Meets World</Text>
        </ShowDescription>
        <ShowTickets>
          <Button type="submit">Tickets</Button>
        </ShowTickets>
      </ShowRow>
    </ShowsTable>
  </Wrapper>
);

export default Tour;
