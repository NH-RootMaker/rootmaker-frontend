import { useEffect } from 'react';
import CommonButton from '@/components/common-button';
import CloseSvg from '@/assets/icons/Close.svg?react';
import * as S from './Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  content,
  buttonText = '확인',
  onButtonClick,
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
          {title === "안내" && (
            <S.CloseButton onClick={onClose}>
              <CloseSvg width="20" height="20" />
            </S.CloseButton>
          )}
        </S.ModalHeader>
        
        <S.ModalBody>
          <S.ModalText>
            {content.split('\n').map((line, index) => (
              <div key={index}>
                {line}
              </div>
            ))}
          </S.ModalText>
        </S.ModalBody>
        
        <S.ModalFooter>
          <CommonButton
            variant="primary"
            onClick={onButtonClick || onClose}
            width="80%"
          >
            {buttonText}
          </CommonButton>
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;