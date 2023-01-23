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
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  الطلبات والمشتريات
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a id="order" class="dropdown-item">الطلبات</a>
                  </li>
                  <li>
                    <a id="purshases" class="dropdown-item">المشتريات</a>
                  </li>
                </ul>
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
                              class="text-end text-success mt-1 mb-0"
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
                              class="fe fe-32 fe-user text-muted mb-0"
                            ></span>
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
                              class="fe fe-32 fe-layers text-muted mb-0"
                            ></span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <!-- tebles -->
              <div class="row mt-4 font d-flex justify-content-center">
                <div class="col-6 d-flex justify-content-center">
                  <!-- tebles1 -->
                  <div
                    class="p-3 m-2 table-section"
                    id="order_table"
                    style="
                      width: 590px;
                      border: 1px solid transparent;
                      border-radius: 20px;
                      background-color: white;
                    "
                  >
                    <div class="">
                      <span class="float-end fw-bold"
                        ><strong>الطلبات</strong></span
                      >
                      <span class="float-start"
                        ><a class="fw-bold" href="#">عرض الكل</a></span
                      >
                    </div>
                    <table class="table table-striped table-hover mt-5">
                      <thead>
                        <tr>
                          <th scope="col" class="text-secondary">رقم الطلب</th>
                          <th scope="col" class="text-secondary">الدكتور</th>
                          <th scope="col" class="text-secondary">اسم الحالة</th>
                          <th scope="col" class="text-secondary">
                            تاريخ الاضافة
                          </th>
                          <th scope="col" class="text-secondary">السعر</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>دكتور</td>
                          <td>مرحبا</td>
                          <td>12/12/2022</td>
                          <td>200LE</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>دكتور</td>
                          <td>مرحبا</td>
                          <td>12/12/2022</td>
                          <td>200LE</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>دكتور</td>
                          <td>مرحبا</td>
                          <td>12/12/2022</td>
                          <td>200LE</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>دكتور</td>
                          <td>مرحبا</td>
                          <td>12/12/2022</td>
                          <td>200LE</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>دكتور</td>
                          <td>مرحبا</td>
                          <td>12/12/2022</td>
                          <td>200LE</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- table2 -->
                <div class="col-6 d-flex justify-content-center">
                  <!-- tebles2 -->
                  <div
                    class="p-3 m-2 table-section"
                    style="
                      width: 590px;
                      border: 1px solid transparent;
                      border-radius: 20px;
                      background-color: white;
                    "
                  >
                    <div class="">
                      <span class="float-end fw-bold"
                        ><strong>المشتريات</strong></span
                      >
                      <span class="float-start"
                        ><a class="fw-bold" href="#">عرض الكل</a></span
                      >
                    </div>
                    <table class="table table-striped table-hover mt-5">
                      <thead>
                        <tr>
                          <th scope="col" class="text-secondary">رقم الطلب</th>
                          <th scope="col" class="text-secondary">الدكتور</th>
                          <th scope="col" class="text-secondary">اسم الحالة</th>
                          <th scope="col" class="text-secondary">
                            تاريخ الاضافة
                          </th>
                          <th scope="col" class="text-secondary">السعر</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>دكتور</td>
                          <td>مرحبا</td>
                          <td>12/12/2022</td>
                          <td>200LE</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>دكتور</td>
                          <td>مرحبا</td>
                          <td>12/12/2022</td>
                          <td>200LE</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>دكتور</td>
                          <td>مرحبا</td>
                          <td>12/12/2022</td>
                          <td>200LE</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>دكتور</td>
                          <td>مرحبا</td>
                          <td>12/12/2022</td>
                          <td>200LE</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>دكتور</td>
                          <td>مرحبا</td>
                          <td>12/12/2022</td>
                          <td>200LE</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <p>This is a paragraph.</p>

              <button>Toggle between hide() and show()</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "ReportsCom",
  mounted() {
    $(document).ready(function () {
      $("#order").click(function () {
        $("#order_table").slideToggle();
      });
    });
  },
  methods: {
    print() {
      window.print();
    },
  },
};
</script>

<style scoped>
#order_table {
  display: none;
}
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
</style>
