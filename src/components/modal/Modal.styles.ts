import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: ${(props) => props.theme.colors.grayScale.white};
  border-radius: 20px;
  max-width: 400px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  animation: modalSlideIn 0.3s ease-out;

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(-30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const ModalHeader = styled.div`
  padding: 24px 24px 0 24px;
  text-align: center;
`;

export const ModalTitle = styled.h2`
  ${(props) => props.theme.fonts.header.h2}
  color: ${(props) => props.theme.colors.primary.gn};
  margin: 0;
`;

export const ModalBody = styled.div`
  padding: 20px 24px;
  text-align: center;
`;

export const ModalText = styled.p`
  ${(props) => props.theme.fonts.body.l600}
  color: ${(props) => props.theme.colors.grayScale.gy600};
  line-height: 1.6;
  margin: 0;
  white-space: pre-wrap;
`;

export const ModalFooter = styled.div`
  padding: 0 24px 24px 24px;
`;