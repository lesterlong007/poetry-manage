/**
 * @Author lester
 * @Date 2021-05-09
 */

import http from "src/utils/http";

/**
 * 登录
 * @param param
 */
export function login(param: Object) {
  return http.post('/api/admin/login', param);
}

/**
 * 获取系统配置项
 */
export function querySystemConfig() {
  return http.get('/api/admin/settings/system-config');
}

/**
 * 查询题型配置列表
 */
export function queryQuestionTypes() {
  return http.get('/api/admin/question/config/list');
}

/**
 * 删除题型配置
 * @param param
 */
export function deleteQuestionType(param: Object) {
  return http.post('/api/admin/question/config/delete', param);
}

/**
 * 新增/编辑题型配置
 * @param param
 */
export function addQuestionType(param: Object) {
  return http.post('/api/admin/question/config/save', param);
}

/**
 * 查询过关红包设置列表
 */
export function queryPassRedEnvelope() {
  return http.get('/api/admin/settings/level-rp');
}

/**
 * 查询过关金币设置列表
 */
export function queryPassGold() {
  return http.get('/api/admin/settings/level-gold-coin');
}

/**
 * 查询定时红包配置列表
 */
export function queryTimedRedList() {
  return http.get('/api/admin/settings/schedule-rp');
}

/**
 * 查询红包墙配置列表
 */
export function queryRedWallList() {
  return http.get('/api/admin/settings/rp-wall');
}

/**
 * 查询每日任务奖励列表
 */
export function queryTaskList() {
  return http.get('/api/admin/settings/level-reward');
}

/**
 * 删除任务奖励
 * @param param
 */
export function deleteTask(param: Object) {
  return http.post('/api/admin/settings/delete-level-reward', param);
}

/**
 * 保存任务奖励
 * @param param
 */
export function saveTask(param: Object) {
  return http.post('/api/admin/settings/save-level-reward', param);
}

/**
 * 查询提现申请列表
 */
export function queryWithdrawList() {
  return http.get('/api/admin/transaction/withdraw-apply');
}

/**
 * 修改提现申请状态
 * @param param
 */
export function modifyWithdrawStatus(param: Object) {
  return http.post('/api/admin/transaction/do-withdraw', param);
}
