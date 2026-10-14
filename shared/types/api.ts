// 前后端共享的接口类型
// 后端：server/src/utils/response.js 的 TS 版本
// 前端：web/src/types/api.ts 从这里 re-export

export interface ApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

export interface PaginationParams {
  page: number;
  size: number;
}

export interface PaginatedData<T> {
  list: T[];
  total: number;
  page: number;
  size: number;
}