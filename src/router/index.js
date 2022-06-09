import { createRouter, createWebHashHistory } from 'vue-router'
// import Vue from 'vue'
// import HomeView from '../views/HomeView.vue'
import LoginPanel from '../components/LoginPanel.vue'
import MainMenu from '../components/MainMenu.vue'
import AddingPatient from '../components/AddingPatient.vue'
import PatientSearching from '../components/PatientSearching.vue'
import AdminPanel from '../components/AdminPanel.vue'
import AdminUsersManagement from '../components/AdminUsersManagement.vue'
import AdminHospitalsManagement from '../components/AdminHospitalsManagement.vue'
import AdminAddingHospital from '../components/AdminAddingHospital.vue'
import AddingUser from '../components/AddingUser.vue'
import AdminWardManagement from '../components/AdminWardManagement.vue'
import UserEditing from '../components/UserEditing.vue'
import AdminHospitalEditing from '../components/AdminHospitalEditing.vue'
import EditingPatient from '../components/EditingPatient.vue'



const routes = [
    // {
    //     path: '/login',
    //     name: 'loginpage',
    //     component: LoginPanel
    // },
    {
        path: '/hospitals',
        name: 'MainMenu',
        component: MainMenu,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/admin-panel',
        name: 'AdminPanel',
        component: AdminPanel,
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/adding-hospital',
        name: 'AdminAddingHospital',
        component: AdminAddingHospital,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/edit-hospital',
        name: 'AdminHospitalEditing',
        component: AdminHospitalEditing,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/hospitals-management',
        name: 'AdminHospitalsManagement',
        component: AdminHospitalsManagement,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/ward-management',
        name: 'AdminWardManagement',
        component: AdminWardManagement,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/users-management',
        name: 'AdminUserManagement',
        component: AdminUsersManagement,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/adding-user',
        name: 'AddingUser',
        component: AddingUser,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user-editing/:id',
        name: 'UserEditing',
        component: UserEditing,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/adding-patient',
        name: 'AddingPatient',
        component: AddingPatient,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/editing-patient',
        name: 'EditingPatient',
        component: EditingPatient,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/patients',
        name: 'PatientSearching',
        component: PatientSearching,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/',
        name: 'LoginPanel',
        component: LoginPanel
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})



export default router