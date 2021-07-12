import Catalog from '../views/pages/catalog';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Catalog,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
