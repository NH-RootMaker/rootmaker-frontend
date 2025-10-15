import type { ProductInfo } from '@/constants/product-info';

export interface ProductInfoCardProps {
  title: string;
  tags?: string[];
  productInfo: ProductInfo;
  expandableFields?: string[];
  onExpandChange?: (isExpanded: boolean) => void;
}