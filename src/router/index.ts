// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 自动使用 vite.config.ts 中定义的 base
  routes: [
    {
      path: '/',
      name: 'NwPage',
      component: () => import('../App.vue'),
    },
  ],
});

export default router;
