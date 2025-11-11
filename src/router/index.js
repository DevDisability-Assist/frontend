import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue'),
        },
        {
          path: '/uikit/formlayout',
          name: 'formlayout',
          component: () => import('@/views/uikit/FormLayout.vue'),
        },
        {
          path: '/uikit/input',
          name: 'input',
          component: () => import('@/views/uikit/InputDoc.vue'),
        },
        {
          path: '/uikit/button',
          name: 'button',
          component: () => import('@/views/uikit/ButtonDoc.vue'),
        },
        {
          path: '/uikit/table',
          name: 'table',
          component: () => import('@/views/uikit/TableDoc.vue'),
        },
        {
          path: '/uikit/list',
          name: 'list',
          component: () => import('@/views/uikit/ListDoc.vue'),
        },
        {
          path: '/uikit/tree',
          name: 'tree',
          component: () => import('@/views/uikit/TreeDoc.vue'),
        },
        {
          path: '/uikit/panel',
          name: 'panel',
          component: () => import('@/views/uikit/PanelsDoc.vue'),
        },

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
          path: '/login',
          name: 'login',
          component: () => import('@/views/pages/Login.vue'),
          meta: { requiresAuth: false }, // 인증X
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
    // {
    //   path: '/auth/login',
    //   name: 'login',
    //   component: () => import('@/views/pages/auth/Login.vue'),
    // },
    {
      path: '/auth/access',
      name: 'accessDenied',
      component: () => import('@/views/pages/auth/Access.vue'),
    },
    {
      path: '/auth/error',
      name: 'error',
      component: () => import('@/views/pages/auth/Error.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  const isAuthenticated = authStore.accessToken; // 토큰 존재 여부
  const userRole = authStore.userRole;

  // 1. 인증이 필요한 페이지
  if (to.meta.requiresAuth) {
    if (!isAuthenticated) {
      // 1a. 인증 안됨 -> 로그인 페이지로
      return next({ name: 'login', query: { redirect: to.fullPath } });
    }
    // 1b. 역할(Role) 체크
    if (to.meta.role && to.meta.role !== userRole) {
      return next({ name: 'accessDenied' }); // 권한 없음
    }
    return next();
  }

  // 2. 인증이 필요 없는 페이지 (e.g., 로그인)
  if (to.meta.requiresAuth === false) {
    if (isAuthenticated) {
      // 2a. 이미 로그인한 사용자가 로그인 페이지 접근 시 -> 홈으로
      return next({ name: 'dashboard' });
    }
    return next();
  }

  // 3. meta 설정이 없는 경우 (기본)
  return next();
});

export default router;
