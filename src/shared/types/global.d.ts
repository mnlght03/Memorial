declare module '*.module.scss' {
  const classNames: { [className: string]: string };
  export = classNames;
}

declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}
