<template>
  <div class="home">
    <SidebarCom />
    <PurchasesCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/nav/SidebarCom.vue";
import PurchasesCom from "@/components/purchases/PurchasesCom.vue";

export default {
  name: "PurchasesView",
  components: {
    SidebarCom,
    PurchasesCom,
  },
};
</script>
