<template>
  <div>
    <div>
      <div class="wrapper">
        <main role="main" class="main-content">
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="row align-items-center mb-2">
                  <div class="col-lg-8">
                    <h2 class="h5 page-title">orders!</h2>
                    <!-- info small box -->
                    <div class="row">
                      <!-- اضافة طلب -->
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div class="card shadow" style="border-radius: 20px">
                          <button class="text-white buttons">
                            <div class="card-body">
                              <div class="row align-items-center">
                                <!-- content -->
                                <div class="col">
                                  <p class="text-end mb-0 fw-bold">اضافة طلب</p>
                                  <p class="text-end mb-0 fontsize">
                                    اضافة طلب جديد للمعالجة
                                  </p>
                                </div>
                                <!-- section -->
                                <div
                                  class="col-auto ms-lg-3"
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
                      <!-- اضافة طبيب -->
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-4 text-white">
                        <div class="card shadow" style="border-radius: 20px">
                          <button class="text-white buttons">
                            <div class="card-body">
                              <div class="row align-items-center">
                                <!-- content -->
                                <div class="col">
                                  <p class="text-end mb-0 fw-bold">
                                    اضافة طبيب
                                  </p>
                                  <p class="text-end mb-0 fontsize">
                                    اضافة طبيب جدبد الي قائمة الاطباء
                                  </p>
                                </div>
                                <!-- section -->
                                <div
                                  class="col-auto ms-lg-3"
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
                      <div class="col-lg-4 col-md-6 col-sm-12 mb-4 text-white">
                        <div class="card shadow" style="border-radius: 20px">
                          <button class="text-white buttons">
                            <div class="card-body">
                              <div class="row align-items-center">
                                <!-- content -->
                                <div class="col">
                                  <p class="text-end mb-0 fw-bold">المشتريات</p>
                                  <p class="text-end mb-0 fontsize">
                                    اضافة مشتريات جديدة الي قائمة المشتريات
                                  </p>
                                </div>
                                <!-- section -->
                                <div
                                  class="col-auto ms-lg-3"
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
                  </div>
                  <div class="col-lg-4">
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
                            <h2 class="mb-0">دياب</h2>
                            <p>
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing.
                            </p>
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
                        <h5>ملخص الاحصائيات</h5>
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
                        <span class="float-start showall"
                          ><strong
                            ><a href="" class="fw-bold">عرض الكل</a></strong
                          >
                        </span>
                      </div>
                      <!-- doctors section -->
                      <div class="mt-4">
                        <div
                          class="row d-flex justify-content-around"
                          v-for="doctor in doctors.slice(0, 5)"
                          :key="doctor"
                        >
                          <div class="col-4 p-0">
                            <div class="text-center">
                              <img
                                src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg"
                                width="50"
                                class="roundedd"
                              />
                            </div>
                          </div>
                          <div class="col-8 p-0">
                            <div>
                              <h6 class="mb-0 text-black fw-bold">
                                د/ معتز العسقلاني
                              </h6>
                              <p class="text-secondary address">
                                شارع الجيش-مصر للطيران
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
  </div>
</template>

<script>
export default {
  name: "OrdersCom",
  data() {
    return {
      doctors: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    };
  },
};
</script>

<style scoped>
.card {
  overflow: hidden;
  border: none;
}
.buttons {
  height: 120px;
  background-color: #322a7d;
  border: none;
  border-radius: 20px;
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
}

/********search******/
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
.address {
  font-size: 13px;
}
</style>
