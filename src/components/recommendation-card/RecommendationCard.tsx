import * as S from './RecommendationCard.styles';
import type { RecommendationCardProps } from './RecommendationCard.types';

const RecommendationCard = ({ image, alt, title, highlightText, highlightColor }: RecommendationCardProps) => {
  return (
    <S.Card>
      <S.ImageContainer>
        <img src={image} alt={alt} />
      </S.ImageContainer>
      <S.Content>
        <S.Title>
          {title.split(highlightText).map((part, index, array) => (
            <span key={index}>
              {index < array.length - 1 ? (
                <>
                  {part}
                  <S.Highlight $highlightColor={highlightColor}>{highlightText}</S.Highlight>
                </>
              ) : (
                part
              )}
            </span>
          ))}
        </S.Title>
      </S.Content>
    </S.Card>
  );
};

export default RecommendationCard;