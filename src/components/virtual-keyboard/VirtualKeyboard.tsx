import * as S from './VirtualKeyboard.styles';

interface VirtualKeyboardProps {
  onInput: (value: string) => void;
  onClose: () => void;
}

const VirtualKeyboard = ({ onInput, onClose }: VirtualKeyboardProps) => {
  const numberKeys = [
    ['1', '2', '3'],
    ['4', '5', '6'], 
    ['7', '8', '9'],
    ['0', '', 'delete']
  ];


  const handleKeyPress = (key: string) => {
    if (key === '') return;
    if (key === 'delete') {
      onInput('delete');
    } else {
      onInput(key);
    }
  };

  return (
    <S.KeyboardContainer>
      <S.KeyboardHeader>
        <S.CloseButton onClick={onClose}>완료</S.CloseButton>
      </S.KeyboardHeader>
      
      <S.KeyboardContent>
        <S.NumberSection>
          {numberKeys.map((row, rowIndex) => (
            <S.KeyRow key={rowIndex}>
              {row.map((key, keyIndex) => (
                <S.Key
                  key={keyIndex}
                  $isEmpty={key === ''}
                  $isDelete={key === 'delete'}
                  onClick={() => handleKeyPress(key)}
                  disabled={key === ''}
                >
                  {key === 'delete' ? '←' : key}
                </S.Key>
              ))}
            </S.KeyRow>
          ))}
        </S.NumberSection>
      </S.KeyboardContent>
    </S.KeyboardContainer>
  );
};

export default VirtualKeyboard;