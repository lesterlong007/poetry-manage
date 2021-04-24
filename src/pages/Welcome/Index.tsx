/**
 * @Author lester
 * @Date 2021-04-21
 */

import React from "react";
import style from './style.module.less';

const Welcome: React.FC = () => {

  return (
    <div className={style.wrap}>
      欢迎来到深圳市通由科技股份有限公司后台管理！
    </div>
  )
};

export default Welcome;
