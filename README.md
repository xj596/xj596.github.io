# Xiangfeng Tea Group Website

湘丰茶业集团（Xiangfeng Tea Group）官方网站项目。这是一个面向国际市场的多语言企业官网，展示公司介绍、产品目录、资质证书、新闻动态，并提供在线询盘功能。

## 项目简介

本项目为纯前端 + 轻量后端的茶业企业官网，主要包含以下页面：

| 页面 | 说明 |
| --- | --- |
| `index.html` | 首页（公司亮点、产品推荐、新闻等） |
| `about.html` | 关于我们（公司简介、发展历程、团队等） |
| `products.html` | 产品列表（带搜索与筛选） |
| `product-detail.html` | 产品详情页 |
| `certs.html` | 资质证书展示 |
| `news.html` | 新闻 / 展会动态 |
| `contact.html` | 联系我们 / 在线询盘 |
| `admin.html` | 静态后台管理面板（基于 GitHub API） |

技术栈：原生 HTML / CSS / JavaScript（无构建步骤），通过 `js/i18n.js` 实现前端国际化，通过 `js/product-data.js` 管理产品数据。

## 支持语言

网站支持以下 **4 种语言**（已移除阿拉伯语）：

- 中文（ZH）
- English（EN）
- Русский（RU）
- Deutsch（DE）

> 注意：项目曾支持阿拉伯语（AR），现已移除。所有阿拉伯语字体引用（`Noto Naskh Arabic`）与 CSS 变量（`--font-ar`）均已清理。

## 目录结构

```
xiangfengtea-main7.29.1/
├── index.html              # 首页
├── about.html              # 关于我们
├── products.html           # 产品列表
├── product-detail.html     # 产品详情
├── certs.html              # 资质证书
├── news.html               # 新闻动态
├── contact.html            # 联系我们
├── admin.html              # 静态后台（GitHub API）
├── inquiry-submit.php      # 询盘表单 PHP 处理脚本
├── data.json               # 公共数据
├── .nojekyll               # 禁用 GitHub Pages 的 Jekyll 处理
├── css/
│   └── styles.css          # 全局样式
├── js/
│   ├── i18n.js             # 4 语言国际化引擎
│   └── product-data.js     # 产品数据
└── admin/                  # PHP 后台（需 PHP 服务器，见下文说明）
    ├── index.php
    ├── api.php
    ├── auth.php
    ├── config.php
    └── ...
```

## 部署到 GitHub Pages

本项目为纯静态站点，可直接托管在 GitHub Pages 上，无需构建。

### 步骤

1. **创建 GitHub 仓库**
   在 GitHub 上新建一个仓库（例如 `xiangfengtea-website`）。

2. **推送代码到仓库**
   ```bash
   cd xiangfengtea-main7.29.1
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/xiangfengtea-website.git
   git push -u origin main
   ```

3. **开启 GitHub Pages**
   - 进入仓库的 **Settings** → **Pages**。
   - 在 **Source** 中选择 `Deploy from a branch`。
   - 分支选择 `main`，文件夹选择 `/ (root)`。
   - 点击 **Save**。

4. **等待部署完成**
   几分钟后，站点将可通过 `https://<你的用户名>.github.io/xiangfengtea-website/` 访问。

### `.nojekyll` 文件说明

仓库根目录下的 `.nojekyll` 文件用于禁用 GitHub Pages 默认的 Jekyll 处理。这样可以确保以下文件 / 目录不被 Jekyll 忽略：

- 以下划线 `_` 开头的文件或目录（如 `_data`）。
- 部分特殊命名的资源文件。

> 请勿删除 `.nojekyll`，否则可能导致部分资源在 GitHub Pages 上 404。

## 重要说明

### 1. PHP 文件不适用于 GitHub Pages

项目中包含以下 PHP 文件，**仅在支持 PHP 的服务器上可运行，GitHub Pages（纯静态托管）无法执行**：

- `inquiry-submit.php`：处理 `contact.html` 与 `news.html` 弹窗提交的询盘表单，负责发送邮件通知、记录日志并返回 JSON 响应。兼容阿里云虚拟主机（Apache + PHP 5.6–7.4）。
- `admin/` 目录下的所有 `.php` 文件：基于 PHP + 会话认证的传统后台管理面板。

在 GitHub Pages 部署时：
- 询盘表单提交功能将失效（前端会因无法访问 `inquiry-submit.php` 而报错或无响应）。
- 如需在 GitHub Pages 上保留询盘能力，建议改用第三方表单服务，例如：
  - [Formspree](https://formspree.io/)
  - [FormSubmit](https://formsubmit.co/)
  - 或自建 serverless 函数（如 Vercel / Netlify Functions / Cloudflare Workers）代理邮件发送。

### 2. admin.html 使用 GitHub API 进行内容管理

`admin.html` 是一个**纯前端静态后台管理面板**，不依赖 PHP，而是通过 **GitHub API（REST API）** 直接读写仓库中的 `data.json` 等数据文件来实现内容管理：

- 通过 GitHub Personal Access Token（PAT）进行鉴权。
- 调用 GitHub Contents API 读取 / 更新 JSON 数据文件。
- 修改后由 GitHub Pages 自动重新部署，实现“后台改内容 → 前台即时生效”。

使用前需要：
1. 准备一个具有该仓库 `repo` 权限的 GitHub Personal Access Token。
2. 在 `admin.html` 中按提示配置仓库 owner、repo 名称与 token（建议使用细粒度 token 并仅授予目标仓库的 Contents 读写权限）。

> 注意：`admin/` 目录下的 PHP 后台与 `admin.html` 是两套不同的管理方案。前者需要 PHP 服务器，后者可在 GitHub Pages 环境下使用。

### 3. 字体说明

站点通过 Google Fonts 加载 `Noto Sans`（权重 400/500/600/700）作为主字体，中文回退到系统字体（PingFang SC / Microsoft YaHei / Noto Sans SC）。已移除阿拉伯语字体 `Noto Naskh Arabic` 的加载。

## License

MIT
