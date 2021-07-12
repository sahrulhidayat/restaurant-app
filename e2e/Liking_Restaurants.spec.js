const assert = require('assert');

Feature('Liking A Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.content-heading');

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item-title');
  const firstRestaurant = locate('.restaurant-item-title').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
