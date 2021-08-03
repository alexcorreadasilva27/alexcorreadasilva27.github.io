const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
const urlItems = 'https://api.mercadolibre.com/items/';
const getClassItems = document.querySelector('.items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// Essa função atualiza o localStorage e limpa o que o localStorage era
const updateLocalStorage = () => {
  const getCart = document.querySelector('ol').childNodes;
  localStorage.clear();
  getCart.forEach((item, index) => localStorage.setItem(`cart ${index}`, item.outerHTML));
};

// Essa Função soma os preços conforme adc no carrinho e arredonda para duas casas decimais cumprindo assim o requisito 5
const totalPrice = (price) => {
  const getActualPrice = document.querySelector('.total-price').innerText;
  const updatePrice = `${Number(getActualPrice) + Number(price)}`;
  document.querySelector('.total-price').innerText = Math.round(updatePrice * 100) / 100;
};

// Requisito 3
function cartItemClickListener(event) {
  event.target.remove();
  const removeElement = event.target.innerHTML.split('$')[1];
  totalPrice(`-${removeElement}`);
  updateLocalStorage();
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// Requisito 1
const mercadoLivreAPI = async () => {
  const fetchMercadoLivre = await fetch(url);
  const fetchMercadoLivreJson = await fetchMercadoLivre.json();
  const arrayJson = fetchMercadoLivreJson.results;
  arrayJson.forEach((item) => {
    const itemCreate = createProductItemElement(item);
    getClassItems.appendChild(itemCreate);
  });
};

// Requisito 2
const buttonAdcCart = () => {
  const button = document.querySelectorAll('.item__add');
  button.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const itemID = getSkuFromProductItem(event.target.parentElement);
      fetch(`${urlItems}${itemID}`)
      .then((response) => response.json())
      .then((product) => {
        const list = createCartItemElement(product);
        const getOlist = document.querySelector('.cart__items');
        getOlist.appendChild(list);
        totalPrice(product.price);
        updateLocalStorage();
      });
    });
  });
};

// Requisito 4
const loadCart = () => {
  const getlocal = Object.values(localStorage);
  const getOL = document.querySelector('.cart__items');
  getlocal.forEach((_, index) => {
    getOL.innerHTML += localStorage.getItem(`cart ${index}`);
  });
};

// Requisito 6
const emptyCart = () => {
  const emptyBtn = document.querySelector('.empty-cart');
  emptyBtn.addEventListener('click', () => {
    const getCartItems = document.querySelectorAll('li.cart__item');
    getCartItems.forEach((item) => {
      item.remove();
      updateLocalStorage();
    });
  });
};

// Requisito 7
const removeLoading = () => {
  const getLoading = document.querySelector('.loading');
  getLoading.remove();
};

window.onload = async () => { 
await mercadoLivreAPI();
await buttonAdcCart();
loadCart();
emptyCart();
removeLoading();
};
