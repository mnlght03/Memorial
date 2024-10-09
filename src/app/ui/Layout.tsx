import React from 'react';

import { createClsModuleScope } from '@/shared/lib/classnames';
import * as style from './Layout.module.scss';

const cls = createClsModuleScope(style);

const Layout = ({ children }: any) => {
  return (
    <div className={cls('layout')}>
      <div className={cls('layout-container')}>
        <div className={cls('layout-decoration-horizontal')} />
        <div className={cls('layout-decoration-vertical')} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
