import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from '../styles/Globals.js';

import { Article, ArticleAuthor, ArticleContent, ArticleDate, ArticleTitle } from '../styles/HomeStyles.js';

const News = ({ title, date, image, description, firstName, lastName }) => {
  const dateToBeFormatted = new Date(date);
  const formattedDate = `${dateToBeFormatted.getMonth() +
    1}/${dateToBeFormatted.getDate()}/${dateToBeFormatted.getFullYear()}`;

  return (
    <Wrapper>
      <Article>
        <ArticleDate>{formattedDate}</ArticleDate>
        <ArticleTitle>{title}</ArticleTitle>
        {image ? <img alt={image} src={image} /> : ''}
        <ArticleContent>{description}</ArticleContent>
        <ArticleAuthor>
          - {firstName} {lastName}
        </ArticleAuthor>
      </Article>
    </Wrapper>
  );
};

News.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

export default News;
