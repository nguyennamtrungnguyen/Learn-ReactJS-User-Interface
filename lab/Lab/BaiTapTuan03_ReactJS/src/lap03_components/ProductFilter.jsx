
const filterProducts = (products, search, minPrice, maxPrice) => {
  return products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(search.toLowerCase());

    const matchPrice = p.price >= minPrice && p.price <= maxPrice;

    return matchName && matchPrice;
  });
};

export default filterProducts;
