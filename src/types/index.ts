import type { EChartsOption } from 'echarts';

export interface ItemData {
  name: string;
  value: string;
  rarity?: string;
  icon?: string;
  stars?: number;
  isUpgraded?: boolean;
}

export interface CategoryData {
  title: string;
  titleColor?: string;
  value?: string;
  items: ItemData[];
}

export interface UserData {
  title: string;
  logo: string;
  version: string;
  playerHead: string;
  playerName: string;
  profileName: string;
  isCosmeticEnabled: boolean;
  networthTotal: string;
  networthShort: string;
  soulBoundTotal: string;
  soulBoundShort: string;
  purseValue: string;
  bankValue: string;
  essenceValue: string;
  soulflowValue: string;
  backgroundUrl?: string;
}

export interface AppData {
  userData: UserData;
  itemCategories: CategoryData[];
  chartOptions: any;
}

export interface TyperProps {
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  borderRadius?: string;
  absolute?: boolean;
  centered?: boolean;
}

export interface RarityColors {
  [key: string]: string;
}

export interface RarityMap {
  [key: string]: string;
}

export interface EChartProps {
  options?: EChartsOption | EChartProps | any;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  absolute?: boolean;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  boxShadow?: string;
  zIndex?: number | string;
  border?: string;
  theme?: string;
}
