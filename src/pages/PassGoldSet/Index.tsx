/**
 * @Author lester
 * @Date 2021-04-21
 */

import React,{ useEffect, useState } from "react";
import { Table, Button, Card, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Edit from "./Edit";
import style from './style.module.less';

const PassGoldSet: React.FC = () => {
  const [strategyList, setStrategyList] = useState<any[]>([]);
  const [editVisible, setEditVisible] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<any>(null);

  const deleteQuestionType = (id: number) => {
    Modal.confirm({
      content: '确定删除？',
      async onOk() {
        console.log(id);
      }
    })
  };

  const columns: any[] = [{
    title: '当前用户资产(元)',
    dataIndex: 'isDefault',
    render: (text: boolean, item: any) => text ? '保底策略' : `${item.assetsMin}-${item.assetsMax}`
  }, {
    title: '红包最小值(金币)',
    dataIndex: 'goldMin',
  }, {
    title: '红包最大值(金币)',
    dataIndex: 'goldMax',
  }, {
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
  }];

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
    <Card title="过关金币设置" className={style.wrap}>
      <Button type="primary" onClick={() => {
        setEditVisible(true);
        setCurrentData(null);
      }}><PlusOutlined />新增</Button>
      <Table
        className={style.tableWrap}
        columns={columns}
        dataSource={strategyList}
        rowKey="id"
        pagination={false}
      />
      <Edit
        data={currentData}
        visible={editVisible}
        onClose={() => {
          setEditVisible(false);
        }}
      />
    </Card>
  )
};

export default PassGoldSet;
