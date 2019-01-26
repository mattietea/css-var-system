interface PropularizeProps {
  name: string;
  property: string;
  themePath: string;
  transform?: (themePath: string, propValue: string | number) => string;
}

const defaultTransfrom: PropularizeProps['transform'] = (
  themePath,
  propValue,
) => {
  return `var(--${themePath}-${propValue}, ${propValue})`;
};

const propularize = ({
  name,
  property,
  themePath,
  transform = defaultTransfrom,
}: PropularizeProps) => (props: any) => {
  return `${property}: ${transform(themePath, props[name])};`;
};

const bg = propularize({
  name: 'bg',
  property: 'background-color',
  themePath: 'color',
});

const fontColor = propularize({
  name: 'fontColor',
  property: 'color',
  themePath: 'color',
});

const fontFamily = propularize({
  name: 'fontFamily',
  property: 'font-family',
  themePath: 'font-family',
});

const ml = propularize({
  name: 'ml',
  property: 'margin-left',
  themePath: 'space-scale',
  transform: (themePath, propValue) => {
    if (typeof propValue === 'string') return propValue;
    return `calc(var(--space-scale) * ${propValue})`;
  },
});

const mr = propularize({
  name: 'ml',
  property: 'margin-right',
  themePath: 'space-scale',
  transform: (themePath, propValue) => {
    if (typeof propValue === 'string') return propValue;
    return `calc(var(--space-scale) * ${propValue})`;
  },
});

const mt = propularize({
  name: 'mt',
  property: 'margin-top',
  themePath: 'space-scale',
  transform: (themePath, propValue) => {
    if (typeof propValue === 'string') return propValue;
    return `calc(var(--space-scale) * ${propValue})`;
  },
});

export { bg, fontColor, fontFamily, ml, mr, mt };
export default propularize;
