/**
 * @Author lester
 * @Date 2021-04-21
 */

import React,{ useEffect, useState } from "react";
import { Table, Button, Card, Modal } from "antd";
import moment from "moment";
import style from './style.module.less';

const ClockInWithdraw: React.FC = () => {
  const [applyList, setApplyList] = useState<any[]>([]);

  const modifyStatus = (item: any) => {
    Modal.confirm({
      content: '确定修改提现状态？',
      async onOk() {
        console.log(item.id);
      }
    })
  };

  const columns: any[] = [{
    title: '用户昵称',
    dataIndex: 'userName'
  }, {
    title: '用户openId',
    dataIndex: 'openId',
  }, {
    title: '申请提现时间',
    dataIndex: 'applyTime',
    render: (text: number) => moment(text).format('YYYY-MM-DD HH:mm:ss')
  }, {
    title: '提现金额(元)',
    dataIndex: 'count',
    render: (text: number) => (text / 100).toFixed(2)
  }, {
    title: '收款二维码',
    dataIndex: 'qrCodeImg',
    render: (text: string) => <img className={style.qrCodeImg} src={text} onClick={() => window.open(text)} alt=""/>
  }, {
    title: '提现状态',
    dataIndex: 'status',
    render: (text: number) => `${text === 0 ? '待' : '已'}提现`
  }, {
    title: '操作',
    dataIndex: 'id',
    render: (text: number, item: any) => (
      <>
        <Button type="link" onClick={() => modifyStatus(item)}>设置为{item.status === 0 ? '已' : '待'}提现</Button>
      </>
    )
  }];

  useEffect(() => {
    setApplyList([{
      id: 1,
      userName: 'lester',
      openId: '1123sadsadsad',
      applyTime: '1619022788782',
      count: 30,
      qrCodeImg: '',
      status: 1,
    }, {
      id: 2,
      userName: 'carry',
      openId: '1123sadsadsad',
      applyTime: '1619022788782',
      count: 120,
      qrCodeImg: '',
      status: 0,
    }])
  }, []);

  return (
    <Card title="打卡提现申请" className={style.wrap}>
      <Table
        className={style.tableWrap}
        columns={columns}
        dataSource={applyList}
        rowKey="id"
        pagination={false}
      />
    </Card>
  )
};

export default ClockInWithdraw;
