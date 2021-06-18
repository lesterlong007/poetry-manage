/**
 * @Author lester
 * @Date 2021-04-21
 */

import React,{ useEffect, useState } from "react";
import { Table, Button, Card, Modal, message } from "antd";
import { queryWithdrawList, modifyWithdrawStatus } from "src/apis";
import moment from "moment";
import style from './style.module.less';

const ClockInWithdraw: React.FC = () => {
  const [applyList, setApplyList] = useState<any[]>([]);

  const getWithdrawList = async () => {
    const res: any = await queryWithdrawList();
    setApplyList(res || []);
  };

  const modifyStatus = (item: any) => {
    const status = item.withdrawStatus === 1 ? 2 : 1;
    const tipsText = item.withdrawStatus === 1 ? '已' : '待';
    Modal.confirm({
      content: `确定修改状态为${tipsText}提现？`,
      async onOk() {
        const res: any = await modifyWithdrawStatus({ withdrawId: item.id, status });
        if (res) {
          message.success('修改成功！');
          getWithdrawList();
        }
      }
    })
  };

  const columns: any[] = [{
    title: '用户昵称',
    dataIndex: 'nickName'
  }, {
    title: '用户openId',
    dataIndex: 'openId',
  }, {
    title: '申请提现时间',
    dataIndex: 'applyTime',
    render: (text: number) => moment(text).format('YYYY-MM-DD HH:mm:ss')
  }, {
    title: '提现金额(元)',
    dataIndex: 'withdrawAmount'
  }, {
    title: '收款二维码',
    dataIndex: 'colletMoneyUrl',
    render: (text: string) => <img className={style.qrCodeImg} src={text} onClick={() => window.open(text)} alt=""/>
  }, {
    title: '提现状态',
    dataIndex: 'withdrawStatus',
    render: (text: number) => `${text === 1 ? '待' : '已'}提现`
  }, {
    title: '操作',
    dataIndex: 'id',
    render: (text: number, item: any) => (
      <>
        <Button type="link" onClick={() => modifyStatus(item)}>设置为{item.withdrawStatus === 1 ? '已' : '待'}提现</Button>
      </>
    )
  }];

  useEffect(() => {
    getWithdrawList();
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
