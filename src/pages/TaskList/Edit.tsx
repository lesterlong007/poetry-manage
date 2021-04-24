/**
 * @Author lester
 * @Date 2021-04-21
 */

import React, { useEffect } from "react";
import { Modal, Form, InputNumber } from "antd";
import style from './style.module.less';

const { useForm, Item } = Form;

interface IndexProps {
  taskIndex: number;
  data: any;
  visible: boolean;
  onClose: () => void;
}

const Eidt: React.FC<IndexProps> = ({ visible, taskIndex, onClose, data }) => {
  const [form] = useForm();
  const formLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };


  useEffect(() => {
    if (visible) {
      form.setFieldsValue({
        ...data
      })
    } else {
      form.resetFields();
    }
  }, [visible]);

  return (
    <Modal
      title={data?.id ? '编辑' : '新增'}
      className={style.wrap}
      visible={visible}
      maskClosable={false}
      onCancel={onClose}
      onOk={() => form.submit()}
    >
      <Form form={form} onFinish={onSubmit} {...formLayout}>
        <Item label="任务序号" >
          {taskIndex}
        </Item>
        <Item label="每日通关数量" name="dayCount" rules={[{ required: true, message: '请输入' }]}>
          <InputNumber placeholder="请输入" />
        </Item>
        <Item label="奖励金币数量" name="rewardCount" rules={[{ required: true, message: '请输入' }]}>
          <InputNumber placeholder="请输入" />
        </Item>
      </Form>
    </Modal>
  )
};

export default Eidt;
