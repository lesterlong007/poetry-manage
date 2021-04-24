/**
 * @Author lester
 * @Date 2021-04-18
 */

import React, { useEffect } from "react";
import { Switch, Route, RouteProps, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Menu } from 'antd';
import { AppstoreOutlined, PieChartOutlined, ContainerOutlined, MailOutlined, BarChartOutlined } from '@ant-design/icons';
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
          <Redirect exact from="/" to="/Welcome" />
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
  const currentMenu: string = window.location.hash.slice(1);

  useEffect(() => {

  }, []);

  return (
    <div className={style.layoutWrap}>
      <div className={style.menuWrap}>
        <Menu
          defaultSelectedKeys={[currentMenu]}
          defaultOpenKeys={['envelopeSet']}
          mode="inline"
          theme="dark"
          inlineCollapsed={false}
          onClick={info => {
            const path: string = String(info.key);
            history.push(path);
          }}
        >
          <Menu.Item key="/questionTypeSet" icon={<PieChartOutlined />}>
            题型设置
          </Menu.Item>
          <SubMenu key="envelopeSet" icon={<MailOutlined />} title="奖励发放设置">
            <Menu.Item key="/passRedEnvelope">过关红包设置</Menu.Item>
            <Menu.Item key="/passGoldSet">过关金币设置</Menu.Item>
            <Menu.Item key="/timedRedEnvelope">定时红包设置</Menu.Item>
            <Menu.Item key="/redEnvelopeWall">红包墙设置</Menu.Item>
          </SubMenu>
          <Menu.Item key="/taskList" icon={<ContainerOutlined />}>
            任务设置
          </Menu.Item>
          <Menu.Item key="/clockInWithdraw" icon={<AppstoreOutlined />}>
            打卡提现申请
          </Menu.Item>
          <SubMenu key="statistics" icon={<BarChartOutlined />} title="数据统计">
            <Menu.Item key="/pageDaily">页面日活及留存</Menu.Item>
            <Menu.Item key="/answerData">答题数据</Menu.Item>
            <Menu.Item key="/adData">广告数据</Menu.Item>
            <Menu.Item key="/assistData">辅助观察数据</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <div className={style.contentWrap}>
        <Routes />
      </div>
    </div>
  )
};

export default withRouter(Layout);
