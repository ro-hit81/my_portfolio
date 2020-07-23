import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/components/About'
import Education from '@/components/Education'
import Project from '@/components/Project'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Interest from '@/components/Interest'
import Awards from '@/components/Awards'
import Publications from '@/components/Publications'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/interest',
    name: 'Interest',
    component: Interest
  },
  {
    path: '/awards',
    name: 'Awards',
    component: Awards
  },
  {
    path: '/publications',
    name: 'Publications',
    component: Publications
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
