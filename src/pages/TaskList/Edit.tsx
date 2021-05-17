/**
 * @Author lester
 * @Date 2021-04-21
 */

import React, { useEffect } from "react";
import { Modal, Form, InputNumber, message } from "antd";
import { saveTask } from "src/apis";
import style from './style.module.less';

const { useForm, Item } = Form;

interface IndexProps {
  taskIndex: number;
  data: any;
  visible: boolean;
  onClose: () => void;
  onOk: () => void;
}

const Edit: React.FC<IndexProps> = ({ visible, taskIndex, onClose, onOk, data }) => {
  const [form] = useForm();
  const formLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onSubmit = async (values: any) => {
    console.log(values);
    const param = {
      ...values
    };
    if(data?.id) {
      param.id = data.id;
    }
    const res = await saveTask(param);
    if (res) {
      message.success('保存成功');
      onClose();
      onOk();
    }
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
        <Item label="每日通关数量" name="levelQuantity" rules={[{ required: true, message: '请输入' }]}>
          <InputNumber placeholder="请输入" />
        </Item>
        <Item label="奖励金币数量" name="rewardQuantity" rules={[{ required: true, message: '请输入' }]}>
          <InputNumber placeholder="请输入" />
        </Item>
      </Form>
    </Modal>
  )
};

export default Edit;
