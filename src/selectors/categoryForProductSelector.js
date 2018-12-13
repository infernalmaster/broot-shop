export default function getCategoryForProduct(product, categories) {
  return categories.find(c => c.id === product.categoryId);
}
