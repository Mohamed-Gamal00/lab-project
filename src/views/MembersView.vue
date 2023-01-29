<template>
  <div class="home">
    <NavbarCom />
    <SidebarCom />
    <MembersCom />
  </div>
</template>

<script>
import NavbarCom from "@/components/nav/NavbarCom.vue";
import SidebarCom from "@/components/nav/SidebarCom.vue";
import MembersCom from "@/components/members/MembersCom.vue";

export default {
  name: "MembersView",
  components: {
    NavbarCom,
    SidebarCom,
    MembersCom,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "register" });
    }
  },
};
</script>
