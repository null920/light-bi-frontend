// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getMyselfInfo GET /api/user/info */
export async function getMyselfInfoUsingGet(options?: { [key: string]: any }) {
  return request<API.ResultUserVO_>('/api/user/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** login POST /api/user/login */
export async function loginUsingPost(body: API.UserLoginParam, options?: { [key: string]: any }) {
  return request<API.ResultLoginVO_>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** logout POST /api/user/logout */
export async function logoutUsingPost(options?: { [key: string]: any }) {
  return request<API.ResultBoolean_>('/api/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** register POST /api/user/register */
export async function registerUsingPost(
  body: API.UserRegisterParam,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
