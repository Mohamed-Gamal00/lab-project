<template>
  <!-- <nav>
    <router-link :to="{ name: 'login' }">login</router-link> |
    <router-link :to="{ name: 'home' }">الرئيسية</router-link> |
    <router-link :to="{ name: 'doctors' }">الاطباء</router-link> |
    <router-link :to="{ name: 'members' }">الاعضاء</router-link> |
    <router-link :to="{ name: 'orders' }">الطلبات</router-link> |
    <router-link :to="{ name: 'providers' }">التجار</router-link> |
    <router-link :to="{ name: 'purchases' }">المشتريات</router-link> |
    <router-link :to="{ name: 'reports' }">التقارير</router-link> |
  </nav> -->
  <router-view />
</template>
<script>
export default {};
</script>
<style lang="scss">
// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
