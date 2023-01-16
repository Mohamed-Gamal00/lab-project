<template>
  <div class="doctors">
    <NavbarCom />
    <SidebarCom />
    <AddOrderCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/nav/SidebarCom.vue";
import NavbarCom from "@/components/nav/NavbarCom.vue";
import AddOrderCom from "@/components/orders/AddOrders.vue";
// import NavbarCom from "@/components/nav/NavbarCom.vue";
export default {
  name: "AddOrderView",
  components: { SidebarCom, AddOrderCom, NavbarCom },
};
</script>
