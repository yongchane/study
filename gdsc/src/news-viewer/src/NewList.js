import styled from 'styled-components';
import NewsItem from './Newsitem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and(max-width:768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        // category값이 all이라면 query 값을 공백으로 설정하고, aL1이 아니라면" &category=카테고리"형태의 문자열을 만들
        // '' 따음표가 아니라 영문키 누른다음 ₩키를 누르는 백택을 사용해야한다
        // JavaScript의 템플릿 리터럴을 사용할 때는 백틱()을 사용해야 한다
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e6a9b70aea5a4dd1b265f13208bebe74`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);
  // category값이 바뀔 때마다 뉴스를 새로 불러와야 하기 때문에 useEffect의 의존배열(두번쨰 파라미터로 설정하는 배열)에 category를 넣어준다
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewList;
