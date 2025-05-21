import { ref } from 'vue';
import type { AppData } from '../types';
import localforage from 'localforage';

const defaultData: AppData = {
  userData: {
    title: 'ATRI-BOT',
    logo: './logo.png',
    version: '0.0.0',
    playerHead: './logo.png',
    playerName: 'Me0wo',
    profileName: 'ATRI-BOT',
    isCosmeticEnabled: true,
    networthTotal: '123,456,789,123',
    networthShort: '123.45B',
    soulBoundTotal: '123,456,789,123',
    soulBoundShort: '123.45B',
    purseValue: '12.34B',
    bankValue: '123.45B',
    essenceValue: '0',
    soulflowValue: '123.45B',
    backgroundUrl: './background.jpg',
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
  chartOptions: {
    xAxis: {
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
    },
    series: [
      {
        name: 'NW',
        data: [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000, 140000, 150000, 160000, 100000, 50000],
      },
    ],
  },
};
export let data = ref<AppData>(defaultData);

let load = false;

export async function loadData(key = 'nw') {
  if (load) {
    return;
  }
  const saved = (await localforage.getItem(key)) as AppData | null;
  if (saved) {
    data.value = saved;
    load = true;
    await localforage.removeItem(key);
  }
}
