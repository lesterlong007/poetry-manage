/**
 * @Author lester
 * @Date 2021-04-21
 */

import React, { useEffect } from "react";
import { Modal, Form, InputNumber, Select, Row, Col, message } from "antd";
import { QUESTION_TYPES } from "src/utils/constant";
import { addQuestionType } from "src/apis";
import style from './style.module.less';

const { useForm, Item } = Form;
const { Option } = Select;

interface IndexProps {
  data: any;
  visible: boolean;
  onClose: () => void;
  onOk: () => void;
}

const EditQuestionType: React.FC<IndexProps> = ({ visible, onClose, onOk, data }) => {
  const [form] = useForm();
  const formLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 15 },
  };

  const onSubmit = async (values: any) => {
    console.log(values);
    const param = {
      ...values
    };
    if(data?.id) {
      param.id = data.id;
    }
    const res = await addQuestionType(param);
    if (res) {
      message.success(`${data?.id ? '编辑' : '新增'}成功`);
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
        {
          data?.id === 1 && (
            <Item label="关卡" {...formItemLayout} required>
              未设置关卡
            </Item>
          )
        }
        {
          data?.id !== 1 && (
            <Row>
              <Col span={10}>
                <Item label="关卡" name="minIndex" rules={[{ required: true, message: '请输入' }]}>
                  <InputNumber placeholder="请输入" />
                </Item>
              </Col>
              <Col span={4}>——</Col>
              <Col span={10}>
                <Item name="maxIndex" rules={[{ required: true, message: '请输入' }]}>
                  <InputNumber placeholder="请输入" />
                </Item>
              </Col>
            </Row>
          )
        }
        <Item
          {...formItemLayout}
          label="题型"
          name="questionType"
          rules={[{ required: true, message: '请选择题型' }]}
        >
          <Select placeholder="请选择">
            {
              QUESTION_TYPES.map((val: string, index: number) => <Option key={val} value={index}>{val}</Option>)
            }
          </Select>
        </Item>
      </Form>
    </Modal>
  )
};

export default EditQuestionType;
