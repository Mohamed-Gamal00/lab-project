<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row align-items-center mb-2">
                <div class="col">
                  <!-- header -->
                  <div class="fw-bold fs-4 mt-lg-4">
                    <span
                      ><span><FontAwesome icon="user-doctor" />الأطباء</span>
                    </span>
                    <span class="float-start">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        style="background-color: #322a7d; border: none"
                        data-bs-target="#exampleModal"
                      >
                        اضافة طبيب
                        <span
                          ><FontAwesome style="color: orange" icon="user-plus"
                        /></span>
                      </button>
                    </span>
                  </div>
                  <!-- table -->
                  <table class="table mt-lg-3">
                    <div v-if="doctors.length > 0">
                      <span class="small"
                        >list of doctors ({{ doctors.length }})</span
                      >
                    </div>
                    <tbody>
                      <tr
                        v-for="doctor in doctors"
                        :key="doctor.id"
                        class="bg-white"
                      >
                        <!-- img -->
                        <td style="width: 71px">
                          <!-- img -->
                          <div class="text-end">
                            <img
                              :src="doctor.image"
                              width="71"
                              height="71"
                              class="rounded-circle"
                            />
                          </div>
                        </td>
                        <!-- name & address -->
                        <td style="width: 230px">
                          <div class="mt-2">
                            <span class="mb-0 text-black fw-bold">
                              <strong>د/ {{ doctor.name }}</strong>
                            </span>
                            <p class="text-secondary small address mt-2">
                              <span><FontAwesome icon="location-dot" /></span>
                              {{ doctor.address }}
                            </p>
                          </div>
                        </td>
                        <!-- phone number -->
                        <td>
                          <button
                            type="button"
                            class="btn fw-bold p-1 button_number"
                            style="background-color: #84e0be"
                          >
                            <span class="bi-ICON-NAME">
                              <span
                                ><FontAwesome
                                  class="btn p-1"
                                  icon="phone" /></span></span
                            >&nbsp;{{ doctor.number }}
                          </button>
                        </td>
                        <!-- date & edit -->
                        <td>
                          <div class="float-start">
                            <span class="fw-bold">
                              {{ moment(doctor.created_at).calendar() }}</span
                            >
                            <span class="d-block">
                              <div class="dropdown">
                                <button
                                  class="btn mt-4 btn-secondary dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  style="
                                    background-color: #322a7d;
                                    border: none;
                                  "
                                >
                                  خيارات
                                </button>
                                <ul
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  <li>
                                    <!-- Modal of edit button -->
                                    <button
                                      @click="EditDoctor(doctor)"
                                      class="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit"
                                    >
                                      تعديل
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      @click="DeleteDoctor(doctor.id)"
                                      class="dropdown-item"
                                    >
                                      حذف
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </span>
                          </div>
                        </td>
                        <td>
                          <div
                            class="text-center"
                            style="border-right: 1px solid #6c757d"
                          >
                            <span> عدد الطلبات </span>
                            <span class="d-block">
                              <h5 class="fw-bold mt-2">
                                {{ doctor.orders.length }}
                              </h5></span
                            >
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var moment = require("moment");
moment.locale("ar_SA");
export default {
  name: "DoctorsCom",
  data() {
    return {
      moment: moment,
      doctors: [],
    };
  },
  /* get */
  async mounted() {
    let result = await axios.get(`https://lab.almona.host/api/doctors`);
    if (result.data.success == true) {
      this.doctors = result.data.doctors;
      console.log("data lengtd is", result.data.doctors.lengtd);
    } else {
      console.log("faild data");
    }
  },
};
</script>

<style scoped>
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .button_number {
    margin-bottom: 21px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .button_number {
    margin-bottom: 21px;
  }
}
</style>
