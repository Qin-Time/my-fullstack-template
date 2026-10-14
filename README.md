# My Fullstack Project

## 技术栈
- 后端：Express + Prisma + MySQL
- 前端：Vue 3 + Vite + TypeScript + Pinia

## 快速开始

```bash
# 1. 安装所有依赖
npm run install:all

# 2. 配置环境变量
cp server/.env.example server/.env
cp web/.env.development.example web/.env.development
# 编辑 .env 填入数据库连接等

# 3. 初始化数据库
cd server && npx prisma migrate dev

# 4. 启动开发环境
cd .. && npm run dev
```

- 前端：http://localhost:5173
- 后端：http://localhost:3000

## 目录说明

- `server/` 后端服务
- `web/` 前端应用
- `shared/` 前后端共享类型