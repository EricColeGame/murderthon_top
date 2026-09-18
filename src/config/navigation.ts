import {
  BookOpen,
  Cog,
  Gift,
  Map,
  MessagesSquare,
  Package,
  Users,
  type LucideIcon,
} from "lucide-react";

export type NavigationItem = {
  /** 翻译键：对应 locales/<lang>.json 的 nav 命名空间条目 */
  key: string;
  /** URL 路径，必须以 / 开头。与 key 分离，二者不可混为一个字段 */
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

/**
 * 导航分类的唯一真相源。
 * 分类 slug 来自关键词聚类产物（关键词.json 的 categories），
 * 必须与 content/<locale>/ 下的文章子目录名一一对应。
 *
 * 新增分类时必须同步以下四处：
 *   1. src/locales/en.json 的 nav 对象（值为分类 key 首字母大写）
 *   2. src/locales/en.json 的顶级同名对象（overviewTitle / overviewDescription）
 *   3. src/lib/content.ts 的 GROUP_TITLES 与 GROUP_ORDER
 *   4. content/<locale>/<slug>/ 文章目录
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "codes", path: "/codes", icon: Gift, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
  { key: "maps", path: "/maps", icon: Map, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) =>
  item.path.replace(/^\//, ""),
);
