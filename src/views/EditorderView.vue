<template>
  <div class="doctors">
    <NavbarCom />
    <SidebarCom />
    <EditOrder />
  </div>
</template>

<script>
import SidebarCom from "@/components/nav/SidebarCom.vue";
import NavbarCom from "@/components/nav/NavbarCom.vue";
import EditOrder from "@/components/orders/EditOrder.vue";
// import NavbarCom from "@/components/nav/NavbarCom.vue";
export default {
  name: "AddOrderView",
  components: { SidebarCom, EditOrder, NavbarCom },
  // mounted() {
  //   let user = localStorage.getItem("user-info");
  //   if (!user) {
  //     this.$router.push({ name: "register" });
  //   }
  // },
};
</script>
