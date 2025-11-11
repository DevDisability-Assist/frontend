// router/index.js

import { createRouter, createWebHistory } from 'vue-router';

// 1. 분리된 모든 경로 파일(지도 조각)들을 import 합니다.
import systemRouter from './system_router.js';
import mainRouter from './main_router.js';

// 2. Spread 연산자(...)를 사용해 두 배열을 하나의 'routes' 배열로 합칩니다.
const routes = [
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
