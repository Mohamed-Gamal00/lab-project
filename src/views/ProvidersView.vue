<template>
  <div class="home">
    <SidebarCom />
    <ProvidersCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/nav/SidebarCom.vue";
import ProvidersCom from "@/components/providers/ProvidersCom.vue";

export default {
  name: "ProvudersView",
  components: {
    SidebarCom,
    ProvidersCom,
  },
};
</script>
