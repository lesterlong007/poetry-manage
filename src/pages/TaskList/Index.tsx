/**
 * @Author lester
 * @Date 2021-04-21
 */

import React,{ useEffect, useState } from "react";
import { Table, Button, Card, Modal, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { queryTaskList, deleteTask } from "src/apis";
import Edit from "./Edit";
import style from './style.module.less';

const TaskList: React.FC = () => {
  const [taskList, setTaskList] = useState<any[]>([]);
  const [editVisible, setEditVisible] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<any>(null);
  const [taskIndex, setTaskIndex] = useState<number>(1);

  const getTaskList = async () => {
    const res: any = await queryTaskList();
    setTaskList(res || []);
  };

  const delTask = (id: number) => {
    Modal.confirm({
      content: '确定删除？',
      async onOk() {
        const res: any = await deleteTask({ id });
        if (res) {
          message.success('删除成功！');
          getTaskList();
        }
      }
    })
  };

  const columns: any[] = [{
    title: '任务序号',
    render: (text: string, item: any, index: number) => index + 1
  }, {
    title: '每日通关数量',
    dataIndex: 'levelQuantity',
  }, {
    title: '奖励金币数量',
    dataIndex: 'rewardQuantity',
  }, {
    title: '操作',
    dataIndex: 'id',
    render: (text: number, item: any, index: number) => (
      <>
        <Button type="link" onClick={() => {
          setEditVisible(true);
          setCurrentData(item);
          setTaskIndex(index + 1);
        }}>编辑</Button>
        {
          text !== 1 && <Button type="link" onClick={() => delTask(text)}>删除</Button>
        }
      </>
    )
  }];

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <Card title="任务设置" className={style.wrap}>
      <Button type="primary" onClick={() => {
        setEditVisible(true);
        setCurrentData(null);
      }}><PlusOutlined />新增</Button>
      <Table
        className={style.tableWrap}
        columns={columns}
        dataSource={taskList}
        rowKey="id"
        pagination={false}
      />
      <Edit
        taskIndex={taskIndex}
        data={currentData}
        visible={editVisible}
        onClose={() => setEditVisible(false)}
        onOk={() => getTaskList()}
      />
    </Card>
  )
};

export default TaskList;
