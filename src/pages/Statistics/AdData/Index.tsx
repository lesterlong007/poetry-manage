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
    render: (text: number) => moment(text).format('YYYY-MM-DD')
  }, {
    title: '过关红包-广告数',
    dataIndex: 'page',
  }, {
    title: '过关红包-广告完播数',
    dataIndex: 'activeNumber',
  }, {
    title: '金币红包-广告数',
    dataIndex: 'retention1',
  }, {
    title: '金币红包-广告完播数',
    dataIndex: 'retention2',
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
    <Card title="广告数据">
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
