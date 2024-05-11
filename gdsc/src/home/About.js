import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useParams();
  const detail = searchParams.get('detail');
  const more = searchParams.get('more');

  const onSet = () => {
    setSearchParams({ detail, more: more === 'true' ? false : true });
  };

  const inCrease = () => {
    const updown = detail === null ? 1 : parseInt(detail + 1);
    setSearchParams({ detail: updown, more });
  };
  return (
    <div>
      <p>detail</p>
      {detail}
      <p>more</p>
      {more}
      <button onClick={onSet}>Toggle detail</button>
      <button onClick={inCrease}>mode+1</button>
    </div>
  );
};

export default About;
