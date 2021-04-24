/**
 * @Author lester
 * @Date 2021-04-18
 */

interface Menu{
  id: number;
  name: string;
  path: string;
}

const menuList: Menu [] = [{
  id: 1,
  name: '题型设置',
  path: '/questionTypeSet',
}];

export default menuList;
