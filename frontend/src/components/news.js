/* eslint-disable react/prop-types */
import React from 'react';

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

export default News;
