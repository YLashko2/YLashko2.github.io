import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Event_ from '../components/Event_.vue';
import Main from '../components/Main.vue';
import Register from "../components/Register.vue";
import Profile from "../components/Profile.vue";
import NewEvent from "../components/NewEvent.vue";

const routes = [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/event/:event_id',
      name: 'event page',
      component: Event_,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/newevent',
      name: 'new_event',
      component: NewEvent,
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
