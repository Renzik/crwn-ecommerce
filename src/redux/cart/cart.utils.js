export const checkForDuplicates = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, idToRemove) =>
  cartItems.filter(item => item.id !== idToRemove);

export const decreaseOrRemoveFromCheckout = (cartItems, itemToEdit) => {
  const existingCartItem = cartItems.find(item => item.id === itemToEdit.id);

  if (existingCartItem.quantity > 1)
    return cartItems.map(item =>
      item.id === itemToEdit.id ? { ...item, quantity: item.quantity - 1 } : item
    );

  return clearItemFromCart(cartItems, itemToEdit.id);
};
