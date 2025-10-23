import { useForm, Controller } from 'react-hook-form';
import ChoiceButton from '@/components/choice-button';
import CommonButton from '@/components/common-button';
import type { QuestionFormProps, FormData } from './QuestionForm.types';
import * as S from './QuestionForm.styles';

const QuestionForm = ({
  question,
  onAnswer,
  onSubmit,
  onBack,
  isFirstQuestion = false,
}: QuestionFormProps) => {
  const { control, handleSubmit, reset } = useForm<FormData>();

  const handleChoiceSelect = (option: 'A' | 'B') => {
    // 답안 선택 시 바로 다음 문제로 이동
    onAnswer(option);
    onSubmit(option);
    reset();
  };

  const handleFormSubmit = (data: FormData) => {
    onAnswer(data.selectedOption);
    onSubmit(data.selectedOption);
    reset();
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
      <S.QuestionContainer>
        <S.QuestionTitle>{question.title}</S.QuestionTitle>
        
        <S.ChoicesContainer>
          <Controller
            name="selectedOption"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <ChoiceButton
                  option="A"
                  isSelected={field.value === 'A'}
                  hasAnySelection={!!field.value}
                  imageUrl={question.imageA}
                  onClick={(option) => {
                    field.onChange(option);
                    handleChoiceSelect(option);
                  }}
                >
                  {question.optionA}
                </ChoiceButton>
                
                <ChoiceButton
                  option="B"
                  isSelected={field.value === 'B'}
                  hasAnySelection={!!field.value}
                  imageUrl={question.imageB}
                  onClick={(option) => {
                    field.onChange(option);
                    handleChoiceSelect(option);
                  }}
                >
                  {question.optionB}
                </ChoiceButton>
              </>
            )}
          />
        </S.ChoicesContainer>
      </S.QuestionContainer>
      
      {!isFirstQuestion && (
        <S.SubmitButtonContainer>
          <CommonButton
            variant="secondary"
            type="button"
            onClick={onBack}
          >
            뒤로 가기
          </CommonButton>
        </S.SubmitButtonContainer>
      )}
    </S.FormContainer>
  );
};

export default QuestionForm;