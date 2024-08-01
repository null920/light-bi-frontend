// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getPostById GET /api/post/${param0} */
export async function getPostByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPostByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { postId: param0, ...queryParams } = params;
  return request<API.ResultPostVO_>(`/api/post/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** createPost POST /api/post/create */
export async function createPostUsingPost(
  body: API.PostCreateParam,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/post/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deletePost DELETE /api/post/delete */
export async function deletePostUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePostUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/post/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getPagePostByUserId POST /api/post/list/by_user_id */
export async function getPagePostByUserIdUsingPost(
  body: API.PostQueryParam,
  options?: { [key: string]: any },
) {
  return request<API.MultiResultPostVO_>('/api/post/list/by_user_id', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getMyPagePost POST /api/post/list/my */
export async function getMyPagePostUsingPost(
  body: API.PageRequest,
  options?: { [key: string]: any },
) {
  return request<API.MultiResultPostVO_>('/api/post/list/my', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updatePost POST /api/post/update */
export async function updatePostUsingPost(
  body: API.PostUpdateParam,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>('/api/post/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
