<template>
  <div class="doctors">
    <NavbarCom />
    <SidebarCom />
    <DoctorsCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/nav/SidebarCom.vue";
import NavbarCom from "@/components/nav/NavbarCom.vue";
import DoctorsCom from "@/components/doctors/DoctorsCom.vue";
// import NavbarCom from "@/components/nav/NavbarCom.vue";
export default {
  name: "DoctorsView",
  components: { SidebarCom, DoctorsCom, NavbarCom },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "register" });
    }
  },
};
</script>
