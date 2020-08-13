import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  BackgroundImage,
  CustomizedButton,
  CollectionFooter,
  Name,
  Price,
} from './collection-item.styles';

const CollectionItem = ({ item, addItemDispatcher }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />

      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
      <CustomizedButton onClick={() => addItemDispatcher(item)} inverted>
        {' '}
        ADD TO CART{' '}
      </CustomizedButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemDispatcher: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
