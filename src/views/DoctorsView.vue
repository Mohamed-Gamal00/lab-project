<template>
  <div class="home">
    <SidebarCom />
    <DoctorsCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/nav/SidebarCom.vue";
import DoctorsCom from "@/components/doctors/DoctorsCom.vue";
// import NavbarCom from "@/components/nav/NavbarCom.vue";
export default {
  name: "DoctorsView",
  components: { SidebarCom, DoctorsCom },
};
</script>
