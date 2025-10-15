import { useState } from 'react';
import * as S from './ProductInfoCard.styles';
import Divider from '@/components/divider';
import type { ProductInfoCardProps } from './ProductInfoCard.types';

const ProductInfoCard = ({ 
  title, 
  tags = [], 
  productInfo, 
  expandableFields = [],
  onExpandChange
}: ProductInfoCardProps) => {
  const [expandedInfo, setExpandedInfo] = useState<string | null>(null);

  const toggleInfo = (infoType: string) => {
    const newExpandedInfo = expandedInfo === infoType ? null : infoType;
    setExpandedInfo(newExpandedInfo);
    
    // 부모 컴포넌트에 확장 상태 전달
    if (onExpandChange) {
      onExpandChange(newExpandedInfo !== null);
    }
  };

  return (
    <S.Container>
      {tags.length > 0 && (
        <S.TagContainer>
          {tags.map((tag, index) => (
            <S.Tag key={index}>{tag}</S.Tag>
          ))}
        </S.TagContainer>
      )}
      
      <S.Title>{title}</S.Title>
      
      <Divider />
      
      <S.InfoGrid>
        {Object.entries(productInfo).map(([key, info]) => {
          const isExpandable = expandableFields.includes(key);
          
          return (
            <S.InfoItem 
              key={key} 
              onClick={isExpandable ? () => toggleInfo(key) : undefined}
              $isClickable={isExpandable}
            >
              <S.InfoHeader>
                <S.InfoLabel>{info.title}</S.InfoLabel>
                <S.InfoValue>{info.value}</S.InfoValue>
                {isExpandable && (
                  <S.ExpandIcon $isExpanded={expandedInfo === key}>
                    <img 
                      src="/src/assets/icons/DownArrowGN.svg" 
                      alt="expand"
                    />
                  </S.ExpandIcon>
                )}
              </S.InfoHeader>
              {isExpandable && expandedInfo === key && (
                <S.InfoDescription>{info.description}</S.InfoDescription>
              )}
            </S.InfoItem>
          );
        })}
      </S.InfoGrid>
    </S.Container>
  );
};

export default ProductInfoCard;