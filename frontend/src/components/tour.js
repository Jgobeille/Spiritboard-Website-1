import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { ATag, Text, ShowDescription, ShowsTable, ShowRow, ShowTickets } from '../styles/HomeStyles.js';

import { Button, Wrapper } from '../styles/Globals.js';

const Tour = ({ date, location, name, tickets, description }) => {
  const dateToBeFormatted = new Date(date);
  const formattedDate = `${dateToBeFormatted.getMonth() +
    1}/${dateToBeFormatted.getDate()}/${dateToBeFormatted.getFullYear()}`;
  const TimeToBeFormatted = `${dateToBeFormatted.getHours()} : ${dateToBeFormatted.getMinutes()} : ${dateToBeFormatted.getSeconds()} `;

  return (
    <Wrapper>
      <ShowsTable>
        <ShowRow>
          <ShowDescription>
            <Text>
              {formattedDate} {moment(TimeToBeFormatted, 'HH:mm:ss').format('h:mm a')}
            </Text>
            <Text>@ {name}</Text>
            <Text>{location}</Text>
            <Text>{description}</Text>
          </ShowDescription>
          <ShowTickets>
            <ATag href={tickets} rel="noopener norefferer" target="_blank">
              <Button type="">Tickets</Button>
            </ATag>
          </ShowTickets>
        </ShowRow>
      </ShowsTable>
    </Wrapper>
  );
};

Tour.propTypes = {
  date: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  tickets: PropTypes.string,
  description: PropTypes.string,
};

export default Tour;
