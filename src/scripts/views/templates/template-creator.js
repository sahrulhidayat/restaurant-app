import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<img class="restaurant-image loading lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
<h2 class="restaurant-title loading">${restaurant.name}</h2>
<div class="restaurant-info">
    <h3>Information :</h3>
        <h4>Rating</h4>
            <div class="restaurant-rating"> <div class="stars" style="--rating: ${restaurant.rating};"></div> ${restaurant.rating} </div>
        <h4>Lokasi</h4>
            <p>${restaurant.city}, ${restaurant.address}</p>
        <h4>Description</h4>
            <p class="restaurant-description">${restaurant.description}</p>
        <h4>Kategori Menu</h4>
            <p>${restaurant.categories.map((category) => `${category.name}`).join(', ')}</p>
        <h4>Menu Makanan</h4>
            <div class="menu-foods">${restaurant.menus.foods.map((food) => `<ul> <li>${food.name}</li> </ul>`).join('')}</div>
        <h4>Menu Minuman</h4>
            <div class="menu-drinks">${restaurant.menus.drinks.map((drink) => `<ul> <li>${drink.name}</li> </ul>`).join('')}</div>
        <h4>Customer Reviews</h4>
            <div>${restaurant.customerReviews.map((review) => `
                <div class="review-wrapper">
                    <p class="review-maker">${review.name}</p>
                    <div class="review-date">${review.date}</div>
                    <p class="review-review">${review.review}</p>
                </div>
                `).join('')}
            </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="restaurant-item loading">
    <img class="restaurant-item-thumb loading lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <div class="restaurant-item-detail">
        <a href="${`#/detail/${restaurant.id}`}" class="restaurant-item-title loading">${restaurant.name}</a>
        <h2 class="restaurant-item-rating loading"> <div class="stars" style="--rating: ${restaurant.rating};"></div> ${restaurant.rating} </h2>
        <h2 class="restaurant-item-city loading">Kota : ${restaurant.city}</h2>
        <p class="restaurant-item-description loading">${restaurant.description}</p>
    </div>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like-button">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like-button">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
