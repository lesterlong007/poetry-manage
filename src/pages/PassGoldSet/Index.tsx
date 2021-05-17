/**
 * @Author lester
 * @Date 2021-04-21
 */

import React,{ useEffect, useState } from "react";
import { Table, Button, Card, Modal } from "antd";
import { queryPassGold } from "src/apis";
// import { PlusOutlined } from "@ant-design/icons";
// import Edit from "./Edit";
import style from './style.module.less';

const PassGoldSet: React.FC = () => {
  const [strategyList, setStrategyList] = useState<any[]>([]);
  // const [editVisible, setEditVisible] = useState<boolean>(false);
  // const [currentData, setCurrentData] = useState<any>(null);

  const deleteQuestionType = (id: number) => {
    Modal.confirm({
      content: '确定删除？',
      async onOk() {
        console.log(id);
      }
    })
  };

  const getPassGold = async () => {
    const res: any = await queryPassGold();
    setStrategyList(res || []);
  };

  const columns: any[] = [{
    title: '当前用户资产(元)',
    dataIndex: 'id',
    render: (text: number, item: any) => item.minBalance === item.maxBalance && item.minBalance === 0 ?
      '保底策略' : `${item.minBalance}-${item.maxBalance}`
  }, {
    title: '红包最小值(金币)',
    dataIndex: 'minValue',
  }, {
    title: '红包最大值(金币)',
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

  useEffect(() => {
    getPassGold();
  }, []);

  return (
    <Card title="过关金币设置" className={style.wrap}>
     {/* <Button type="primary" onClick={() => {
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

export default PassGoldSet;
