import * as S from './RecommendationCard.styles';
import type { RecommendationCardProps } from './RecommendationCard.types';

const RecommendationCard = ({ image, alt, title, highlightText }: RecommendationCardProps) => {
  return (
    <S.Card>
      <S.ImageContainer>
        <img src={image} alt={alt} />
      </S.ImageContainer>
      <S.Content>
        <S.Title>
          {title.split(highlightText).map((part, index, array) => (
            index < array.length - 1 ? (
              <>
                {part}
                <S.Highlight>{highlightText}</S.Highlight>
              </>
            ) : (
              part
            )
          ))}
        </S.Title>
      </S.Content>
    </S.Card>
  );
};

export default RecommendationCard;