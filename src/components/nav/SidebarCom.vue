<template>
  <div>
    <div class="wrapper">
      <aside
        class="sidebar-left border-right bg-white shadow"
        id="leftSidebar"
        data-simplebar
      >
        <nav class="vertnav navbar navbar-light">
          <!-- nav bar -->
          <div class="w-100 mt-3 mb-4 d-flex">
            <router-link :to="{ name: 'home' }">
              <img src="@/assets/logo.jpg" width="100" height="50" alt="img" />
            </router-link>
          </div>
          <!-- الرئيسية -->
          <ul class="navbar-nav flex-fill w-100 mb-2">
            <router-link :to="{ name: 'home' }">
              <li class="nav-item">
                <a class="nav-link">
                  <span class="item-text">
                    <router-link :to="{ name: 'home' }">
                      <i class="fe fe-home mr-3 fe-16"></i>
                      الرئيسية
                    </router-link>
                  </span>
                </a>
              </li>
            </router-link>
          </ul>
          <p class="text-muted nav-heading mt-4 mb-1">
            <span>الاقسام</span>
          </p>
          <ul class="navbar-nav flex-fill w-100 mb-5">
            <!-- الطلبات -->
            <router-link :to="{ name: 'orders' }">
              <li class="nav-item">
                <a class="nav-link">
                  <span class="item-text">
                    <router-link :to="{ name: 'orders' }">
                      <i class="fe fe-box mr-3 fe-16"></i>
                      الطلبات
                    </router-link>
                  </span>
                </a>
              </li>
            </router-link>
            <!-- المشتريات -->
            <router-link :to="{ name: 'purchases' }">
              <li class="nav-item">
                <a class="nav-link">
                  <span class="item-text">
                    <router-link :to="{ name: 'purchases' }">
                      <i class="fe fe-layers mr-3 fe-16"></i>
                      المشتريات
                    </router-link>
                  </span>
                </a>
              </li>
            </router-link>
            <!-- التقارير -->
            <router-link :to="{ name: 'reports' }">
              <li class="nav-item">
                <a class="nav-link">
                  <span class="item-text">
                    <router-link :to="{ name: 'reports' }">
                      <FontAwesome
                        class="mr-3 fe-16"
                        :icon="['far', 'bookmark']"
                      />
                      التقارير
                    </router-link>
                  </span>
                </a>
              </li>
            </router-link>
            <!-- الاطباء -->
            <router-link :to="{ name: 'doctors' }">
              <li class="nav-item">
                <a class="nav-link">
                  <span class="item-text">
                    <router-link :to="{ name: 'doctors' }">
                      <i class="fe fe-user mr-3 fe-16"></i>
                      الاطباء
                    </router-link>
                  </span>
                </a>
              </li>
            </router-link>
            <!-- الاعضاء -->
            <router-link :to="{ name: 'members' }">
              <li class="nav-item" v-if="type == '1'">
                <a class="nav-link">
                  <span class="item-text">
                    <router-link :to="{ name: 'members' }">
                      <i class="fe fe-grid mr-3 fe-16"></i>
                      الاعضاء
                    </router-link>
                  </span>
                </a>
              </li>
            </router-link>
            <!-- التجار -->
            <router-link :to="{ name: 'providers' }">
              <li class="nav-item">
                <a class="nav-link">
                  <span class="item-text">
                    <router-link :to="{ name: 'providers' }">
                      <i class="fe fe-pie-chart mr-3 fe-16"></i>
                      التجار
                    </router-link>
                  </span>
                </a>
              </li>
            </router-link>
            <!-- الاعدادات -->
            <router-link :to="{ name: 'setting' }">
              <li class="nav-item">
                <a class="nav-link">
                  <span class="item-text">
                    <router-link :to="{ name: 'setting' }">
                      <i class="fe fe-settings mr-3 fe-16"></i>
                      الاعدادات
                    </router-link>
                  </span>
                </a>
              </li>
            </router-link>
          </ul>
          <div class="btn-box w-100 mt-4 mb-1">
            <a
              class="btn mb-2 btn-transparent btn-lg btn-block"
              @click="Logout()"
              style="font-size: initial"
            >
              <i
                class="fe font-weight-bold text-danger fe-log-out fe-18 mr-2"
              ></i
              ><span class="text-danger">تسجيل الخروج</span>
            </a>
          </div>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarCom",
  data() {
    return {
      type: "",
    };
  },
  async mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "login" });
    }
    this.type = JSON.parse(user).type;
  },
  methods: {
    Logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
* {
  color: #322a7d;
}
.vertical .sidebar-left .navbar-nav > .nav-item > a > span {
  font-size: 15px;
  color: #d3dae2;
}
a {
  text-decoration: none;
}
nav {
  padding: 30px;
}
a {
  font-weight: bold;
  color: #a5acb3;
}
.router-link-exact-active {
  color: #322a7d;
}
</style>
