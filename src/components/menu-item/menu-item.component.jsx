import React from 'react';
// import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImage, Content, Title, Subtitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImage className='background-image' imageUrl={imageUrl} />
      <Content className='content'>
        <Title className='title'>{title.toUpperCase()}</Title>
        <Subtitle className='subtitle'>SHOP NOW</Subtitle>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
