import {
  ColorProperty,
  FontFamilyProperty,
  FontSizeProperty,
  FontStyleProperty,
  FontWeightProperty,
} from 'csstype';

import { propularizeGroup } from '../propularize';

export interface FontGroupProps {
  fontColor?: ColorProperty;
  fontFamily?: FontFamilyProperty;
  fontSize?: FontSizeProperty<string>;
  fontWeight?: FontWeightProperty;
  fontStyle?: FontStyleProperty;
}

const fontProps = [
  {
    prop: 'fontColor',
    property: 'color',
    path: 'color',
  },
  {
    prop: 'fontFamily',
    property: 'font-family',
    path: 'font-family',
  },
  {
    prop: 'fontSize',
    property: 'font-size',
    path: 'font-size',
  },
  {
    prop: 'fontWeight',
    property: 'font-weight',
  },
  {
    prop: 'fontStyle',
    property: 'font-style',
  },
];

export default propularizeGroup(fontProps);
