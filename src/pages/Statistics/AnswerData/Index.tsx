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
    title: '答题数',
    dataIndex: 'activeNumber',
  }, {
    title: '答题正确数',
    dataIndex: 'retention1',
  }, {
    title: '答题正确率',
    dataIndex: 'retention2',
  }, {
    title: '答题人数',
    dataIndex: 'retention3',
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
    <Card title="答题数据">
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
