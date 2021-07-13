import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Catalog = {
  async render() {
    return `
      <div class="hero loading">
        <div class="hero-inner">
            <div class="hero-title">Mencari Restoran yang Tepat</div>
            <div class="hero-tagline">Menciptakan momen yang tak terlupakan</div>
        </div>
      </div>

      <div class="content">
        <h2 class="content-heading">Restaurant Catalog</h2>
        <div id="restaurants" class="restaurants">
          
        </div>
      </div>
    `;
  },

  async afterRender() {
    const catalog = await RestaurantSource.catalogList();
    const restaurantsContainer = document.querySelector('#restaurants');
    catalog.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Catalog;
