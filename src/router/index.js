// 路由模式(hash和history模式)

/*
hash模式 = 前端自己管路由（安全簡單）:
- URL 會有 #
  例：/about → /#/about
- 不會觸發伺服器HTTP請求（前端自己處理路由）
- 優點：不用後端設定，部署簡單
- 缺點：URL 不夠乾淨
- SEO：現在 Google 可解析，但仍不如 history
*/
import { createRouter, createWebHashHistory } from 'vue-router';

/*
history模式 = 交給瀏覽器網址系統（漂亮但要後端配合）:
- URL 沒有 #
  例：/about
- 刷新或直接進入網址時會向 server 發請求(HTTP)
- 如果後端沒處理 fallback，會 404
- 優點：URL 乾淨、專業、SEO 較佳
- 缺點：需要後端設定支援（Nginx / Node / Vite preview）
*/
// import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
