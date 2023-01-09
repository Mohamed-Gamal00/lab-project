<template>
  <div class="home">
    <SidebarCom />
    <MembersCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/nav/SidebarCom.vue";
import MembersCom from "@/components/members/MembersCom.vue";

export default {
  name: "MembersView",
  components: {
    SidebarCom,
    MembersCom,
  },
};
</script>
