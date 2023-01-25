<template>
  <div>
    <div>
      <div class="wrapper">
        <main role="main" class="main-content">
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="row align-items-center mb-2">
                  <!-- header -->
                  <div class="fw-bold fs-4 mt-lg-4 mb-3">
                    <span style="color: #322a7d"
                      ><span><FontAwesome icon="cart-plus" />الطلبات</span>
                    </span>
                    <span class="float-start">
                      <router-link :to="{ name: 'addorder' }">
                        <button
                          type="button"
                          class="btn btn-primary text-white"
                          style="background-color: #322a7d; border: none"
                        >
                          اضافة طلب
                          <span
                            ><FontAwesome
                              style="color: orange"
                              icon="cart-plus"
                          /></span>
                        </button>
                      </router-link>
                    </span>
                  </div>
                  <!-- table -->
                  <!-- doctor details -->
                  <div class="" v-for="order in orders" :key="order.id">
                    <!-- 1 -->
                    <div class="p-1">
                      <div
                        class="row p-2"
                        style="
                          border: 1px solid transparent;
                          border-radius: 20px;
                          background-color: white;
                        "
                      >
                        <!-- tables -->
                        <div class="">
                          <table
                            class="table table-striped table-hover font-lg"
                          >
                            <!--table Head -->
                            <thead>
                              <tr>
                                <th scope="col" class="text-secondary">
                                  رقم الطلب
                                </th>
                                <th scope="col" class="text-secondary">
                                  الدكتور
                                </th>
                                <th
                                  style="width=30%"
                                  scope="col"
                                  class="text-secondary"
                                >
                                  اسم الحالة
                                </th>
                                <th scope="col" class="text-secondary">
                                  تاريخ الاضافة
                                </th>
                                <th scope="col" class="text-secondary">
                                  لون الضرس
                                </th>
                                <th scope="col" class="text-secondary">
                                  السعر
                                </th>
                                <th scope="col" class="text-secondary">
                                  التفاصيل
                                </th>
                              </tr>
                            </thead>
                            <!--table body get data-->
                            <tbody>
                              <tr>
                                <!-- رقم الطلب -->
                                <th scope="row">
                                  <div class="th_width">
                                    {{ order.patient_no }}
                                  </div>
                                </th>
                                <!-- اسم الدكتور -->
                                <td style="width: 20%">
                                  <div class="text-end th_width">
                                    <span>
                                      <img
                                        :src="order.image"
                                        width="40"
                                        height="40"
                                        class="rounded-circle"
                                      />
                                    </span>
                                    <span class="d-inline m-1">{{
                                      order.doctor
                                    }}</span>
                                  </div>
                                </td>
                                <!-- اسم المريض -->
                                <td style="width: 20%">
                                  <div class="th_width">
                                    {{ order.patient_name }}
                                  </div>
                                </td>
                                <!-- تاريخ الاضافة -->
                                <td>
                                  <div class="th_width">
                                    {{ order.created_at }}
                                  </div>
                                </td>
                                <!-- لون الضرس -->
                                <td>
                                  <div
                                    style="
                                      width: 30px;
                                      height: 30px;
                                      margin-right: 20px;
                                    "
                                    :style="order.hex"
                                  ></div>
                                </td>
                                <!-- السعر -->
                                <td>
                                  <div class="th_width">
                                    {{ order.price }}
                                  </div>
                                </td>
                                <!-- التفاصيل -->
                                <td>
                                  <div class="th_width">
                                    <button
                                      class="btn bg-transparent p-lg-0"
                                      @click="order.open = !order.open"
                                      style="background-color: #322a7d"
                                    >
                                      التفاصيل
                                      <span
                                        ><FontAwesome
                                          style="color: #322a7d"
                                          icon="circle-chevron-down"
                                      /></span>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div class="row font" v-show="order.open">
                            <!-- اسم الدكتور والعنوان تاريخ ا لاضافة العديل والحذف  -->
                            <div class="col-lg-3 col-md-3 col-sm-12 mb-3">
                              <div class="d-flex position-relative">
                                <!-- img -->
                                <span>
                                  <img
                                    :src="order.image"
                                    width="60"
                                    height="60"
                                    class="rounded-circle"
                                  />
                                </span>
                                <!-- doctor name & address -->
                                <div class="me-lg-2">
                                  <p class="mt-0 font-lg mb-0">
                                    <strong>د/ {{ order.doctor }}</strong>
                                  </p>
                                  <p>
                                    <span
                                      ><FontAwesome icon="location-dot"
                                    /></span>
                                    {{ order.address }}
                                  </p>
                                  <p class="m-0 p-0">تاريخ الاضافة</p>
                                  <p class="fw-bold text-black">
                                    {{ order.created_at }}
                                  </p>
                                </div>
                              </div>
                              <!-- التعديل و الحذف-->
                              <div class="mt-5">
                                <span class="m-1 p-0">
                                  <button
                                    type="button"
                                    @click="
                                      Editorder(order), (edit_purchases = true)
                                    "
                                    class="btn btn-outline-success"
                                  >
                                    تعديل
                                  </button>
                                </span>
                                <span class="m-1 p-0"
                                  ><button
                                    type="button"
                                    @click="DeleteOrder(order.id)"
                                    class="btn btn-outline-danger"
                                  >
                                    حذف
                                  </button>
                                </span>
                              </div>
                            </div>
                            <!-- اسم الحالة و ميعاد الطلب -->
                            <div class="col-lg-2 col-md-2 col-sm-12">
                              <div class="">
                                <ul class="p-0">
                                  <!-- اسم الحالة -->
                                  <li class="text-secondary fw-bold">
                                    <p class="m-0 p-0">اسم الحالة</p>
                                    <p class="fw-bold text-black">
                                      {{ order.patient_name }}
                                    </p>
                                  </li>
                                  <!-- ميعاد الطلب -->
                                  <li class="text-secondary fw-bold">
                                    <p class="m-0 p-0">ميعاد الطلب</p>
                                    <p class="fw-bold text-black">
                                      {{ order.required_date }}
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <!-- الضرس -->
                            <div class="col-lg-2 col-md-2 col-sm-12">
                              <div>
                                <ul class="p-0 text-end fw-bold">
                                  <li class="text-secondary fw-bold">الضرس</li>
                                  <li>{{ order.type }}</li>
                                </ul>
                              </div>
                            </div>
                            <!-- السعر -->
                            <div class="col-lg-2 col-md-2 col-sm-12">
                              <div class="">
                                <ul class="p-0 text-end">
                                  <li class="text-secondary fw-bold">السعر</li>
                                  <li class="mt-3">{{ order.price }}</li>
                                </ul>
                              </div>
                            </div>
                            <!-- شكل الاسنان -->
                            <div class="col-3 col-md-3 col-sm-12">
                              <div class="text-center">
                                <img
                                  src=""
                                  alt="img"
                                  width="180"
                                  class="rounded"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <button
                    @click="(edit_purchases = true), Editorder(order)"
                    type="button "
                  >
                    edit
                  </button> -->
                  <!-- modal popup edit-->
                  <div class="root">
                    <teleport to="body">
                      <div class="modalpopup" v-if="edit_purchases">
                        <div class="text-center">
                          <div class="modal-header d-inline">
                            <h5
                              class="modal-title fw-bold text-center"
                              style="color: #322a7d"
                              id="exampleModalLabel"
                            >
                              تعديل
                            </h5>
                          </div>
                          <div class="modal-body">
                            test
                            <form>
                              <div class="row g-3 align-items-center">
                                <div class="col-auto d-block mx-auto m-3">
                                  <select
                                    class="form-select"
                                    v-model="doctor_id"
                                  >
                                    <option disabled value="">
                                      اسم الدكتور
                                    </option>
                                    <option
                                      :value="doctor.id"
                                      v-for="doctor in doctors"
                                      :key="doctor.id"
                                    >
                                      {{ doctor.name }}
                                    </option>
                                  </select>
                                  <span
                                    class="erroe-feedbak"
                                    v-if="v$.doctor_id.$error"
                                    >{{
                                      v$.doctor_id.$errors[0].$message
                                    }}</span
                                  >
                                </div>
                              </div>
                              <div class="row g-3 align-items-center">
                                <div class="col-auto d-block mx-auto m-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="اسم الحالة"
                                    v-model="patient_name"
                                  />
                                  <span
                                    class="erroe-feedbak"
                                    v-if="v$.patient_name.$error"
                                    >{{
                                      v$.patient_name.$errors[0].$message
                                    }}</span
                                  >
                                </div>
                              </div>
                              <div class="row g-3 align-items-center">
                                <div class="col-auto d-block mx-auto m-3">
                                  <input
                                    type="date"
                                    class="form-control"
                                    placeholder="ميعاد الطلب"
                                    v-model="required_date"
                                  />
                                  <span
                                    class="erroe-feedbak"
                                    v-if="v$.required_date.$error"
                                    >{{
                                      v$.required_date.$errors[0].$message
                                    }}</span
                                  >
                                </div>
                              </div>
                              <div class="row g-3 align-items-center">
                                <div class="col-auto d-block mx-auto m-3">
                                  <div class="form-outline">
                                    <textarea
                                      class="form-control"
                                      id="textAreaExample1"
                                      placeholder="ملاحظات"
                                      rows="4"
                                      v-model="notes"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div class="row g-3 align-items-center">
                                <div class="col-auto d-block mx-auto m-3">
                                  <select
                                    class="form-select"
                                    v-model="color_id"
                                  >
                                    <option disabled value="">اللون</option>
                                    <option
                                      v-for="color in colors"
                                      :value="color.id"
                                      :key="color.id"
                                    >
                                      {{ color.name }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div class="row g-3 align-items-center">
                                <div class="col-auto d-block mx-auto m-3">
                                  <select class="form-select" v-model="type_id">
                                    <option disabled value="">النوع</option>
                                    <option
                                      v-for="type in types"
                                      :key="type.id"
                                      :value="type.id"
                                    >
                                      {{ type.name }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </teleport>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
export default {
  name: "OrdersCom",
  data() {
    return {
      edit_purchases: false,
      open: false,
      orders: [],
      colors: [],
      doctors: [],
      types: [],
      v$: useVuelidate(),
      doctor_id: "",
      type_id: "",
      color_id: "",
      patient_name: "",
      notes: "",
      required_date: "",
    };
  },
  validations() {
    return {
      patient_name: { required, minLength: maxLength(20) },
      doctor_id: { required },
      required_date: { required },
      notes: { required },
    };
  },
  async mounted() {
    let result = await axios.get(`https://lab.almona.host/api/orders`);
    this.orders = result.data.orders;
    console.log("colors");
    let resultcolor = await axios.get(`https://lab.almona.host/api/colors`);
    if (resultcolor.status == 200) {
      console.log(resultcolor.data);
      this.colors = resultcolor.data.colors;
    }
    console.log("doctors");
    let resultdoc = await axios.get(`https://lab.almona.host/api/doctors`);
    if (result.data.success == true) {
      console.log(resultdoc.data);
      this.doctors = resultdoc.data.doctors;
    }
    console.log("types");
    let resulttypes = await axios.get(`https://lab.almona.host/api/types`);
    if (resulttypes.data.success == true) {
      console.log(resulttypes.data);
      this.types = resulttypes.data.types;
    }
  },
  methods: {
    async loadeorders() {
      let result = await axios.get(`https://lab.almona.host/api/orders`);
      if (result.data.success == true) {
        this.orders = result.data.orders;
      }
    },
    async DeleteOrder(id) {
      this.$swal
        .fire({
          title: "هل انت متاكد من حذف هذا العنصر",
          text: "لن تتمكن من الرجوع مجددا!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#322a7d",
          cancelButtonColor: "#d33",
          confirmButtonText: "حذف",
          cancelButtonText: "الغاء",
        })
        .then((result) => {
          if (result.isConfirmed) {
            console.log("delete doctor");
            axios.post(`https://lab.almona.host/api/del_order/${id}`);

            this.$swal.fire(
              "حذف!",
              "تم حذف العنصر بنجاح.",
              "success",
              this.loadeorders()
            );
            this.loadeorders();
          }
        });
      // let result = await axios.post(
      //   `https://lab.almona.host/api/del_order/${id}`
      // );
      // if (result.data.success == true) {
      //   console.log(" provider deleted succesfuly");
      //   this.loadeorders();
      // } else {
      //   console.log("faild to delete provider");
      // }
    },
    async Editorder(order) {
      this.patient_name = order.patient_name;
      this.notes = order.notes;
      this.required_date = order.required_date;
      this.doctor_id = order.doctor_id;
      this.type_id = order.type_id;
      this.color_id = order.color_id;
      console.log("done open editorder");
      // this.$router.push({ name: "editorder" });
    },
  },
};
</script>

<style scoped>
ul li {
  list-style: none;
}
table tbody tr td {
  color: #322a7d !important;
}
.font-lg {
  color: #322a7d;
  font-weight: 700;
  font-size: 13px !important;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  table tr td {
    width: 120px;
    font-size: 10px;
  }
  table thead tr th {
    font-size: 10px;
  }
  table tbody tr .th_width {
    width: 130px;
  }
}
/* Extra larg devices (labtops, 600px and up) */
@media only screen and (min-width: 600px) {
  table thead tr th {
    width: 135px;
  }
  .table-striped > tbody > tr:nth-of-type(odd) > * {
    padding: 10px 10px;
  }
}
</style>
