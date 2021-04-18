/**
 * @Author lester
 * @Date 2021-04-18
 */

import React, { useEffect } from "react";
import { Switch, Route, RouteProps, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Menu } from 'antd';
import { AppstoreOutlined, PieChartOutlined, ContainerOutlined, MailOutlined } from '@ant-design/icons';
import routes from 'src/pages/route';
import style from './style.module.less';
import './style.less';

const { SubMenu } = Menu;

const Routes = withRouter(({ location }) => {

  return (
    <TransitionGroup className="transition-wrap">
      <CSSTransition
        timeout={300}
        classNames={'fade'}
        key={location.pathname}
      >
        <Switch location={location}>
          <Redirect exact from="/" to="/index" />
          {
            routes.map((item: RouteProps) => (
              <Route key={`rt${item.path}`} {...item} />
            ))
          }
          <Redirect to="/error/404" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
});

const Layout: React.FC<RouteComponentProps> = ({ history }) => {

  useEffect(() => {

  }, []);

  return (
    <div className={style.layoutWrap}>
      <div className={style.menuWrap}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={false}
          onClick={info => {
            console.log(info)
            // @ts-ignore
            history.push(info.key);
          }}
        >
          <Menu.Item key="/questionTypeSet" icon={<PieChartOutlined />}>
            题型设置
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="奖励发放设置">
            <Menu.Item key="/index">过关红包设置</Menu.Item>
            <Menu.Item key="3">过关金币设置</Menu.Item>
            <Menu.Item key="4">定时红包设置</Menu.Item>
            <Menu.Item key="5">红包墙设置</Menu.Item>
          </SubMenu>
          <Menu.Item key="6" icon={<ContainerOutlined />}>
            任务设置
          </Menu.Item>
          <Menu.Item key="7" icon={<AppstoreOutlined />}>
            提现设置
          </Menu.Item>
        </Menu>
      </div>
      <div className={style.contentWrap}>
        <Routes />
      </div>
    </div>
  )
};

export default withRouter(Layout);
