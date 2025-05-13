import { type Ref, ref, type UnwrapRef } from 'vue';
import type { AppData } from '../types';
import localforage from 'localforage';

const defaultData: AppData = {
    userData: {
        title: 'ATRI-BOT',
        logo: './nw/logo.png',
        version: '0.0.0',
        playerHead: './nw/logo.png',
        playerName: 'Me0wo',
        profileName: 'ATRI-BOT',
        isCosmeticEnabled: true,
        networthTotal: '123,456,789,123',
        networthShort: '123.45B',
        nonSoulBoundTotal: '123,456,789,123',
        nonSoulBoundShort: '123.45B',
        purseValue: '12.34B',
        bankValue: '123.45B',
        essenceValue: '0',
        soulflowValue: '123.45B',
        backgroundUrl: './nw/background.jpg',
    },
    itemCategories: [
        {
            title: 'Armor',
            titleColor: '#ff8900',
            value: '12.34B',
            items: [
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&bANYTHING',
                    value: '100.00M',
                    rarity: 'DIVINE',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&dANYTHING',
                    value: '100.00M',
                    rarity: 'MYTHIC',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&6ANYTHING',
                    value: '100.00M',
                    rarity: 'LEGENDARY',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&5ANYTHING',
                    value: '100.00M',
                    rarity: 'EPIC',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&9ANYTHING',
                    value: '100.00M',
                    rarity: 'RARE',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&aANYTHING',
                    value: '100.00M',
                    rarity: 'UNCOMMON',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&fANYTHING',
                    value: '100.00M',
                    rarity: 'COMMON',
                },
            ],
        },
        {
            title: 'Items',
            titleColor: '#ffd500',
            value: '12.34B',
            items: [
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&bANYTHING',
                    value: '100.00M',
                    rarity: 'DIVINE',
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&dANYTHING',
                    value: '100.00M',
                    rarity: 'MYTHIC',
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&6ANYTHING',
                    value: '100.00M',
                    rarity: 'LEGENDARY',
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&5ANYTHING',
                    value: '100.00M',
                    rarity: 'EPIC',
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&9ANYTHING',
                    value: '100.00M',
                    rarity: 'RARE',
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&aANYTHING',
                    value: '100.00M',
                    rarity: 'UNCOMMON',
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&fANYTHING',
                    value: '100.00M',
                    rarity: 'COMMON',
                },
            ],
        },
        {
            title: 'Pets',
            titleColor: '#19ff00',
            value: '12.34B',
            items: [
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&bANYTHING',
                    value: '100.00M',
                    rarity: 'DIVINE',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&dANYTHING',
                    value: '100.00M',
                    rarity: 'MYTHIC',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&6ANYTHING',
                    value: '100.00M',
                    rarity: 'LEGENDARY',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&5ANYTHING',
                    value: '100.00M',
                    rarity: 'EPIC',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&9ANYTHING',
                    value: '100.00M',
                    rarity: 'RARE',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&aANYTHING',
                    value: '100.00M',
                    rarity: 'UNCOMMON',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&fANYTHING',
                    value: '100.00M',
                    rarity: 'COMMON',
                },
            ],
        },
        {
            title: 'Accessories',
            titleColor: '#00fff7',
            value: '12.34B',
            items: [
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&bANYTHING',
                    value: '100.00M',
                    rarity: 'DIVINE',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&dANYTHING',
                    value: '100.00M',
                    rarity: 'MYTHIC',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&6ANYTHING',
                    value: '100.00M',
                    rarity: 'LEGENDARY',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&5ANYTHING',
                    value: '100.00M',
                    rarity: 'EPIC',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&9ANYTHING',
                    value: '100.00M',
                    rarity: 'RARE',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&aANYTHING',
                    value: '100.00M',
                    rarity: 'UNCOMMON',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&fANYTHING',
                    value: '100.00M',
                    rarity: 'COMMON',
                },
            ],
        },
        {
            title: 'Museum',
            titleColor: '#ff00ae',
            value: '12.34B',
            items: [
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&bANYTHING',
                    value: '100.00M',
                    rarity: 'DIVINE',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&dANYTHING',
                    value: '100.00M',
                    rarity: 'MYTHIC',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&6ANYTHING',
                    value: '100.00M',
                    rarity: 'LEGENDARY',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&5ANYTHING',
                    value: '100.00M',
                    rarity: 'EPIC',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&9ANYTHING',
                    value: '100.00M',
                    rarity: 'RARE',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&aANYTHING',
                    value: '100.00M',
                    rarity: 'UNCOMMON',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&fANYTHING',
                    value: '100.00M',
                    rarity: 'COMMON',
                },
            ],
        },
        {
            title: 'Sacks',
            titleColor: '#FFFFFF',
            value: '12.34B',
            items: [
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&bANYTHING',
                    value: '100.00M',
                    rarity: 'DIVINE',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&dANYTHING',
                    value: '100.00M',
                    rarity: 'MYTHIC',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&6ANYTHING',
                    value: '100.00M',
                    rarity: 'LEGENDARY',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&5ANYTHING',
                    value: '100.00M',
                    rarity: 'EPIC',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&9ANYTHING',
                    value: '100.00M',
                    rarity: 'RARE',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&aANYTHING',
                    value: '100.00M',
                    rarity: 'UNCOMMON',
                    isUpgraded: true,
                },
                {
                    icon: 'http://127.0.0.1:8006/PET_SKIN_BLACK_CAT_CATGIRL',
                    name: '&fANYTHING',
                    value: '100.00M',
                    rarity: 'COMMON',
                },
            ],
        },
    ],

    customMap: {
        10000: '10k',
        20000: '20k',
        30000: '30k',
        40000: '40k',
        50000: '50k',
        60000: '60k',
        70000: '70k',
        80000: '80k',
        90000: '90k',
        100000: '100k',
        110000: '110k',
        120000: '120k',
        130000: '130k',
        140000: '140k',
        150000: '150k',
        160000: '160k',
    },
    chartOptions: {
        animation: false,
        backgroundColor: 'transparent',
        textStyle: {
            fontSize: 14,
            fontFamily: '"JetBrains Mono", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,0.85)',
        },
        title: {
            text: 'Networth History',
            left: 'center',
            top: 20,
            textStyle: {
                fontSize: 18,
                fontFamily: '"JetBrains Mono", monospace',
                fontOpticalSizing: 'auto',
                fontWeight: '800',
                fontStyle: 'normal',
                color: 'rgba(255,255,255,0.95)',
            },
        },
        tooltip: { show: false },
        legend: { show: false },
        xAxis: {
            type: 'category',
            data: [
                '1.1 01:01',
                '1.2 01:01',
                '1.3 01:01',
                '1.4 01:01',
                '1.5 01:01',
                '1.6 01:01',
                '1.7 01:01',
                '1.8 01:01',
                '1.9 01:01',
                '1.10 01:01',
                '1.11 01:01',
                '1.12 01:01',
                '1.13 01:01',
                '1.14 01:01',
                '1.15 01:01',
                '1.16 01:01',
                '1.17 01:01',
                '1.18 01:01',
                '1.19 01:01',
                '1.20 01:01',
            ],
            axisLine: {
                lineStyle: { color: 'rgba(255,255,255,0.5)' },
            },
            axisLabel: { color: 'rgba(255,255,255,0.8)' },
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: { color: 'rgba(255,255,255,0.5)' },
            },
            axisLabel: {
                color: 'rgba(255,255,255,0.8)',
                formatter: function (value: number) {
                    return data.value.customMap[value] || value / 1000 + 'k';
                },
            },
            splitLine: {
                lineStyle: { color: 'rgba(255,255,255,0.1)' },
            },
        },
        series: [
            {
                name: 'NW',
                type: 'line',
                data: [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000, 140000, 150000, 160000, 100000, 50000],
                smooth: true,
                symbol: 'none',
                lineStyle: {
                    width: 3,
                    color: 'rgba(0,229,255,0.8)',
                },
                itemStyle: { color: 'rgba(0,229,255,0.8)' },
                opacity: 0.85,
                emphasis: { disabled: true },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(0,229,255,0.4)' },
                            { offset: 1, color: 'rgba(0,229,255,0)' },
                        ],
                    },
                },
            },
        ],
    },
};
let data = ref<AppData>(defaultData);

function getNetworthData(): Ref<UnwrapRef<AppData>, UnwrapRef<AppData> | AppData> {
    return data;
}

function setNetworthData(newData: AppData): void {
    data.value = newData;
}

export { getNetworthData, setNetworthData };

export async function loadData() {
    const saved = (await localforage.getItem('nw')) as AppData | null;
    if (saved) setNetworthData(saved);
}

export async function syncData() {
    const saved = (await localforage.getItem('nw')) as AppData | null;
    if (saved) setNetworthData(saved);
}

export function onStorage(e: StorageEvent) {
    if (e.key === 'nw' || e.key === null) syncData();
}
