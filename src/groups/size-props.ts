import {
  MarginBottomProperty,
  MarginLeftProperty,
  MarginProperty,
  MarginRightProperty,
  MarginTopProperty,
  PaddingBottomProperty,
  PaddingLeftProperty,
  PaddingProperty,
  PaddingRightProperty,
  PaddingTopProperty,
} from 'csstype';

import { propularizeGroup } from '../propularize';

export interface SizeGroupProps {
  m?: number | MarginProperty<number>;
  mt?: number | MarginTopProperty<number>;
  mr?: number | MarginRightProperty<number>;
  mb?: number | MarginBottomProperty<number>;
  ml?: number | MarginLeftProperty<number>;
  p?: number | PaddingProperty<number>;
  pt?: number | PaddingTopProperty<number>;
  pr?: number | PaddingRightProperty<number>;
  pb?: number | PaddingBottomProperty<number>;
  pl?: number | PaddingLeftProperty<number>;
}

const marginSizeProps = [
  {
    prop: 'm',
    property: 'margin',
  },
  {
    prop: 'mt',
    property: 'margin-top',
  },
  {
    prop: 'mr',
    property: 'margin-right',
  },
  {
    prop: 'mb',
    property: 'margin-bottom',
  },
  {
    prop: 'ml',
    property: 'margin-left',
  }
];

const paddingSizeProps = [
  {
    prop: 'p',
    property: 'padding',
  },
  {
    prop: 'pt',
    property: 'padding-top',
  },
  {
    prop: 'pr',
    property: 'padding-right',
  },
  {
    prop: 'pb',
    property: 'padding-bottom',
  },
  {
    prop: 'pl',
    property: 'padding-left',
  }
];

const sizeProps = [...marginSizeProps, ...paddingSizeProps].map(props => ({
  ...props,
  transform: (value: string) => {
    if (typeof value === 'string') return value;
    return `calc(var(--space-scale) * ${value})`;
  },
}));

export default propularizeGroup(sizeProps);
