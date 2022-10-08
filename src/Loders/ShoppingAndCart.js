import { getStoredCart } from "../utilities/fakedb";

export const shoppingAndCartLoder = async() => {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart
    const storedCart = getStoredCart();
    const initialCart = [];
    for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        initialCart.push(addedProduct);
      }
    }
    return {products: products, initialCart: initialCart};
}