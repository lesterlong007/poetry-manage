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
}];

export default routes;

