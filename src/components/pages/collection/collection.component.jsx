import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../../redux/shop/shop.selectors';

import CollectionItem from '../../collection-item/collection-item.component';

import { CollectionItems, CollectionPageContainer, Title } from './collection.styles';

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <CollectionItems>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItems>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
