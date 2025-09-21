import { useEffect } from 'react';
import CommonButton from '@/components/common-button';
import * as S from './Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  buttonText?: string;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  content,
  buttonText = '확인',
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle>{title}</S.ModalTitle>
        </S.ModalHeader>
        
        <S.ModalBody>
          <S.ModalText>{content}</S.ModalText>
        </S.ModalBody>
        
        <S.ModalFooter>
          <CommonButton
            variant="primary"
            onClick={onClose}
            width="100%"
          >
            {buttonText}
          </CommonButton>
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;