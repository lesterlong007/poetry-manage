/**
 * @Author lester
 * @Date 2021-04-24
 */

import React,{ useEffect, useState } from "react";
import { Card, Table } from "antd";
import moment from "moment";

const Index: React.FC = () => {
  const [dataList, setDataList] = useState<any[]>([]);

  const columns: any[] = [{
    title: '日期',
    dataIndex: 'date',
    width: 120,
    render: (text: number) => moment(text).format('YYYY-MM-DD')
  }, {
    title: '“领取”按钮点击UV',
    dataIndex: 'page',
  }, {
    title: '“领取”按钮点击PV',
    dataIndex: 'activeNumber',
  }, {
    title: '“兑换现金”按钮点击UV',
    dataIndex: 'retention1',
  }, {
    title: '“兑换现金”按钮点击PV',
    dataIndex: 'retention2',
  }, {
    title: '“打卡提现”按钮点击UV',
    dataIndex: 'retention3',
  }, {
    title: '“打卡提现”按钮点击PV',
    dataIndex: 'retention4',
  }, {
    title: '“常规提现”按钮点击UV',
    dataIndex: 'retention5',
  }, {
    title: '“常规提现”按钮点击PV',
    dataIndex: 'retention6',
  }, {
    title: '“天降红包”弹窗UV',
    dataIndex: 'retention7',
  }, {
    title: '“天降红包”弹窗PV',
    dataIndex: 'retention8',
  }];

  useEffect(() => {
    setDataList([{
      id: 1,
      date: 1619275809865,
      page: '答题',
      activeNumber: 200,
      retention1: 50,
    }, {
      id: 2,
      date: 1619275809865,
      page: '任务',
      activeNumber: 100,
      retention1: 30,
    }, {
      id: 3,
      date: 1619275809865,
      page: '提现',
      activeNumber: 500,
      retention1: 20,
    }])
  }, []);

  return (
    <Card title="辅助观察数据">
      <Table
        columns={columns}
        dataSource={dataList}
        rowKey="id"
        pagination={false}
      />
    </Card>
  )
};

export default Index;
