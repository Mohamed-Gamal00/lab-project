<template>
  <div class="home">
    <SidebarCom />
    <OrdersCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/nav/SidebarCom.vue";
import OrdersCom from "@/components/orders/OrdersCom.vue";

export default {
  name: "OrdersView",
  components: {
    SidebarCom,
    OrdersCom,
  },
};
</script>
