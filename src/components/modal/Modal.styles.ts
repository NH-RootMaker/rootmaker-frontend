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
  background: #FAFAFA;
  border-radius: 16px;
  max-width: 400px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 0 16px 0 rgba(66, 206, 121, 0.75);
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
  position: relative;
  padding: 24px 56px 16px 24px;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.grayScale.gy200};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.h2`
  ${(props) => props.theme.fonts.header.h3}
  color: ${(props) => props.theme.colors.grayScale.black};
  margin: 0;
  flex: 1;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 22px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  svg {
    color: ${(props) => props.theme.colors.grayScale.gy600};
  }
  
`;

export const ModalBody = styled.div`
  padding: 20px 24px;
  text-align: center;
`;

export const ModalText = styled.p`
  ${(props) => props.theme.fonts.body.l400}
  color: ${(props) => props.theme.colors.grayScale.gy800};
  white-space: pre-line;
`;

export const ModalFooter = styled.div`
  padding: 0 24px 24px 24px;
  margin-left: 55px;
  
`;