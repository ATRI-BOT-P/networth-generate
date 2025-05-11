// 物品数据接口
export interface ItemData {
    name: string;
    value: string;
    rarity?: string;
    icon?: string;
    stars?: number;
    isUpgraded?: boolean;
}

// 分类数据接口
export interface CategoryData {
    title: string;
    titleColor?: string;
    value?: string;
    items: ItemData[];
}

// 用户数据接口
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

// 图表选项接口
export interface ChartOptions {
    animation: boolean;
    backgroundColor: string;
    textStyle: {
        color: string;
        fontFamily: string;
        fontSize: number;
    };
    title: {
        text: string;
        left: string;
        top: number;
        textStyle: {
            fontSize: number;
            fontWeight: string;
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

// 应用数据接口
export interface AppData {
    userData: UserData;
    itemCategories: CategoryData[];
    customMap: Record<number, string>;
    chartOptions: ChartOptions;
}