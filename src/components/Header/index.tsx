import React from 'react';

import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

const Header: React.FC<HeaderProps> = ({onOpenNewTransactionModal}) => {
  return (
    <Container>
        <Content>
            <img src={logo} alt="dt Money"/>

            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
            </button>
        </Content>
    </Container>
  )
}

export default Header;