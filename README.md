# My Fullstack Template

## 技术栈
- 后端：Express + Prisma + MySQL
- 前端：Vue 3 + Vite + TypeScript + Pinia

## 快速开始

```bash
# 1. 安装所有依赖
npm run install:all

# 2. 配置环境变量
cp server/.env.example server/.env
cp web/.env.example web/.env.development

# 3. 启动开发环境（前后端同时）
npm run dev
```

- 前端：http://localhost:5173
- 后端：http://localhost:3000
- 健康检查：http://localhost:3000/health

## 目录说明

- `server/` 后端（Express）
- `web/` 前端（Vue 3 + Vite）
- `shared/` 前后端共享类型

## 加新功能的步骤

### 后端
1. `server/src/validators/` 定义参数规则
2. `server/src/services/` 写业务逻辑
3. `server/src/controllers/` 调 service
4. `server/src/routes/` 绑定路由

### 前端
1. `shared/types/` 或 `web/src/types/` 定义类型
2. `web/src/api/` 写接口调用
3. `web/src/views/` 写页面
4. `web/src/router/` 加路由

## 约定

- 后端分层：routes → controllers → services → models
- 前端按业务分文件夹：`views/user/`、`views/order/`
- 所有 API 走 `web/src/api/request.ts`
- 类型定义优先放 `shared/types/`，前端专用放 `web/src/types/`

## 升级触发点

- `views/` 超过 30 个文件 → 拆更细的业务模块
- `api/` 超过 15 个文件 → 拆到各业务子目录
- 有第二个人加入 → 引入 feature-based 结构