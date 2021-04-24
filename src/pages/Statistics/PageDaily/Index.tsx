/**
 * @Author lester
 * @Date 2021-04-24
 */

import React,{ useEffect, useState } from "react";
import { Card, Table } from "antd";
import moment from "moment";

const Index: React.FC = () => {
  const [dailyRetentionList, setDailyRetentionList] = useState<any[]>([]);

  const columns: any[] = [{
    title: '日期',
    dataIndex: 'date',
    render: (text: number) => moment(text).format('YYYY-MM-DD')
  }, {
    title: '页面',
    dataIndex: 'page',
  }, {
    title: '活跃人数',
    dataIndex: 'activeNumber',
  }, {
    title: '1日留存',
    dataIndex: 'retention1',
  }, {
    title: '2日留存',
    dataIndex: 'retention2',
  }, {
    title: '3日留存',
    dataIndex: 'retention3',
  }, {
    title: '5日留存',
    dataIndex: 'retention5',
  }];

  useEffect(() => {
    setDailyRetentionList([{
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
    <Card title="页面日活及留存">
      <Table
        columns={columns}
        dataSource={dailyRetentionList}
        rowKey="id"
        pagination={false}
      />
    </Card>
  )
};

export default Index;
