import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/original.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, Option } from './header.styles';

const Header = ({ currentUser, toggleCart }) => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>

        <OptionsContainer>
          <Option to='/shop'>SHOP</Option>
          <Option to='/contact'>CONTACT</Option>

          {currentUser ? (
            <Option as='div' onClick={() => auth.signOut()}>
              SIGN OUT
            </Option>
          ) : (
            <Option to='/signin'>SIGN IN</Option>
          )}
          <CartIcon />
        </OptionsContainer>

        {toggleCart ? null : <CartDropdown />}
      </HeaderContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  toggleCart: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
