<template>
  <nav
    class="navbar navbar_in_largscreen navbar-expand-lg navbar-light bg-light"
  >
    <a class="navbar-brand" href="#"><img src="" alt="img" /></a>

    <button
      style="background-color: #322a7d"
      class="navbar-toggler ms-2"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon">
        <i class="fe text-white fe-menu fe-24"></i>
      </span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul> -->
      <nav class="vertnav navbar navbar-light">
        <!-- nav bar -->
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
            <i class="fe font-weight-bold text-danger fe-log-out fe-12 mr-2"></i
            ><span class="text-danger">تسجيل الخروج</span>
          </a>
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarCom",
};
</script>

<style scoped>
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .navbar_in_largscreen {
    display: none;
  }
}
</style>
