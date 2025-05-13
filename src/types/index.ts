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
  nonSoulBoundTotal: string;
  nonSoulBoundShort: string;
  purseValue: string;
  bankValue: string;
  essenceValue: string;
  soulflowValue: string;
  backgroundUrl?: string;
}

export interface ChartOptions {
  animation: boolean;
  backgroundColor: string;
  textStyle: {
    fontSize: number;
    fontFamily: string;
    fontOpticalSizing: string;
    fontWeight: string;
    fontStyle: string;
    color: string;
  };
  title: {
    text: string;
    left: string;
    top: number;
    textStyle: {
      fontSize: number;
      fontFamily: string;
      fontOpticalSizing: string;
      fontWeight: string;
      fontStyle: string;
      color: string;
    };
  };
  tooltip: {
    show: boolean;
  };
  legend: {
    show: boolean;
  };
  xAxis: {
    type: string;
    data: string[];
    axisLine: {
      lineStyle: {
        color: string;
      };
    };
    axisLabel: {
      color: string;
    };
  };
  yAxis: {
    type: string;
    axisLine: {
      lineStyle: {
        color: string;
      };
    };
    axisLabel: {
      color: string;
      formatter: (value: number) => string;
    };
    splitLine: {
      lineStyle: {
        color: string;
      };
    };
  };
  series: Array<{
    name: string;
    type: string;
    data: number[];
    smooth: boolean;
    symbol: string;
    lineStyle: {
      width: number;
      color: string;
    };
    itemStyle: {
      color: string;
    };
    opacity: number;
    emphasis: {
      disabled: boolean;
    };
    areaStyle: {
      color: {
        type: string;
        x: number;
        y: number;
        x2: number;
        y2: number;
        colorStops: Array<{
          offset: number;
          color: string;
        }>;
      };
    };
  }>;
}

export interface AppData {
  userData: UserData;
  itemCategories: CategoryData[];
  customMap: Record<number, string>;
  chartOptions: ChartOptions;
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
  options: EChartsOption | ChartOptions | EChartProps | any;
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
