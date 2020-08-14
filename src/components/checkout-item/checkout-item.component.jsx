import React from 'react';
import { connect } from 'react-redux';

import { deleteFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Price,
  Value,
  Arrow,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({
  cartItem,
  deleteItemFromCartDispatcher,
  addItemDispatcher,
  removeOrDecreaseDispatcher,
}) => {
  const { imageUrl, name, quantity, price, id } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt='item' />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => removeOrDecreaseDispatcher(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItemDispatcher(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <Price>{price * quantity}</Price>
      <RemoveButton onClick={() => deleteItemFromCartDispatcher(id)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItemFromCartDispatcher: id => dispatch(deleteFromCart(id)),
  addItemDispatcher: item => dispatch(addItem(item)),
  removeOrDecreaseDispatcher: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
