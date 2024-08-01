// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getChartById GET /api/chart/${param0} */
export async function getChartByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChartByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { chartId: param0, ...queryParams } = params;
  return request<API.ResultChartVO_>(`/api/chart/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** createChart POST /api/chart/create */
export async function createChartUsingPost(
  body: API.ChartCreateParam,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/chart/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteChart DELETE /api/chart/delete */
export async function deleteChartUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteChartUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/chart/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getPageChart POST /api/chart/list */
export async function getPageChartUsingPost(
  body: API.ChartQueryParam,
  options?: { [key: string]: any },
) {
  return request<API.MultiResultChartVO_>('/api/chart/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getMyPageChart POST /api/chart/list/my */
export async function getMyPageChartUsingPost(
  body: API.PageRequest,
  options?: { [key: string]: any },
) {
  return request<API.MultiResultChartVO_>('/api/chart/list/my', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateChart POST /api/chart/update */
export async function updateChartUsingPost(
  body: API.ChartUpdateParam,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/chart/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
