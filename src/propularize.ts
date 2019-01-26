export interface Propularize {
  prop: string;
  property: string;
  path?: string;
  transform?: (value: string, path?: string | number) => string;
}

const propularize = ({
  path,
  prop,
  property,
  transform = (value, path) => `var(--${path}-${value}, ${value})`,
}: Propularize) => (props: any) => {
  return props[prop] && `${property}:` + transform(props[prop], path) + ';';
};

const propularizeGroup = (values: Propularize[]) => {
  return values.map(prop => propularize(prop));
};

export { propularizeGroup };
export default propularize;
