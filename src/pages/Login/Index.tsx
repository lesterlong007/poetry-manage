/**
 * @Author lester
 * @Date 2021-04-18
 */

import React from "react";
import { Form, Input, Button } from "antd";
import { RouteComponentProps } from "react-router-dom";
import { getQueryParam } from 'lester-tools';
import { login } from 'src/apis';
import style from './style.module.less';

const { useForm, Item } = Form;
const { Password } = Input;

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [form] = useForm();
  const formLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const onSubmit = async (values: any) => {
    const res: any = await login(values);
    if (res) {
      Object.entries(res).forEach(([key, val]) => {
        window.sessionStorage.setItem(key, String(val));
      });
      const redirectUrl: string = getQueryParam('redirectUrl');
      if (redirectUrl) {
        window.location.replace(redirectUrl);
      } else {
        history.push('/');
      }
    }
  };


  return (
    <div className={style.wrap}>
      <section className={style.loginWrap}>
        <Form className={style.loginForm} form={form} onFinish={onSubmit} {...formLayout}>
          <Item label="账号" name="userName" rules={[{ required: true, message: '请输入账号' }]}>
            <Input placeholder="请输入账号" allowClear />
          </Item>
          <Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Password placeholder="请输入密码" allowClear />
          </Item>
          <div className={style.btnWrap}>
            <Button className={style.loginBtn} type="primary" htmlType="submit">提交</Button>
          </div>
        </Form>
      </section>
    </div>
  )
};

export default Login;
