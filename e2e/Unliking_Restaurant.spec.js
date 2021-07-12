Feature('Unliking A Restaurant');

Before(({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-item-title');
  const firstRestaurant = locate('.restaurant-item-title').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
});

Scenario('Showing already liked one restaurant', ({ I }) => {
  I.seeElement('.restaurant-item');
  I.seeElement('.restaurant-item-title');
});

Scenario('Unliking one restaurant', ({ I }) => {
  I.seeElement('.restaurant-item-title');
  I.click('.restaurant-item-title');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
