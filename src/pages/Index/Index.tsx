/**
 * @Author lester
 * @Date 2021-04-18
 */

/**
 * @Author lester
 * @Date 2021-04-18
 */

import React, { useEffect } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { Button } from 'antd';
import style from "./style.module.less";

const Index: React.FC<RouteComponentProps> = ({ history }) => {

  useEffect(() => {

  }, []);

  return (
    <div className={style.wrap}>
      Lester
      <Button type="primary" onClick={() => history.push('/questionTypeSet')}>GOGO</Button>
    </div>
  )
};

export default Index;
