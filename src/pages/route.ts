/**
 * @Author lester
 * @Date 2021-04-18
 */

import { RouteProps } from 'react-router-dom';
import Welcome from "src/pages/Welcome/Index";
import QuestionTypeSet from "src/pages/QuestionTypeSet/Index";
import PassRedEnvelope from "src/pages/PassRedEnvelope/Index";
import PassGoldSet from "src/pages/PassGoldSet/Index";
import TimedRedEnvelope from "src/pages/TimedRedEnvelope/Index";
import RedEnvelopeWall from "src/pages/RedEnvelopeWall/Index";
import TaskList from "src/pages/TaskList/Index";
import ClockInWithdraw from "src/pages/ClockInWithdraw/Index";
import PageDaily from "src/pages/Statistics/PageDaily/Index";
import AnswerData from "src/pages/Statistics/AnswerData/Index";
import AdData from "src/pages/Statistics/AdData/Index";
import AssistData from "src/pages/Statistics/AssistData/Index";

const routes: RouteProps[] = [{
  path: '/welcome',
  component: Welcome
}, {
  path: '/questionTypeSet',
  component: QuestionTypeSet
}, {
  path: '/passRedEnvelope',
  component: PassRedEnvelope
}, {
  path: '/passGoldSet',
  component: PassGoldSet
}, {
  path: '/timedRedEnvelope',
  component: TimedRedEnvelope
}, {
  path: '/redEnvelopeWall',
  component: RedEnvelopeWall
}, {
  path: '/taskList',
  component: TaskList
}, {
  path: '/clockInWithdraw',
  component: ClockInWithdraw
}, {
  path: '/pageDaily',
  component: PageDaily
}, {
  path: '/answerData',
  component: AnswerData
}, {
  path: '/adData',
  component: AdData
}, {
  path: '/assistData',
  component: AssistData
}];

export default routes;

