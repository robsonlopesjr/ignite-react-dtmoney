import React from 'react';

import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
        <Content>
            <img src={logo} alt="dt Money"/>

            <button type="button">
                Nova transação
            </button>
        </Content>
    </Container>
  )
}

export default Header;