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
                      <button
                        @click="AddUserOpen = true"
                        type="button"
                        class="btn btn-primary text-white"
                        style="background-color: #322a7d; border: none"
                      >
                        اضافة طلب
                        <span
                          ><FontAwesome style="color: orange" icon="cart-plus"
                        /></span>
                      </button>
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
                                        width="30"
                                        class="rounded-circle"
                                      />
                                    </span>
                                    <span class="d-inline">{{
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
                                      background-color: #fff;
                                      margin-right: 20px;
                                    "
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
                                <span>
                                  <img
                                    :src="order.image"
                                    width="50"
                                    class="rounded-circle"
                                  />
                                </span>
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
                                <span class="m-1 p-0"
                                  ><button
                                    type="button"
                                    class="btn btn-outline-success"
                                  >
                                    تعديل الطلب
                                  </button>
                                </span>
                                <span class="m-1 p-0"
                                  ><button
                                    type="button"
                                    class="btn btn-outline-danger"
                                  >
                                    حذف الطلب
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
export default {
  name: "OrdersCom",
  data() {
    return {
      open: false,
      orders: [
        {
          id: 1,
          patient_no: "INV-87239",
          order: 1,
          patient_name: "علي محمد علي",
          created_at: "19/22/2023",
          price: "350",
          image:
            "https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg",
          doctor: "mohamed gamal",
          required_date: "13/11/2003",
          address: "جديلة",
          type: 1,
        },
      ],
    };
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
