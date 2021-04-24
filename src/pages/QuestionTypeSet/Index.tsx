/**
 * @Author lester
 * @Date 2021-04-18
 */

import React,{ useEffect, useState } from "react";
import { Table, Button, Card, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { QUESTION_TYPES } from "src/utils/constant";
import EditQuestionType from "./EditQuestionType";
import style from './style.module.less';

const QuestionTypeSet: React.FC = () => {
  const [questionList, setQuestionList] = useState<any[]>([]);
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
    title: '关卡对象',
    render: (text: string, item: any) => (item.checkpointStart === 0 && item.checkpointEnd === 0 ?
      '未设置关卡' : `${item.checkpointStart}-${item.checkpointEnd}` )
  }, {
    title: '题型',
    dataIndex: 'questionType',
    render: (text: number) => QUESTION_TYPES[text]
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
    setQuestionList([{
      id: 1,
      checkpointStart: 0,
      checkpointEnd: 0,
      questionType: 0,
    }, {
      id: 2,
      checkpointStart: 1,
      checkpointEnd: 5,
      questionType: 1,
    }])
  }, []);

  return (
    <Card title="题型设置" className={style.wrap}>
      <Button type="primary" onClick={() => {
        setEditVisible(true);
        setCurrentData(null);
      }}><PlusOutlined />新增</Button>
      <Table
        className={style.tableWrap}
        columns={columns}
        dataSource={questionList}
        rowKey="id"
        pagination={false}
      />
      <EditQuestionType
        data={currentData}
        visible={editVisible}
        onClose={() => {
          setEditVisible(false);
        }}
      />
    </Card>
  )
};

export default QuestionTypeSet;
