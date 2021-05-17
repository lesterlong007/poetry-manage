/**
 * @Author lester
 * @Date 2021-04-21
 */

import React,{ useEffect, useState } from "react";
import {Table, Button, Card, Modal, InputNumber, Form, Col, Row} from "antd";
import { queryRedWallList } from "src/apis";
// import { PlusOutlined } from "@ant-design/icons";
// import Edit from "./Edit";
import style from './style.module.less';

// const { useForm, Item } = Form;

const RedEnvelopeWall: React.FC = () => {
  const [strategyList, setStrategyList] = useState<any[]>([]);
  // const [editVisible, setEditVisible] = useState<boolean>(false);
  // const [currentData, setCurrentData] = useState<any>(null);

  // const [form] = useForm();

  const deleteQuestionType = (id: number) => {
    Modal.confirm({
      content: '确定删除？',
      async onOk() {
        console.log(id);
      }
    })
  };

  const getRedWallList = async () => {
    const res: any = await queryRedWallList();
    setStrategyList(res || []);
  };

  const columns: any[] = [{
    title: `当前用户资产(元)`,
    dataIndex: 'id',
    render: (text: number, item: any) => item.minBalance === item.maxBalance && item.minBalance === 0 ?
      '保底策略' : `${item.minBalance}-${item.maxBalance}`
  }, {
    title: `红包最小值(金币)`,
    dataIndex: 'minValue',
  }, {
    title: `红包最大值(金币)`,
    dataIndex: 'maxValue',
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
    getRedWallList();
  }, []);

  return (
    <Card title="红包墙设置" className={style.wrap}>
      <Row>
        <Col span={3}>时间间隔(秒)：</Col>
        <Col span={4}>300</Col>
      </Row>
     {/* <Form form={form} onFinish={onSave} {...formLayout} initialValues={{ type: 1 }}>
        <Item
          label="时间间隔(秒)"
          name="time"
          rules={[{ required: true, message: '请输入' }]}
          extra={
            <Button className={style.saveBtn} type="primary" htmlType="submit">保存</Button>
          }
        >
          <InputNumber placeholder="请输入" />
        </Item>
      </Form>*/}
      {/*<Button type="primary" onClick={() => {
        setEditVisible(true);
        setCurrentData(null);
      }}><PlusOutlined />新增</Button>*/}
      <Table
        className={style.tableWrap}
        columns={columns}
        dataSource={strategyList}
        rowKey="id"
        pagination={false}
      />
      {/*<Edit
        data={currentData}
        visible={editVisible}
        onClose={() => {
          setEditVisible(false);
        }}
      />*/}
    </Card>
  )
};

export default RedEnvelopeWall;
