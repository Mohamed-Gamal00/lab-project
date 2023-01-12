<template>
  <div class="home">
    <NavbarCom />
    <SidebarCom />
    <PurchasesCom />
  </div>
</template>

<script>
import NavbarCom from "@/components/nav/NavbarCom.vue";
import SidebarCom from "@/components/nav/SidebarCom.vue";
import PurchasesCom from "@/components/purchases/PurchasesCom.vue";

export default {
  name: "PurchasesView",
  components: {
    NavbarCom,
    SidebarCom,
    PurchasesCom,
  },
};
</script>
