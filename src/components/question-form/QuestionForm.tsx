import { useForm, Controller } from 'react-hook-form';
import ChoiceButton from '@/components/choice-button';
import type { QuestionFormProps, FormData } from './QuestionForm.types';
import * as S from './QuestionForm.styles';

const QuestionForm = ({
  question,
  onAnswer,
  onSubmit,
  isLastQuestion = false,
}: QuestionFormProps) => {
  const { control, handleSubmit, watch, reset } = useForm<FormData>();
  const selectedOption = watch('selectedOption');

  const handleChoiceSelect = () => {
    // 답안 선택 시에는 폼 상태만 업데이트
  };

  const handleFormSubmit = (data: FormData) => {
    onAnswer(data.selectedOption);
    onSubmit();
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
                  onClick={(option) => {
                    field.onChange(option);
                    handleChoiceSelect();
                  }}
                >
                  {question.optionA}
                </ChoiceButton>
                
                <ChoiceButton
                  option="B"
                  isSelected={field.value === 'B'}
                  hasAnySelection={!!field.value}
                  onClick={(option) => {
                    field.onChange(option);
                    handleChoiceSelect();
                  }}
                >
                  {question.optionB}
                </ChoiceButton>
              </>
            )}
          />
        </S.ChoicesContainer>
      </S.QuestionContainer>
      
      <S.SubmitButtonContainer>
        <S.SubmitButton
          type="submit"
          $disabled={!selectedOption}
          disabled={!selectedOption}
        >
          {isLastQuestion ? '결과 보기' : '다음'}
        </S.SubmitButton>
      </S.SubmitButtonContainer>
    </S.FormContainer>
  );
};

export default QuestionForm;