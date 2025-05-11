import { ref } from "vue";
import type { AppData } from "../types";

const defaultData: AppData = {
    userData: {
        title: "ATRI-BOT",
        logo: "./nw/logo.png",
        version: "1.0.0",
        playerHead: "./nw/logo.png",
        playerName: "ATRI-BOT",
        profileName: "ATRI-BOT",
        isCosmeticEnabled: true,
        networthTotal: "123,456,789,123",
        networthShort: "123.45B",
        nonSoulBoundTotal: "123,456,789,123",
        nonSoulBoundShort: "123.45B",
        purseValue: "12.34B",
        bankValue: "123.45B",
        essenceValue: "0",
        soulflowValue: "123.45B",
        backgroundUrl: "./nw/background.jpg"
    },
    itemCategories: [
        {
            title: "Armor",
            titleColor: "#ff8900",
            value: "12.34B",
            items: [
                {name: "&bANYTHING", value: "100.00M", rarity: "DIVINE", isUpgraded: true},
                {name: "&dANYTHING", value: "100.00M", rarity: "MYTHIC", isUpgraded: true},
                {name: "&6ANYTHING", value: "100.00M", rarity: "LEGENDARY", isUpgraded: true},
                {name: "&5ANYTHING", value: "100.00M", rarity: "EPIC", isUpgraded: true},
                {name: "&9ANYTHING", value: "100.00M", rarity: "RARE", isUpgraded: true},
                {name: "&aANYTHING", value: "100.00M", rarity: "UNCOMMON", isUpgraded: true},
                {name: "&fANYTHING", value: "100.00M", rarity: "COMMON"}
            ]
        },
        {
            title: "Items",
            titleColor: "#ffd500",
            value: "12.34B",
            items: [
                {name: "&bANYTHING", value: "100.00M", rarity: "DIVINE"},
                {name: "&dANYTHING", value: "100.00M", rarity: "MYTHIC"},
                {name: "&6ANYTHING", value: "100.00M", rarity: "LEGENDARY"},
                {name: "&5ANYTHING", value: "100.00M", rarity: "EPIC"},
                {name: "&9ANYTHING", value: "100.00M", rarity: "RARE"},
                {name: "&aANYTHING", value: "100.00M", rarity: "UNCOMMON"},
                {name: "&fANYTHING", value: "100.00M", rarity: "COMMON"}
            ]
        },
        {
            title: "Pets",
            titleColor: "#19ff00",
            value: "12.34B",
            items: [
                {name: "&bANYTHING", value: "100.00M", rarity: "DIVINE", isUpgraded: true},
                {name: "&dANYTHING", value: "100.00M", rarity: "MYTHIC", isUpgraded: true},
                {name: "&6ANYTHING", value: "100.00M", rarity: "LEGENDARY", isUpgraded: true},
                {name: "&5ANYTHING", value: "100.00M", rarity: "EPIC", isUpgraded: true},
                {name: "&9ANYTHING", value: "100.00M", rarity: "RARE", isUpgraded: true},
                {name: "&aANYTHING", value: "100.00M", rarity: "UNCOMMON", isUpgraded: true},
                {name: "&fANYTHING", value: "100.00M", rarity: "COMMON"}
            ]
        },
        {
            title: "Accessories",
            titleColor: "#00fff7",
            value: "12.34B",
            items: [
                {name: "&bANYTHING", value: "100.00M", rarity: "DIVINE", isUpgraded: true},
                {name: "&dANYTHING", value: "100.00M", rarity: "MYTHIC", isUpgraded: true},
                {name: "&6ANYTHING", value: "100.00M", rarity: "LEGENDARY", isUpgraded: true},
                {name: "&5ANYTHING", value: "100.00M", rarity: "EPIC", isUpgraded: true},
                {name: "&9ANYTHING", value: "100.00M", rarity: "RARE", isUpgraded: true},
                {name: "&aANYTHING", value: "100.00M", rarity: "UNCOMMON", isUpgraded: true},
                {name: "&fANYTHING", value: "100.00M", rarity: "COMMON"}
            ]
        },
        {
            title: "Museum",
            titleColor: "#ff00ae",
            value: "12.34B",
            items: [
                {name: "&bANYTHING", value: "100.00M", rarity: "DIVINE", isUpgraded: true},
                {name: "&dANYTHING", value: "100.00M", rarity: "MYTHIC", isUpgraded: true},
                {name: "&6ANYTHING", value: "100.00M", rarity: "LEGENDARY", isUpgraded: true},
                {name: "&5ANYTHING", value: "100.00M", rarity: "EPIC", isUpgraded: true},
                {name: "&9ANYTHING", value: "100.00M", rarity: "RARE", isUpgraded: true},
                {name: "&aANYTHING", value: "100.00M", rarity: "UNCOMMON", isUpgraded: true},
                {name: "&fANYTHING", value: "100.00M", rarity: "COMMON"}
            ]
        },
        {
            title: "Sacks",
            titleColor: "#FFFFFF",
            value: "12.34B",
            items: [
                {name: "&bANYTHING", value: "100.00M", rarity: "DIVINE", isUpgraded: true},
                {name: "&dANYTHING", value: "100.00M", rarity: "MYTHIC", isUpgraded: true},
                {name: "&6ANYTHING", value: "100.00M", rarity: "LEGENDARY", isUpgraded: true},
                {name: "&5ANYTHING", value: "100.00M", rarity: "EPIC", isUpgraded: true},
                {name: "&9ANYTHING", value: "100.00M", rarity: "RARE", isUpgraded: true},
                {name: "&aANYTHING", value: "100.00M", rarity: "UNCOMMON", isUpgraded: true},
                {name: "&fANYTHING", value: "100.00M", rarity: "COMMON"}
            ]
        }
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
        100000: '100k'
    },
    chartOptions: {
        animation: false,
        backgroundColor: 'transparent',
        textStyle: {
            color: 'rgba(255,255,255,0.85)',
            fontFamily: 'Arial',
            fontSize: 14
        },
        title: {
            text: 'Networth History',
            left: 'center',
            top: 20,
            textStyle: {
                fontSize: 18,
                fontWeight: 'bold',
                color: 'rgba(255,255,255,0.95)'
            }
        },
        tooltip: {show: false},
        legend: {show: false},
        xAxis: {
            type: 'category',
            data: ['1.1 01:01', '1.2 01:01', '1.3 01:01', '1.4 01:01', '1.5 01:01', '1.6 01:01', '1.7 01:01', '1.8 01:01', '1.9 01:01', '1.10 01:01'],
            axisLine: {
                lineStyle: {color: 'rgba(255,255,255,0.5)'}
            },
            axisLabel: {color: 'rgba(255,255,255,0.8)'}
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {color: 'rgba(255,255,255,0.5)'}
            },
            axisLabel: {
                color: 'rgba(255,255,255,0.8)',
                formatter: function (value: number) {
                    return data.value.customMap[value] || (value / 1000 + 'k');
                }
            },
            splitLine: {
                lineStyle: {color: 'rgba(255,255,255,0.1)'}
            }
        },
        series: [{
            name: 'NW',
            type: 'line',
            data: [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000],
            smooth: true,
            symbol: 'none',
            lineStyle: {
                width: 3,
                color: 'rgba(0,229,255,0.8)'
            },
            itemStyle: {color: 'rgba(0,229,255,0.8)'},
            opacity: 0.85,
            emphasis: {disabled: true},
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                        {offset: 0, color: 'rgba(0,229,255,0.4)'},
                        {offset: 1, color: 'rgba(0,229,255,0)'}
                    ]
                }
            }
        }]
    }
}
let data = ref<AppData>(defaultData);

function getNetworthData(): AppData {
    return data.value;
}

function setNetworthData(newData: AppData): void {
    data.value = newData;
}

export { getNetworthData, setNetworthData };