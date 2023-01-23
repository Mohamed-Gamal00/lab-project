<template>
  <div class="doctors">
    <NavbarCom />
    <SidebarCom />
    <ReportsCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/nav/SidebarCom.vue";
import NavbarCom from "@/components/nav/NavbarCom.vue";
import ReportsCom from "@/components/roports/ReportsCom.vue";
// import NavbarCom from "@/components/nav/NavbarCom.vue";
export default {
  name: "RepotsView",
  components: { SidebarCom, NavbarCom, ReportsCom },
};
</script>
