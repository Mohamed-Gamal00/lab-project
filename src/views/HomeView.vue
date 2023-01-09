<template>
  <div class="home">
    <NavbarCom />
    <SidebarCom />
    <HomeCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/nav/SidebarCom.vue";
import NavbarCom from "@/components/nav/NavbarCom.vue";
import HomeCom from "@/components/home/HomeCom.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { SidebarCom, NavbarCom, HomeCom },
};
</script>
