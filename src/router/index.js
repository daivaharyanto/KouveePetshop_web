import Vue from "vue";
import Router from "vue-router";
// import { loadavg } from 'os'

const dashboardLayout = () => import('../components/dashboardLayout.vue')
const loginLayout = () => import('../components/Login.vue')
// const adminDashboard = () => import('../components/adminDashboard.vue')
// const userDashboard = () => import('../components/userDashboard.vue')


// function loadLogin(view){
//     return()=>import(`../components/${view}.vue`)
// }
function loadHewan(view){
    return()=>import(`../components/hewanLayout/${view}.vue`)
}
function loadLayanan(view){
    return()=>import(`../components/layananLayout/${view}.vue`)
}
function loadPegawai(view){
    return()=>import(`../components/pegawaiLayout/${view}.vue`)
}
function loadPengadaan(view){
    return()=>import(`../components/pengadaanLayout/${view}.vue`)
}
function loadProduk(view){
    return()=>import(`../components/produkLayout/${view}.vue`)
}
function loadSupplier(view){
    return()=>import(`../components/supplierLayout/${view}.vue`)
}


const routes = [
  {
      path:'/',
      component: loginLayout,
      children: [
          {
              name: 'Login',
              path: '',
           
          },
      ]
  },
  {
    path:'/menu',
    component: dashboardLayout,
    children: [
        {
            name: 'Hewan',
            path: '/menuhewan',
            component: loadHewan('MenuHewan')
         
        },
        {
            name: 'Layanan',
            path: '/MenuLayanan',
            component: loadLayanan('MenuLayanan')
         
        },
        {
            name: 'Pegawai',
            path: '/MenuPegawai',
            component: loadPegawai('MenuPegawai')
         
        },
        {
            name: 'Pengadaan',
            path: '/MenuPengadaan',
            component: loadPengadaan('MenuPengadaan')
         
        },
        {
            name: 'Produk',
            path: '/MenuProduk',
            component: loadProduk('MenuProduk')
         
        },
        {
            name: 'Supplier',
            path: '/MenuSupplier',
            component: loadSupplier('MenuSupplier')
         
        },
    ]
},
]

Vue.use(Router);

const router = new Router({ mode: "history", routes: routes });

export default router;
