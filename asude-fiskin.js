(function () {
  if (window.location.pathname !== "/" && window.location.pathname !== "/index.html") {
    console.log("wrong page");
    return;
  }
  const style = document.createElement('style');
  style.textContent = `
    body {
      background-color: #f3f4f6;
      padding: 1.5rem;
      margin: 0;
      font-family: sans-serif;
    }

    .container {
      position: relative;
      max-width: 77rem;
      margin: 0 auto;
      border-radius: 35px;

    }

    @media (max-width: 1200px) {
      .container {
        max-width: 58rem;
      }
    }

    @media (max-width: 990px) {
      .container {
        max-width: 39rem;
      }
    }

    @media (max-width: 650px) {
      .container {
        max-width: 20rem;
      }
    }

    .carousel {
      background-color: white;
      border-radius: 35px;
      margin-bottom: 2rem;
      overflow: hidden;
    }

    .carousel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fef6eb;
      padding: 25px 67px;
      border-top-left-radius: 35px;
      border-top-right-radius: 35px;
      font-weight: 700;
      font-family: Quicksand;
    }

    .carousel-header h2 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.11;
      color: #f28e00;
      margin: 0;
      font-family: Quicksand;
    }

    .carousel-container {
      display: flex;
      gap: 1rem;
      overflow-x: auto;
      padding-bottom: 1rem;
      background-color: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      justify-content: start;
      align-items: center;
      padding: 1.5rem 0;
    }

    .product-card {
      position: relative;
      flex-shrink: 0;
      width: 16rem;
      height: 28rem;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      padding: 1rem;
      position: relative;
      border: 1px solid #ededed;
      
    }

    .product-card:hover {
      border: 2px solid #f97316;
    }

    .product-label {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      z-index: 10;
    }

    .product-label img {
      display: block;
      width: 3.5rem;
      height: auto;
      margin-bottom: 0.25rem;
    }

    .favorite-button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background-color: white;
      border-radius: 9999px;
      padding: 0.25rem;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      z-index: 10;
    }

    .favorite-button:hover {
      border: 1px solid #f97316;
    }

    .favorite-button button {
      color: #f97316;
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      display: flex;
    }

    .heart-icon {
      width: 1.5rem;
      height: 1.5rem;
      transition: color 0.3s;
    }

    .product-card img.product-image {
      width: 100%;
      height: 10rem;
      object-fit: contain;
      margin-bottom: 1rem;
      position: relative;
      z-index: 0;
    }

    .product-title {
      font-weight: 500;
      font-size: 0.75rem;
      margin-bottom: 0.25rem;
      margin-bottom: 25px;
      color: #7D7D7D;
    }

    .product-rating {
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      color: #facc15;
      margin-bottom: 25px;
    }

    .product-rating span {
      color: #7D7D7D;
      margin-left: 0.25rem;
    }

    .product-price {
      font-weight: bold;
      font-size: 1.125rem;
      margin-bottom: 1.5rem;
      color: #7D7D7D;
    }

    .product-price-discounted {
      font-weight: bold;
      font-size: 1.125rem;
      margin-bottom: 1.5rem;
      color: #00a365;
    }

    .product-discount {
      color: #00a365;
      font-size: 1rem;
      font-weight: bold;
      display: inline-flex;
      align-items: center;
      padding: 0.25rem 0.5rem;
    }

    .add-to-cart-button {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 15rem;
      background-color: #ffedd5;
      color: #f97316;
      font-weight: bold;
      padding: 0.75rem;
      border-radius: 1rem;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
    }

    .add-to-cart-button:hover {
      background-color: #f97316;
      color: white;
    }

    .carousel-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 20;
      background-color: #fef6eb;
      border: none;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      width: 3rem;
      height: 3rem;
      border-radius: 9999px;
      font-size: 2rem;
      color: #f97316;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 3px;
    }

    .left-arrow {
      left: -4rem;
    }

    .right-arrow {
      right: -4rem;
    }

    .carousel-arrow:hover {
      background-color: white;
      border: 1px solid #f97316;
    }

    a {
      text-decoration: none !important;
    }
  `;

  document.head.appendChild(style);

  const container = document.createElement('div');
  container.className = 'container';

  const carousel = document.createElement('div');
  carousel.className = 'carousel';

  const carouselHeader = document.createElement('div');
  carouselHeader.className = 'carousel-header';
  const h2 = document.createElement('h2');
  h2.textContent = 'Sizin için Seçtiklerimiz';
  carouselHeader.appendChild(h2);

  const leftArrow = document.createElement('button');
  leftArrow.className = 'carousel-arrow left-arrow';
  leftArrow.textContent = '‹';

  const rightArrow = document.createElement('button');
  rightArrow.className = 'carousel-arrow right-arrow';
  rightArrow.textContent = '›';

  const carouselContainer = document.createElement('div');
  carouselContainer.className = 'carousel-container';
  carouselContainer.id = 'carouselScroll';


  var products = [];
    products = window.localStorage.getItem('products') || "null";
    if (products.toString() !== "null") {
      console.log("products found in localStorage");
      products = JSON.parse(products);
      products.forEach(p => {
        const card = createProductCard(p);
        carouselContainer.appendChild(card);
      });
    } else {
      products = [];
    }

    if (products.length === 0) {
      fetch('https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json')
        .then(response => response.json())
        .then(data => {
          products = [];
          data.forEach(p => {
            data = {
              labelImages: [
                "https://www.e-bebek.com/assets/images/cok-satan@2x.png",
                "https://www.e-bebek.com/assets/images/yildiz-urun@2x.png",
              ],
              ratingStars: "★★★★★",
              img: p.img,
              brand: p.brand,
              name: p.name,
              price: p.price,
              url: p.url,
              original_price: p.original_price
            };

            if (p.original_price > p.price) {
              const discountAmount = p.original_price - p.price;
              const discountPercent = Math.round((discountAmount / p.original_price) * 100);
              data.discount = `${discountPercent}%`;
            }

            const card = createProductCard(data);
            carouselContainer.appendChild(card);
            products.push(data);
          });
          
          window.localStorage.setItem('products', JSON.stringify(products));
        })
        .catch(error => console.error('Error fetching products:', error));
    }

  function createProductCard(product) {
    const card = document.createElement('a');
    card.href = product.url;
    card.target = '_blank';
    card.className = 'product-card';

    const labelDiv = document.createElement('div');
    labelDiv.className = 'product-label';
    product.labelImages.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      labelDiv.appendChild(img);
    });
    card.appendChild(labelDiv);

    const favDiv = document.createElement('div');
    favDiv.className = 'favorite-button';
    const favBtn = document.createElement('button');
    const favIcon = document.createElement('img');
    favIcon.src = "https://www.e-bebek.com/assets/svg/default-favorite.svg";
    favIcon.alt = '';
    favIcon.className = 'heart-icon';
    favBtn.appendChild(favIcon);
    favDiv.appendChild(favBtn);
    card.appendChild(favDiv);

    const prodImg = document.createElement('img');
    prodImg.className = 'product-image';
    prodImg.src = product.img;
    prodImg.alt = 'Ürün';
    card.appendChild(prodImg);

    const title = document.createElement('h3');
    title.className = 'product-title';
    const titleText = "<strong>" + product.brand + "</strong> - " + product.name;
    title.innerHTML = titleText;
    card.appendChild(title);

    const rating = document.createElement('div');
    rating.className = 'product-rating';
    rating.textContent = "★★★★★ ";
    const spanCount = document.createElement('span');
    spanCount.textContent = 106;
    rating.appendChild(spanCount);
    card.appendChild(rating);

  if (product.discount && product.original_price) {
    const originalPriceRow = document.createElement('div');
    originalPriceRow.style.display = 'flex';
    originalPriceRow.style.alignItems = 'center';
    originalPriceRow.style.gap = '0.5rem';

    const originalPrice = document.createElement('span');
    originalPrice.textContent = product.original_price;
    originalPrice.style.textDecoration = 'line-through';
    originalPrice.style.color = '#7D7D7D';
    originalPrice.style.fontSize = '1.125rem';
    originalPrice.style.fontWeight = 'bold';

    const discount = document.createElement('span');
    discount.className = 'product-discount';

    const discountText = document.createElement('span');
    discountText.textContent = product.discount;

    const discountArrow = document.createElement('span');
    discountArrow.innerHTML = '&#x2193;';
    discountArrow.style.backgroundColor = '#00a365';
    discountArrow.style.color = 'white';
    discountArrow.style.borderRadius = '1rem';
    discountArrow.style.padding = '0.2rem 0.4rem';
    discountArrow.style.marginLeft = '0.25rem';
    discountArrow.style.display = 'inline-block';

    discount.appendChild(discountText);
    discount.appendChild(discountArrow);

    originalPriceRow.appendChild(originalPrice);
    originalPriceRow.appendChild(discount);
    card.appendChild(originalPriceRow);

    const price = document.createElement('p');
    price.className = 'product-price-discounted';
    price.textContent = product.price;
    card.appendChild(price);
  } else {
    const price = document.createElement('p');
    price.className = 'product-price';
    price.textContent = product.price;
    card.appendChild(price);
  }

    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'add-to-cart-button';
    addToCartBtn.textContent = 'Sepete Ekle';
    card.appendChild(addToCartBtn);

    return card;
  }

  carousel.appendChild(carouselHeader);
  carousel.appendChild(leftArrow);
  carousel.appendChild(rightArrow);
  carousel.appendChild(carouselContainer);
  container.appendChild(carousel);
  document.body.appendChild(container);

  leftArrow.addEventListener('click', () => {
    carouselContainer.scrollBy({ left: -carouselContainer.offsetWidth, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    carouselContainer.scrollBy({ left: carouselContainer.offsetWidth, behavior: 'smooth' });
  });

  const linkGoogleFonts = document.createElement('link');
  linkGoogleFonts.rel = 'stylesheet';
  linkGoogleFonts.href = 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap';
  document.head.appendChild(linkGoogleFonts);
})();