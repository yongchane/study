import { useParams } from '../../node_modules/react-router-dom/dist/index';
import Categories from '../Categories';
import NewList from '../NewList';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';
  return (
    <>
      <Categories />
      <NewList category={category} />
    </>
  );
};

export default NewsPage;
