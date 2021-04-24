/**
 * @Author lester
 * @Date 2021-04-21
 */

import React, { useEffect } from "react";
import { Modal, Form, InputNumber, Row, Col } from "antd";
import style from './style.module.less';

const { useForm, Item } = Form;

interface IndexProps {
  strategyType: number;
  data: any;
  visible: boolean;
  onClose: () => void;
}

const Eidt: React.FC<IndexProps> = ({ visible, strategyType, onClose, data }) => {
  const [form] = useForm();
  const formLayout = {
    labelCol: { span: 16 },
    wrapperCol: { span: 8 },
  };

  const formItemLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 15 },
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const getStrategyTypeName = () => {
    return strategyType === 1 ? '定时红包区间(元)' : '定时金币区间';
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
      width={700}
      title={data?.id ? '编辑' : '新增'}
      className={style.wrap}
      visible={visible}
      maskClosable={false}
      onCancel={onClose}
      onOk={() => form.submit()}
    >
      <Form form={form} onFinish={onSubmit} {...formLayout}>
        {
          data?.id === 1 && (
            <Item label="当前用户资产(元)" {...formItemLayout} required>
              保底策略
            </Item>
          )
        }
        {
          data?.id !== 1 && (
            <Row>
              <Col span={11}>
                <Item label="当前用户资产(元)" name="assetsMin" rules={[{ required: true, message: '请输入' }]}>
                  <InputNumber placeholder="请输入" />
                </Item>
              </Col>
              <Col span={2} className={style.textCenter}>——</Col>
              <Col span={11}>
                <Item name="assetsMax" rules={[{ required: true, message: '请输入' }]}>
                  <InputNumber placeholder="请输入" />
                </Item>
              </Col>
            </Row>
          )
        }
        <Row>
          <Col span={11}>
            <Item label={getStrategyTypeName()} name="goldMin" rules={[{ required: true, message: '请输入' }]}>
              <InputNumber placeholder="请输入" />
            </Item>
          </Col>
          <Col span={2} className={style.textCenter}>——</Col>
          <Col span={11}>
            <Item name="goldMax" rules={[{ required: true, message: '请输入' }]}>
              <InputNumber placeholder="请输入" />
            </Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
};

export default Eidt;
