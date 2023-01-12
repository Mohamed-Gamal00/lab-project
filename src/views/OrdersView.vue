<template>
  <div class="home">
    <NavbarCom />
    <SidebarCom />
    <OrdersCom />
  </div>
</template>

<script>
import NavbarCom from "@/components/nav/NavbarCom.vue";
import SidebarCom from "@/components/nav/SidebarCom.vue";
import OrdersCom from "@/components/orders/OrdersCom.vue";

export default {
  name: "OrdersView",
  components: {
    NavbarCom,
    SidebarCom,
    OrdersCom,
  },
};
</script>
