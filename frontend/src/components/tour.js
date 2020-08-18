import React from 'react';
import { Link } from 'gatsby';

import { Text, ShowDescription, ShowsTable, ShowRow, ShowTickets } from '../styles/HomeStyles.js';

import { Button, Wrapper } from '../styles/Globals.js';

const Tour = () => (
  <Wrapper>
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
