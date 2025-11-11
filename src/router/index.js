// router/index.js

import { createRouter, createWebHistory } from 'vue-router';

// 1. 분리된 모든 경로 파일(지도 조각)들을 import 합니다.
import systemRouter from './system_router.js';
import mainRouter from './main_router.js';

const routes = [
        {
          path: '/uikit/overlay',
          name: 'overlay',
          component: () => import('@/views/uikit/OverlayDoc.vue'),
        },
        {
          path: '/uikit/media',
          name: 'media',
          component: () => import('@/views/uikit/MediaDoc.vue'),
        },
        {
          path: '/uikit/message',
          name: 'message',
          component: () => import('@/views/uikit/MessagesDoc.vue'),
        },
        {
          path: '/uikit/file',
          name: 'file',
          component: () => import('@/views/uikit/FileDoc.vue'),
        },
        {
          path: '/uikit/menu',
          name: 'menu',
          component: () => import('@/views/uikit/MenuDoc.vue'),
        },
        {
          path: '/uikit/charts',
          name: 'charts',
          component: () => import('@/views/uikit/ChartDoc.vue'),
        },
        {
          path: '/uikit/misc',
          name: 'misc',
          component: () => import('@/views/uikit/MiscDoc.vue'),
        },
        {
          path: '/uikit/timeline',
          name: 'timeline',
          component: () => import('@/views/uikit/TimelineDoc.vue'),
        },
        {
          path: '/blocks',
          name: 'blocks',
          meta: {
            breadcrumb: ['Prime Blocks', 'Free Blocks'],
          },
          component: () => import('@/views/utilities/Blocks.vue'),
        },
        {
          path: '/pages/empty',
          name: 'empty',
          component: () => import('@/views/pages/Empty.vue'),
        },
        {
          path: '/pages/crud',
          name: 'crud',
          component: () => import('@/views/pages/Crud.vue'),
        },
        {
          path: '/documentation',
          name: 'documentation',
          component: () => import('@/views/pages/Documentation.vue'),
        },
        {
          path: '/home',
          name: 'userhome',
          component: () => import('@/components/AppMain.vue'),
        },
        {
          path: '/syshome',
          name: 'syshome',
          component: () => import('@/components/SysMain.vue'),
        },
      ],
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('@/views/pages/Landing.vue'),
    },
    {
      path: '/pages/notfound',
      name: 'notfound',
      component: () => import('@/views/pages/NotFound.vue'),
    },

// 2. Spread 연산자(...)를 사용해 두 배열을 하나의 'routes' 배열로 합칩니다.
//const routes = [
  ...systemRouter.routes,
  ...mainRouter,
  // 나중에 경로 파일을 더 만들어도 여기에 계속 추가하면 됩니다.
  // ...adminRoutes,
  // ...userRoutes,
];


// 3. 합쳐진 'routes'를 사용해 *하나의* 라우터 인스턴스를 생성합니다.
const router = createRouter({
  history: createWebHistory(),
  routes: routes, // 합쳐진 경로 배열을 사용
});

// 4. 이 통합 라우터를 export 합니다.
export default router;
