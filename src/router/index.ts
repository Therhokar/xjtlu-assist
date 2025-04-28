import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/mail',
      name: 'mail',
      component: () => import('../views/MailView.vue'),
    },
    {
      path: '/courses',
      component: () => import('../views/CoursesView.vue'),
    },
    {
      path: '/booking',
      component: () => import('../views/BookingView.vue'),
    },
    {
      path: '/booking/location',
      component: () => import('../views/LocationView.vue'),
    },
    {
      path: '/booking/scan',
      component: () => import('../views/ScannerView.vue'),
    },
    {
      path: '/mail/config',
      component: () => import('../views/MailConfigView.vue'),
    },
    {
      path: '/notification',
      component: () => import('../views/NotificationView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/scan',
      component: () => import('../views/ScannerView.vue'),
    },
  ],
});
router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length;
  const fromDepth = from.path.split('/').length;
  to.meta.transiton = toDepth < fromDepth ? 'slide-right' : 'slide-left';
});

export default router;
