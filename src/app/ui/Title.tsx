import React from 'react';

import { createClsModuleScope } from '@/shared/lib/classnames';
import * as style from './Title.module.scss';

const cls = createClsModuleScope(style);

type Props = {
  children: string;
};

const Title = ({ children }: Props) => {
  return (
    <div className={cls('title')}>
      <div className={cls('title-decoration')} />
      <div>{children}</div>
    </div>
  );
};

export default Title;
