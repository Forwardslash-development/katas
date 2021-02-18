function tShirt(cart) {
  const cartNode = document.getElementById('#cart');
  const tShirtOptions = cart.filter((option) => option.isTshirt === true);
  tShirtOptions.forEach((option) => {
    let tshirt = document.createElement('li');
    tshirt.textContent = option.title;
    cartNode.appendChild(tshirt);
  });
}
const cart = [
  {
    title: 'Leather Jacket',
    description: 'Fancy leather jacket',
    size: 'XL',
    isTshirt: false,
  },
  {
    title: 'Fancy Shirt',
    description: 'Fancy silk shirt',
    size: 'XL',
    isTshirt: false,
  },
  {
    title: 'Orange t-Shirt',
    description: 'Premium orange cotten T-Shirt',
    size: 'L',
    isTshirt: true,
  },
  {
    title: 'Black t-shirt',
    description: 'Fancy black cotten T-Shirt',
    size: 'M',
    isTshirt: true,
  },
  {
    title: 'White t-shirt',
    description: 'Working man white cotten T-Shirt',
    size: 'S',
    isTshirt: true,
  },
];
