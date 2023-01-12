<template>
  <div class="home">
    <NavbarCom />
    <SidebarCom />
    <ProvidersCom />
  </div>
</template>

<script>
import NavbarCom from "@/components/nav/NavbarCom.vue";
import SidebarCom from "@/components/nav/SidebarCom.vue";
import ProvidersCom from "@/components/providers/ProvidersCom.vue";

export default {
  name: "ProvudersView",
  components: {
    NavbarCom,
    SidebarCom,
    ProvidersCom,
  },
};
</script>
