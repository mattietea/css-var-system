import {
  ColorProperty,
  FontFamilyProperty,
  FontSizeProperty,
  FontStyleProperty,
  FontWeightProperty,
} from 'csstype';

import { propularizeGroup } from '../propularize';

export interface BgGroupProps {
  bg?: ColorProperty;
}

const bgProps = [
  {
    prop: 'bg',
    property: 'background-color',
    path: 'color',
  },
];

export default propularizeGroup(bgProps);
