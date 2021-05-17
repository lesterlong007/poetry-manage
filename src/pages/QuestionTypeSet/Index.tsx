/**
 * @Author lester
 * @Date 2021-04-18
 */

import React,{ useEffect, useState } from "react";
import { Table, Button, Card, Modal, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { QUESTION_TYPES } from "src/utils/constant";
import { queryQuestionTypes, deleteQuestionType } from "src/apis";
import EditQuestionType from "./EditQuestionType";
import style from './style.module.less';

const QuestionTypeSet: React.FC = () => {
  const [questionList, setQuestionList] = useState<any[]>([]);
  const [editVisible, setEditVisible] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<any>(null);

  const getQuestionTypes = async () => {
    const res: any = await queryQuestionTypes();
    setQuestionList(res || []);
  };

  const delQuestionType = (id: number) => {
    Modal.confirm({
      content: '确定删除？',
      async onOk() {
        const res: any = deleteQuestionType({ id });
        if (res) {
          message.success('删除成功！');
          getQuestionTypes();
        }
      }
    })
  };

  const columns: any[] = [{
    title: '关卡对象',
    render: (text: string, item: any) => (item.minIndex === 0 && item.maxIndex === 0 ?
      '未设置关卡' : `${item.minIndex}-${item.maxIndex}` )
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
          text !== 1 && <Button type="link" onClick={() => delQuestionType(text)}>删除</Button>
        }
      </>
    )
  }];

  useEffect(() => {
    getQuestionTypes();
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
        onClose={() => setEditVisible(false)}
        onOk={() => getQuestionTypes()}
      />
    </Card>
  )
};

export default QuestionTypeSet;
