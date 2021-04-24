/**
 * @Author lester
 * @Date 2021-04-21
 */

import React,{ useEffect, useState } from "react";
import { Table, Button, Card, Modal, Radio, InputNumber, Form, Col, Row } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// import Edit from "./Edit";
import style from './style.module.less';

// const { useForm, Item } = Form;

const TimedRedEnvelope: React.FC = () => {
  const [strategyList, setStrategyList] = useState<any[]>([]);
  // const [editVisible, setEditVisible] = useState<boolean>(false);
  // const [currentData, setCurrentData] = useState<any>(null);
  const [strategyType, setStrategyType] = useState<number>(1);

  // const [form] = useForm();

  const deleteQuestionType = (id: number) => {
    Modal.confirm({
      content: '确定删除？',
      async onOk() {
        console.log(id);
      }
    })
  };

  const getUnit = () => {
    return strategyType === 1 ? '元' : '金币';
  };

  const columns: any[] = [{
    title: `当前用户资产(元)`,
    dataIndex: 'isDefault',
    render: (text: boolean, item: any) => text ? '保底策略' : `${item.assetsMin}-${item.assetsMax}`
  }, {
    title: `红包最小值(${getUnit()})`,
    dataIndex: 'goldMin',
  }, {
    title: `红包最大值(${getUnit()})`,
    dataIndex: 'goldMax',
  }/*, {
    title: '操作',
    dataIndex: 'id',
    render: (text: number, item: any) => (
      <>
        <Button type="link" onClick={() => {
          setEditVisible(true);
          setCurrentData(item);
        }}>编辑</Button>
        {
          text !== 1 && <Button type="link" onClick={() => deleteQuestionType(text)}>删除</Button>
        }
      </>
    )
  }*/];

  const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
  };

  const onSave = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    setStrategyList([{
      id: 1,
      isDefault: true,
      assetsMin: 0,
      assetsMax: 0,
      goldMin: 2000,
      goldMax: 2500,
    }, {
      id: 2,
      assetsMin: 0.00,
      assetsMax: 9.99,
      goldMin: 10000,
      goldMax: 15000,
    }])
  }, []);

  return (
    <Card title="定时红包设置" className={style.wrap}>
      <Row>
        <Col span={3}>时间间隔(秒)：</Col>
        <Col span={4}>300</Col>
      </Row>
     {/* <Form form={form} onFinish={onSave} {...formLayout} initialValues={{ type: 1 }}>
        <Item label="时间间隔(秒)" name="time" rules={[{ required: true, message: '请输入' }]}>
          <InputNumber placeholder="请输入" />
        </Item>
        <Item
          label="定时红包类型"
          name="type"
          rules={[{ required: true, message: '请选择' }]}
          extra={
            <Button className={style.saveBtn} type="primary" htmlType="submit">保存</Button>
          }
        >
          <Radio.Group onChange={(e) => setStrategyType(e.target.value)}>
            <Radio value={1}>现金</Radio>
            <Radio value={2}>金币</Radio>
          </Radio.Group>
        </Item>
      </Form>*/}
      <Row className={style.mt15}>
        <Col span={3}>发放策略：</Col>
        <Col span={20}>
          {/*<Button type="primary" onClick={() => {
            setEditVisible(true);
            setCurrentData(null);
          }}><PlusOutlined />新增</Button>*/}
          <Table
            className={style.mt15}
            columns={columns}
            dataSource={strategyList}
            rowKey="id"
            pagination={false}
          />
        </Col>
      </Row>
     {/* <Edit
        strategyType={strategyType}
        data={currentData}
        visible={editVisible}
        onClose={() => {
          setEditVisible(false);
        }}
      />*/}
    </Card>
  )
};

export default TimedRedEnvelope;
