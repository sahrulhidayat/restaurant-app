import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="blank-header"></div>
    
    <div class="content">
      <h2 class="content-heading">Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants">

        </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML += '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
    }
  },
};

export default Favorite;
