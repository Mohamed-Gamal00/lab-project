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
          <div class="w-100 mb-4 d-flex">
            <a
              class="navbar-brand mx-auto mt-2 flex-fill text-center"
              href="./index.html"
            >
              <img src="" alt="img" />
            </a>
          </div>
          <!-- الرئيسية -->
          <ul class="navbar-nav flex-fill w-100 mb-2">
            <li class="nav-item">
              <a href="" class="nav-link">
                <span class="item-text">
                  <router-link :to="{ name: 'home' }">
                    <i class="fe fe-home mr-3 fe-16"></i>
                    الرئيسية
                  </router-link>
                </span>
              </a>
            </li>
          </ul>
          <p class="text-muted nav-heading mt-4 mb-1">
            <span>الاقسام</span>
          </p>
          <!-- الطلبات -->
          <ul class="navbar-nav flex-fill w-100 mb-2">
            <li class="nav-item">
              <a href="" class="nav-link">
                <span class="item-text">
                  <router-link :to="{ name: 'orders' }">
                    <i class="fe fe-box mr-3 fe-16"></i>
                    الطلبات
                  </router-link>
                </span>
              </a>
            </li>
            <!-- المشتريات -->
            <li class="nav-item">
              <a href="" class="nav-link">
                <span class="item-text">
                  <router-link :to="{ name: 'purchases' }">
                    <i class="fe fe-layers mr-3 fe-16"></i>
                    المشتريات
                  </router-link>
                </span>
              </a>
            </li>
            <!-- الاطباء -->
            <li class="nav-item">
              <a href="" class="nav-link">
                <span class="item-text">
                  <router-link :to="{ name: 'doctors' }">
                    <i class="fe fe-user mr-3 fe-16"></i>
                    الاطباء
                  </router-link>
                </span>
              </a>
            </li>
            <!-- الاعضاء -->
            <li class="nav-item">
              <a href="" class="nav-link">
                <span class="item-text">
                  <router-link :to="{ name: 'members' }">
                    <i class="fe fe-grid mr-3 fe-16"></i>
                    الاعضاء
                  </router-link>
                </span>
              </a>
            </li>
            <!-- التجار -->
            <li class="nav-item">
              <a href="" class="nav-link">
                <span class="item-text">
                  <router-link :to="{ name: 'providers' }">
                    <i class="fe fe-pie-chart mr-3 fe-16"></i>
                    التجار
                  </router-link>
                </span>
              </a>
            </li>
            <!-- الاعدادات -->
            <li class="nav-item">
              <a href="" class="nav-link">
                <span class="item-text">
                  <router-link :to="{ name: 'home' }">
                    <i class="fe fe-settings mr-3 fe-16"></i>
                    الاعدادات
                  </router-link>
                </span>
              </a>
            </li>
          </ul>
          <div class="btn-box w-100 mt-4 mb-1">
            <a
              href=""
              class="btn mb-2 btn-transparent font-weight-bold btn-lg btn-block"
            >
              <i
                class="fe font-weight-bold text-danger fe-log-out fe-12 mr-2"
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
