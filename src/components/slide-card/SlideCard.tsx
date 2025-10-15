import * as S from './SlideCard.styles';
import type { SlideCardProps } from './SlideCard.types';

const SlideCard = ({
  chip,
  subtitle,
  description,
  color,
  position,
  index,
  image,
  onClick
}: SlideCardProps) => {
  return (
    <S.Card
      position={position}
      index={index}
      $color={color}
      onClick={onClick}
    >
      <S.Chip position={position} $color={color}>
        {chip}
      </S.Chip>
      
      <S.Subtitle position={position}>{subtitle}</S.Subtitle>
      
      <S.Description position={position}>
        {description}
      </S.Description>

      {image && (
        <S.CardImage position={position} src={image} alt={subtitle} />
      )}
    </S.Card>
  );
};

export default SlideCard;