# 个人作品集网站

体验设计师求职用个人作品集展示站，基于 React + TypeScript + Vite 构建。首页为「Works」文字动画 + Aurora 背景 + 可点击作品卡片，详情页展示单个作品。

---

## 一、项目目标与架构

- **目标**：展示个人作品，用于求职；还原 Figma 设计稿的视觉与交互。
- **技术栈**：Vite 7、React 19、TypeScript、React Router、GSAP、OGL。
- **结构概览**：
  - `src/pages/`：页面（首页 Index、详情 Detail、关于 About）
  - `src/components/`：可复用组件（SplitText、Aurora OGL、BounceCards、Nav、AuroraBackground 等）
  - 路由：`/` 首页，`/work/:id` 详情页，`/about` 关于
- **首页**：顶部导航（左侧头像、右侧 tab 切换）、OGL Aurora 背景、120px 居中「Works.」、BounceCards 卡片（悬停推开动画、点击跳转详情）。**详情页**：背景色 `#05000F`，含导航与返回链接。

---

## 二、功能说明与使用方式

### 1. 首页（`/`）

- **Works 文字动画**：参考 [reactbits Split Text](https://reactbits.dev/text-animations/split-text)，按字符依次出现，颜色为 `#5EE790`、`#5EE7C1`、`#089291` 循环。
- **Aurora 背景**：参考 [reactbits Aurora](https://reactbits.dev/backgrounds/aurora)，用 CSS 渐变 + 模糊块实现，无 OGL 依赖。
- **作品卡片**：图片填充、悬停有轻微缩放与色偏（参考 [Color Bends](https://reactbits.dev/backgrounds/color-bends)），点击跳转至对应详情页。

### 2. 详情页（`/work/:id`）

- 展示单个作品：返回链接、标题、封面图、正文区域。当前为通用布局，可根据 Figma 设计稿（node-id=3-15）进一步还原。

### 3. 组件说明

#### `SplitText`（`src/components/SplitText.tsx`）

| 参数       | 类型   | 默认值   | 说明                     |
|------------|--------|----------|--------------------------|
| `text`    | string | `"Works."` | 要按字符动画的文案       |
| `className` | string | `""`   | 外层标题的 class         |
| `delay`   | number | `50`     | 字符间动画间隔（ms）     |
| `duration`| number | `1`      | 单字符动画时长（秒）     |
| `tag`     | `'h1' \| 'h2' \| 'h3' \| 'p'` | `"h1"` | 渲染的标题标签 |

- **返回值**：无，为展示型组件。字符颜色在组件内固定为 `#5EE790`、`#5EE7C1`、`#089291` 循环。

#### `AuroraBackground`（`src/components/AuroraBackground.tsx`）

- **用途**：全屏 Aurora 风格背景，与项目主色一致。
- **参数**：无。
- **使用**：在需要背景的页面中 `<AuroraBackground />` 即可，通常放在页面最外层。

#### `WorkCard`（`src/components/WorkCard.tsx`）

| 参数  | 类型           | 说明 |
|-------|----------------|------|
| `item` | `WorkCardItem` | 见下 |

`WorkCardItem` 类型：

| 字段    | 类型   | 说明           |
|---------|--------|----------------|
| `id`    | string | 唯一 id        |
| `title` | string | 卡片标题       |
| `image` | string | 图片 URL       |
| `href`  | string | 点击跳转路径，如 `/work/1` |

- **返回值**：渲染为可点击的 `Link`，跳转到 `href`；悬停有缩放与色偏效果。

### 4. 数据与配置

- 首页作品列表在 `src/pages/Index.tsx` 的 `WORKS` 数组中配置；当前使用 [picsum.photos](https://picsum.photos) 占位图，可替换为你自己的图片 URL 与标题、链接。
- 详情页通过路由参数 `id` 区分作品，可根据 `id` 从本地数据或接口拉取详情。

---

## 三、本地运行与构建

```bash
# 安装依赖（若尚未安装）
npm install

# 开发
npm run dev

# 构建
npm run build

# 预览构建结果
npm preview
```

- 开发时默认访问：`http://localhost:5173`
- 首页：`/`；详情页：`/work/1`、`/work/2` 等。

---

## 四、设计稿与还原说明

- **首页**：Figma [个人站构思](https://www.figma.com/design/0zRMfevxuX8x5CghkhLp43/) node-id=2-2。当前按需求实现了 Works 动画、Aurora 背景、卡片交互与跳转；若需与设计稿像素级一致，可在 Figma 中对照调整间距、字号、圆角等。
- **详情页**：同上文件 node-id=3-15。当前为通用布局；若 Figma 接口权限可用，可通过设计数据再次导出并精确还原布局与样式。

---

## 五、本次实现后的反思与可改进点

1. **Figma 数据**：当前因 Figma API 权限（如 `file_content:read`）未通过，无法自动拉取设计数据。后续可在 Figma 中配置好 token 后，用 MCP 或导出代码再对齐设计稿。
2. **图片与内容**：首页卡片和详情页目前使用占位图与示例文案。建议在 `Index.tsx` 的 `WORKS` 和详情数据源中改为真实作品标题、封面与详情内容。
3. **无障碍**：可为「返回」、卡片链接增加更明确的 `aria-label`；大图可加 `alt` 描述。
4. **性能**：若作品很多，可考虑列表分页或虚拟滚动；图片可配合懒加载或响应式 srcset。
5. **SEO**：若需被搜索引擎收录，可后续接入 SSR（如 Vite SSR）或静态导出，并为各页面设置 title/description。

以上会随项目迭代持续在本文档中更新。

---

## 版本历史

- **v1.0.0**（2026-03-03）：初始可用版本，包含首页 OGL Aurora 背景 + Works 动效 + BounceCards 卡片 + 顶部导航，以及详情页（背景色 #05000F）。
- **v1.1.0**（2026-03-03）：首页 Works 样式更新（150px、Arial、白色）、Aurora 配色改为 #3A29FF/#FF94B4/#FF3232，BounceCards 改为 5 个 1:1 黑白卡片带 8px 白描边，导航选中态样式调整，详情页布局按新设计简化。
- **v1.3.0**（2026-03-18）：详情页改为使用 `public/images/work/detail/{1..5}` 的真实图片并按数字顺序渲染；导航头像替换为 `public/images/person.png`；新增「关于我」页面拼贴与标签样式。
- **v1.4.0**（2026-03-18）：「关于我」页面图片替换为单张 `public/images/aboutme.png`，其余布局保持不变。
- **v1.5.0**（2026-03-18）：「关于我」主图去除描边/阴影等样式，取消裁切，改为完整展示（contain）。
- **v1.4.0**（2026-03-18）：「关于我」页面图片替换为单张 ，其余布局保持不变。
