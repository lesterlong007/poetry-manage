/**
 * @Author lester
 * @Date 2021-04-18
 */

import { RouteProps } from 'react-router-dom';
import Index from "src/pages/Index/Index";
import QuestionTypeSet from "src/pages/QuestionTypeSet/Index";

const routes: RouteProps[] = [{
  path: '/index',
  component: Index
}, {
  path: '/questionTypeSet',
  component: QuestionTypeSet
}];

export default routes;

