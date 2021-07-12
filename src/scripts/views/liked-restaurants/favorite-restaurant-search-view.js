import { createRestaurantItemTemplate } from '../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <div class="content">
          <input id="query" type="text">
          <h2 class="content__heading">Your Favorite Restaurant</h2>
            <div id="restaurants" class="restaurants">
              
            </div>
        </div>
      `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    let html;

    if (restaurants.length > 0) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(`<li class="restaurant"><span class="restaurant-title">${restaurant.name || '-'}</span></li>`),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.querySelector('.restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found"></div>';
  }
}

export default FavoriteRestaurantSearchView;
