<template>
  <div class="home">
    <NavbarCom />
    <SidebarCom />
    <SettingCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/nav/SidebarCom.vue";
import NavbarCom from "@/components/nav/NavbarCom.vue";
import SettingCom from "@/components/settings/SettingCom.vue";
// @ is an alias to /src

export default {
  name: "SettingView",
  components: { SidebarCom, NavbarCom, SettingCom },
  // mounted() {
  //   let user = localStorage.getItem("user-info");
  //   if (!user) {
  //     this.$router.push({ name: "register" });
  //   }
  // },
};
</script>
