<template>
  <div>
    <!-- /#wrapper -->
    <div class="wrapper">
      <main role="main" class="main-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12">
              <div v-if="loading">
                <div><PageLoader /></div>
              </div>
              <div class="row align-items-center">
                <div class="col-md-8">
                  <!-- col-8 content section -->
                  <div class="container-fluid direcion" style="height: 100%">
                    <!-- header -->
                    <div class="row">
                      <div class="mt-4">
                        <h1 class="fw-bold fs-1 mb-0 font">معمل دياب</h1>
                        <p class="m-0 small fw-bold p-0 text-secondary">
                          مرحبا بعودتك
                        </p>
                      </div>
                    </div>
                    <!-- buttons -->
                    <!-- info small box -->
                    <div class="row mt-3">
                      <!-- اضافة طلب -->
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div class="card shadow" style="border-radius: 20px">
                          <router-link :to="{ name: 'orders' }">
                            <button class="text-white buttons">
                              <div class="card-body">
                                <div class="row align-items-center">
                                  <!-- content -->
                                  <div class="col">
                                    <p class="text-end mb-0 fw-bold">الطلبات</p>
                                    <p class="text-end mt-1 small mb-0">
                                      اضافة طلب جديد للمعالجة
                                    </p>
                                  </div>
                                  <!-- section -->
                                  <div
                                    class="col-auto ms-lg-1"
                                    style="
                                      padding: 10px;
                                      background-color: orange;
                                      border-radius: 10px;
                                    "
                                  >
                                    <span
                                      class="fe fe-32 fe-git-pull-request text-muted mb-0"
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </router-link>
                        </div>
                      </div>
                      <!-- اضافة طبيب -->
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-4 text-white">
                        <div class="card shadow" style="border-radius: 20px">
                          <router-link :to="{ name: 'doctors' }">
                            <button class="text-white buttons">
                              <div class="card-body">
                                <div class="row align-items-center">
                                  <!-- content -->
                                  <div class="col">
                                    <p class="text-end mb-0 fw-bold">الاطباء</p>
                                    <p class="text-end mt-1 small mb-0">
                                      اضافة طبيب جديد الي قائمة الاطباء
                                    </p>
                                  </div>
                                  <!-- section -->
                                  <div
                                    class="col-auto ms-lg-1"
                                    style="
                                      padding: 10px;
                                      background-color: orange;
                                      border-radius: 10px;
                                    "
                                  >
                                    <span
                                      class="fe fe-32 fe-user text-muted mb-0"
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </router-link>
                        </div>
                      </div>
                      <!-- اضافة مشتريات -->
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-4 text-white">
                        <div class="card shadow" style="border-radius: 20px">
                          <router-link :to="{ name: 'purchases' }">
                            <button class="text-white buttons">
                              <div class="card-body">
                                <div class="row align-items-center">
                                  <!-- content -->
                                  <div class="col">
                                    <p class="text-end mb-0 fw-bold">
                                      المشتريات
                                    </p>
                                    <p class="text-end mt-1 small mb-0">
                                      اضافة مشتريات جديدة الي قائمة المشتريات
                                    </p>
                                  </div>
                                  <!-- section -->
                                  <div
                                    class="col-auto ms-lg-1"
                                    style="
                                      padding: 10px;
                                      background-color: orange;
                                      border-radius: 10px;
                                    "
                                  >
                                    <span
                                      class="fe fe-32 fe-layers text-muted mb-0"
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                    <!-- tebles -->
                    <div class="row ps-1 mt-lg-3">
                      <div class="table-section">
                        <div class="mt-2 p-3">
                          <span class="float-end fw-bold"
                            ><strong>أجدد الطلبات</strong></span
                          >
                          <span class="float-start font">
                            <router-link :to="{ name: 'orders' }">
                              عرض الكل
                            </router-link>
                          </span>
                        </div>
                        <table class="table table-hover mt-5 font">
                          <thead>
                            <tr>
                              <th class="text-secondary">رقم الطلب</th>
                              <th class="text-secondary">الدكتور</th>
                              <th class="text-secondary">اسم الحالة</th>
                              <th class="text-secondary">تاريخ الاضافة</th>
                              <th class="text-secondary">السعر</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="order in orders.slice(0, 6)"
                              :key="order.id"
                            >
                              <th style="width: 200px">
                                {{ order.patient_no }}
                              </th>
                              <td>{{ order.doctor }}</td>
                              <td>{{ order.patient_name }}</td>
                              <td>{{ order.required_date }}</td>
                              <td>{{ order.price }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- col-4 side section -->
                <div class="col-md-4">
                  <div
                    class="container mt-4"
                    style="
                      background-color: #ffffff;
                      padding-top: 10px;
                      border: 1px solid transparent;
                      border-radius: 20px;
                    "
                  >
                    <!-- Search form -->
                    <div class="row">
                      <div class="col-10">
                        <div class="input-group ps-5">
                          <form class="d-flex" role="search">
                            <button class="btn" type="submit">
                              <FontAwesome
                                class="searchicon"
                                icon="magnifying-glass"
                              />
                            </button>
                            <input
                              class="form-control me-2"
                              style="
                                border: 1px solid transparent;
                                border-radius: 15px;
                              "
                              type="search"
                              placeholder="ابحث..."
                              aria-label="Search"
                            />
                          </form>
                        </div>
                      </div>
                      <div class="col-2"></div>
                    </div>
                    <!-- wellcom message -->
                    <div class="row d-flex justify-content-around mt-4">
                      <div class="col-8">
                        <div>
                          <h5 class="mb-0">مرحبا</h5>
                          <strong>
                            <h2 class="mb-0 font mt-2" style="font-weight: 900">
                              {{ username }}
                            </h2>
                          </strong>
                        </div>
                      </div>
                      <div class="col-4 mt-2">
                        <div class="text-center">
                          <img
                            src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg"
                            width="70"
                            class="rounded-circle"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- ملخص لاحصائيات -->
                    <div class="row d-flex justify-content-around mt-4">
                      <div class="mb-lg-3">
                        <span class="fw-bold text-black">ملخص الاحصائيات</span>
                        <span class="float-start font showall"
                          ><strong>
                            <router-link :to="{ name: 'reports' }"
                              >عرض التقارير</router-link
                            >
                          </strong>
                        </span>
                      </div>
                      <div
                        class="col-5 col5box text-light d-flex justify-content-center"
                      >
                        <div class="box1 text-center">
                          <p class="mb-0">الطلبات الجديدة</p>
                          <p class="mb-0">
                            <span class="fs-2 fw-bold mt-0"
                              >46%<img
                                class="m-1"
                                src="@/assets/HOME/decrease.svg"
                                alt=""
                            /></span>
                          </p>
                        </div>
                      </div>
                      <div
                        class="col-5 col5box text-light d-flex justify-content-center"
                      >
                        <div class="box1 text-center">
                          <p class="mb-0">الاطباء الجدد</p>
                          <p class="mb-0">
                            <span class="fs-2 fw-bold mt-0"
                              >89%<img
                                class="m-1"
                                src="@/assets/HOME/increase.svg"
                                alt=""
                            /></span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- All doctors -->
                    <div class="mt-4">
                      <span class="fw-bold text-black">الاطباء</span>
                      <span class="float-start font showall"
                        ><strong>
                          <router-link :to="{ name: 'doctors' }">
                            عرض الكل
                          </router-link>
                        </strong>
                      </span>
                    </div>
                    <!-- doctors section -->
                    <div class="mt-4">
                      <div
                        class="row d-flex justify-content-around"
                        v-for="doctor in doctors.slice(-2)"
                        :key="doctor"
                      >
                        <div class="col-4 p-0">
                          <div class="text-center">
                            <img
                              :src="doctor.image"
                              width="50"
                              height="50"
                              class="roundedd"
                            />
                          </div>
                        </div>
                        <div class="col-8 p-0 font">
                          <div>
                            <p class="mb-0 text-black fw-bold">
                              د/ {{ doctor.name }}
                            </p>
                            <p class="text-secondary font">
                              {{ doctor.address }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- .col-12 -->
          </div>
          <!-- .row -->
        </div>
        <!-- .container-fluid -->
      </main>
    </div>
  </div>
</template>

<script>
import PageLoader from "@/components/pageloader/PageLoader.vue";
import axios from "axios";
export default {
  name: "HomeCom",
  components: { PageLoader },
  data() {
    return {
      loading: false,
      username: "",
      orders: [],
      doctors: [],
    };
  },
  async mounted() {
    this.loading = true;
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "login" });
    } else {
      this.username = JSON.parse(user).name;
    }
    let token = localStorage.getItem("token");
    let result = await axios.get(`https://lab.almona.host/api/orders`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (result.status == 200) {
      console.log(result.data);
      // this.orders = result.data.orders.slice(0, 5);
      this.orders = result.data.orders;
    }
    this.loading = false;

    this.getdoctors();
  },
  methods: {
    async getdoctors() {
      this.loading = true;
      let token = localStorage.getItem("token");
      let result = await axios.get(`https://lab.almona.host/api/doctors`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (result.status == 200) {
        console.log(result.data);
        this.doctors = result.data.doctors;
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>
/*******buttons*******/
.fe {
  color: white !important;
}
.card {
  overflow: hidden;
  border: none;
}
.small {
  font-size: 10px !important;
  font-weight: 500;
}
.buttons {
  height: 95px;
  background-color: #322a7d;
  border: none;
  border-radius: 20px;
  width: 100%;
}
@media (min-width: 992px) {
  .col-lg-4 {
    flex: 0 0 auto;
    width: 49.333333%;
  }
}
@media (min-width: 1224px) {
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.333333%;
  }
  .table-section {
    height: fit-content;
  }
}

/*****tables******/
.table-section {
  background-color: #ffffff;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px;
  /* height: 60vh; */
  height: 350px;
}
.table-section span a {
  color: orange;
  text-decoration: none;
}
.table-section span a::after {
  content: "\00BB";
  margin: 2px;
  color: orange;
  text-decoration: none;
}
.sidecontent {
  background-color: #ffffff;
  padding-top: 10px;
  border: 1px solid transparent;
  border-radius: 20px;
}
/**********box الاحصائيات************/
.col5box {
  height: 120px;
  background-color: #322a7d;
  border: 1px solid transparent;
  border-radius: 20px;
}
.box1 {
  height: 120px;
  border: 1px solid transparent;
  border-radius: 20px;
  position: relative;
  top: 20%;
}
/********All doctors*********/
.showall::after {
  content: "\00BB";
  margin: 2px;
  color: orange;
  text-decoration: none;
}
.showall a {
  text-decoration: none;
  color: orange;
}
.roundedd {
  border-radius: 15px;
}
</style>
