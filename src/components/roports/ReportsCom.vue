<template>
  <div class="wrapper">
    <main role="main" class="main-content">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="row align-items-center mb-2">
              <!-- header -->
              <div class="fw-bold fs-4 mt-lg-4 mb-3">
                <span style="color: #322a7d"
                  ><span><FontAwesome icon="bookmark" />التقارير </span>
                </span>
                <span class="float-start">
                  <button
                    @click="print()"
                    type="button"
                    class="btn btn-primary text-white"
                    style="background-color: #322a7d; border: none"
                  >
                    طباعة
                    <span
                      ><FontAwesome style="color: orange" icon="print"
                    /></span>
                  </button>
                </span>
              </div>
              <!-- reports selectors -->
              <div v-if="loading">
                <h1>loooding.....</h1>
                <PageLoader />
              </div>
              <div class="row align-items-center">
                <!-- الطلبات والمشتريات -->
                <div
                  class="col-md-2 d-flex d-inline justify-content-center col-sm-12"
                >
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle border-0 font"
                      style="background-color: #e0dfeb; color: #322a7d"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      الطلبات والمشتريات
                    </button>
                    <ul class="dropdown-menu font">
                      <li>
                        <button
                          type="button"
                          @click="ordersreports()"
                          id="order"
                          class="dropdown-item"
                        >
                          الطلبات
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          @click="purchasesreports()"
                          id="purshases"
                          class="dropdown-item"
                        >
                          المشتريات
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- جميع الاطباء -->
                <div class="col-md-3">
                  <select class="form-select" v-model="doctor_id">
                    <option disabled value="">جميع الاطباء</option>
                    <option
                      :value="doctor.id"
                      v-for="doctor in doctors"
                      :key="doctor.id"
                    >
                      {{ doctor.name }}
                    </option>
                  </select>
                </div>
                <!-- جميع التجار -->
                <div class="col-md-3">
                  <select class="form-select" v-model="provider_id">
                    <option disabled value="">جميع التجار</option>
                    <option
                      v-for="provider in providers"
                      :key="provider.id"
                      value="1"
                    >
                      {{ provider.name }}
                    </option>
                  </select>
                </div>
                <!-- start date -->
                <div class="col-md-2">
                  <input
                    type="date"
                    class="form-control"
                    placeholder="ميعاد الطلب"
                    v-model="start_date"
                  />
                  <span class="erroe-feedbak" v-if="v$.start_date.$error">{{
                    v$.start_date.$errors[0].$message
                  }}</span>
                </div>
                <!-- end date -->
                <div class="col-md-2">
                  <input
                    type="date"
                    class="form-control"
                    placeholder="ميعاد الطلب"
                    v-model="end_date"
                  />
                  <span class="erroe-feedbak" v-if="v$.end_date.$error">{{
                    v$.end_date.$errors[0].$message
                  }}</span>
                </div>
                <p class="text-center erroe-feedbak">{{ messege }}</p>
              </div>
              <!-- buttons -->
              <div class="row mt-4 d-flex justify-content-around">
                <!-- عدد الطلبات-->
                <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                  <div class="card shadow" style="border-radius: 20px">
                    <button class="text-white buttons">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <!-- content -->
                          <div class="col">
                            <p class="text-end mb-0 fw-bold small">
                              عدد الطلبات
                            </p>
                            <h1
                              class="text-end text-white mt-1 mb-0"
                              style="font-weight: 900"
                            >
                              120
                            </h1>
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
                  </div>
                </div>
                <!--جمالي الدخل -->
                <div class="col-lg-3 col-md-6 col-sm-12 mb-4 text-white">
                  <div class="card shadow" style="border-radius: 20px">
                    <button class="text-white buttons">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <!-- content -->
                          <div class="col">
                            <p class="text-end mb-0 fw-bold small">
                              اجمالي الدخل
                            </p>
                            <h1
                              class="text-end mt-1 mb-0"
                              style="font-weight: 900; color: #68cc56"
                            >
                              35الف <span class="small">جنيه</span>
                            </h1>
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
                              ><FontAwesome
                                icon="money-bill-wave"
                                class="fe-32"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <!-- اضافة مشتريات -->
                <div class="col-lg-3 col-md-6 col-sm-12 mb-4 text-white">
                  <div class="card shadow" style="border-radius: 20px">
                    <button class="text-white buttons">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <!-- content -->
                          <div class="col">
                            <p class="text-end mb-0 fw-bold small">
                              عدد المشتريات
                            </p>
                            <h1
                              class="text-end text-white mt-1 mb-0"
                              style="font-weight: 900"
                            >
                              80
                            </h1>
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
                  </div>
                </div>
                <!-- اجمالي مشتريات -->
                <div class="col-lg-3 col-md-6 col-sm-12 mb-4 text-white">
                  <div class="card shadow" style="border-radius: 20px">
                    <button class="text-white buttons">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <!-- content -->
                          <div class="col">
                            <p class="text-end mb-0 fw-bold small">
                              اجمالي المشتريات
                            </p>
                            <h1
                              class="text-end text-danger mt-1 mb-0"
                              style="font-weight: 900"
                            >
                              35الف <span class="small">جنيه</span>
                            </h1>
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
                              ><FontAwesome
                                icon="money-bill-wave"
                                class="fe-32"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <!-- tebles -->
              <div>
                <div class="row mt-3 font d-flex justify-content-center">
                  <!-- الطلبات -->
                  <div
                    class="col-md-6 col-sm-12 col-lg-6 d-flex justify-content-center"
                  >
                    <div class="row ps-1 mt-lg-3">
                      <div class="table-section" id="order_table">
                        <div class="mt-2 ps-2 pe-2">
                          <span class="float-end fw-bold"
                            ><strong>الطلبات</strong></span
                          >
                          <span class="float-start font">
                            <router-link :to="{ name: 'orders' }">
                              عرض الكل
                            </router-link>
                          </span>
                        </div>
                        <table
                          class="table table-striped table-hover mt-5 font"
                        >
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
                              class="tablefont"
                              v-for="order in orders"
                              :key="order.id"
                            >
                              <th style="width: 200px">
                                {{ order.patient_no }}
                              </th>
                              <td style="width: 200px">{{ order.doctor }}</td>
                              <td style="width: 200px">
                                {{ order.patient_name }}
                              </td>
                              <td style="width: 200px">
                                {{ order.required_date }}
                              </td>
                              <td style="width: 200px">{{ order.price }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <!-- المشتريات -->
                  <div
                    class="col-md-6 col-sm-12 col-lg-6 d-flex justify-content-center"
                  >
                    <!-- tebles2 -->
                    <div class="row ps-1 mt-lg-3">
                      <div class="table-section" id="purshases_table">
                        <div class="mt-2 ps-2 pe-2">
                          <span class="float-end fw-bold"
                            ><strong>المشتريات</strong></span
                          >
                          <span class="float-start font">
                            <router-link :to="{ name: 'purchases' }">
                              عرض الكل
                            </router-link>
                          </span>
                        </div>
                        <table
                          class="table table-striped table-hover mt-5 font"
                        >
                          <thead>
                            <tr>
                              <th class="text-secondary">اسم المنتج</th>
                              <th class="text-secondary">اسم التاجر</th>
                              <th class="text-secondary">الكمية</th>
                              <th class="text-secondary">السعر</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              class="tablefont"
                              v-for="purchase in purchases"
                              :key="purchase.id"
                            >
                              <th style="width: 200px">
                                {{ purchase.name }}
                              </th>
                              <td style="width: 200px">
                                {{ purchase.provider }}
                              </td>
                              <td style="width: 200px">
                                {{ purchase.amount }}
                              </td>
                              <td style="width: 200px">
                                {{ purchase.total_price }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PageLoader from "@/components/pageloader/PageLoader.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import axios from "axios";
// import $ from "jquery";
export default {
  name: "ReportsCom",
  components: { PageLoader },
  data() {
    return {
      loading: false,
      v$: useVuelidate(),
      doctors: [],
      providers: [],
      orders: [],
      purchases: [],
      required_date: "",
      doctor_id: "",
      provider_id: "",
      start_date: "",
      end_date: "",
      messege: "",
    };
  },
  validations() {
    return {
      start_date: { required },
      end_date: { required },
    };
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "login" });
    }
    this.getdoctors();
    this.getproviders();
    // this.getorders();
    // this.getpurshases();
    // this.purchasesteable();
    // this.ordertable();
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
      if (result.data.success == true) {
        this.doctors = result.data.doctors;
        console.log("doctors");
        console.log(this.doctors);
      }
      this.loading = false;
    },
    async getproviders() {
      this.loading = true;
      let token = localStorage.getItem("token");
      let result = await axios.get(`https://lab.almona.host/api/providers`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (result.data.success == true) {
        this.providers = result.data.providers;
        console.log("providers");
        console.log(this.providers);
      }
      this.loading = false;
    },
    // async getorders() {
    //   this.loading = true;
    //   let token = localStorage.getItem("token");
    //   let result = await axios.get(`https://lab.almona.host/api/orders`, {
    //     headers: {
    //       Authorization: "Bearer " + token,
    //     },
    //   });
    //   if (result.status == 200) {
    //     console.log(result.data);
    //     console.log("orders");
    //     this.orders = result.data.orders;
    //   }
    //   this.loading = false;
    // },
    // async getpurshases() {
    //   this.loading = true;
    //   let token = localStorage.getItem("token");
    //   let result = await axios.get(`https://lab.almona.host/api/purchases`, {
    //     headers: {
    //       Authorization: "Bearer " + token,
    //     },
    //   });
    //   if (result.status == 200) {
    //     console.log(result.data);
    //     console.log("purchases");
    //     this.purchases = result.data.purchases;
    //   }
    //   this.loading = false;
    // },

    // ordertable() {
    //   $(document).ready(function () {
    //     $("#order").click(function () {
    //       $("#order_table").slideToggle(200);
    //     });
    //   });
    // },
    // purchasesteable() {
    //   $(document).ready(function () {
    //     $("#purshases").click(function () {
    //       $("#purshases_table").slideToggle(200);
    //     });
    //   });
    // },
    // print() {
    //   window.print();
    // },
    async ordersreports() {
      let token = localStorage.getItem("token");
      console.log("add purchases function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        let result = await axios.post(
          `https://lab.almona.host/api/orderReports`,
          {
            start_date: this.start_date,
            end_date: this.end_date,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(result);
        if (result.data.success == true) {
          this.orders = result.data.orders;
          setTimeout(() => {
            this.start_date = "";
            this.end_date = "";
            this.v$.start_date.$errors[0].$message = "";
            this.v$.end_date.$errors[0].$message = "";
          });
        } else {
          console.log("data false");
          this.messege = result.data.message;
          setTimeout(() => {
            this.messege = "";
          }, 5000);
        }
      } else {
        console.log("form validated faild");
      }
    },

    async purchasesreports() {
      let token = localStorage.getItem("token");
      console.log("add purchases function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        let result = await axios.post(
          `https://lab.almona.host/api/purchaseReports`,
          {
            start_date: this.start_date,
            end_date: this.end_date,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(result);
        if (result.data.success == true) {
          this.purchases = result.data.purchases;
          setTimeout(() => {
            this.start_date = "";
            this.end_date = "";
            this.v$.start_date.$errors[0].$message = "";
            this.v$.end_date.$errors[0].$message = "";
          });
        } else {
          console.log("data false");
          this.messege = result.data.message;
          setTimeout(() => {
            this.messege = "";
          }, 5000);
        }
      } else {
        console.log("form validated faild");
      }
    },
  },
};
</script>

<style scoped>
/* #order_table {
  display: none;
}
#purshases_table {
  display: none;
} */
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
.dropdownfont {
  font-size: 10px !important;
  font-weight: 500;
  color: #322a7d !important;
}
.buttons {
  height: 95px;
  background-color: #322a7d;
  border: none;
  border-radius: 20px;
}
/* @media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 auto;
    width: 49.333333%;
  }
} */
/* @media (min-width: 1224px) {
  .col-lg-3 {
    flex: 0 0 auto;
    width: 33.333333%;
  }
  .table-section {
    height: fit-content;
  }
} */

.table-section {
  background-color: #ffffff;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px;
  height: 300px;
  overflow: scroll;
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
.tablefont {
  font-size: 10px !important;
  font-weight: 600;
  color: #322a7d !important;
}
.table thead th {
  color: #ced4da;
  /* width: 100px; */
  width: 125px;
}
.sidecontent {
  background-color: #ffffff;
  padding-top: 10px;
  border: 1px solid transparent;
  border-radius: 20px;
}
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
/* scroll css */
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 1px;
  border-radius: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(136, 136, 136, 0.568);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
