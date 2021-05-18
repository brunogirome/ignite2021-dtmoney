import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  handleOpenNewTranscationModal: () => void;
}

export function Header({ handleOpenNewTranscationModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTranscationModal}>
          New transaction
        </button>
      </Content>
    </Container>
  );
}
