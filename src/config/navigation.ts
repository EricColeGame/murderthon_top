import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
};

/**
 * 导航项为空：模板残留的旧游戏内容类型（races/bosses/guides/codes/...）已全部移除，
 * 待后续内容阶段按新游戏的实际内容类型重建。
 * CONTENT_TYPES 由其派生，因此同步为空 —— 列表页/详情页路由在空集合下不会生成。
 */
export const NAVIGATION_CONFIG: readonly NavigationItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) =>
  item.path.replace(/^\//, ""),
);
