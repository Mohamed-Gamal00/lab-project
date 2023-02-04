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
                    <span style="color: #322a7d"
                      ><span><FontAwesome icon="user-doctor" />الأطباء</span>
                    </span>
                    <span class="float-start">
                      <button
                        v-if="type == '1'"
                        @click="openModal()"
                        type="button"
                        class="btn btn-primary"
                        style="background-color: #322a7d; border: none"
                      >
                        اضافة طبيب
                        <span
                          ><FontAwesome style="color: orange" icon="user-plus"
                        /></span>
                      </button>
                    </span>
                  </div>
                  <!-- table -->
                  <div v-if="loading">
                    <h1>loooding.....</h1>
                    <PageLoader />
                  </div>
                  <table class="table mt-lg-3">
                    <div v-if="doctors.length > 0">
                      <span class="small fw-bold"
                        >العدد ({{ doctors.length }})</span
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
                              width="60"
                              height="60"
                              class="rounded-circle"
                            />
                          </div>
                        </td>
                        <!-- name & name_address -->
                        <td style="" class="name_address">
                          <div class="mt-2 font">
                            <span class="mb-0 text-black fw-bold">
                              <strong>د/ {{ doctor.name }}</strong>
                            </span>
                            <p class="text-secondary small mt-2">
                              <span><FontAwesome icon="location-dot" /></span>
                              {{ doctor.address }}
                            </p>
                          </div>
                        </td>
                        <!-- phone number -->
                        <td>
                          <button
                            type="button"
                            class="btn fw-bold font p-1 button_number"
                            style="background-color: #84e0be"
                          >
                            <span class="bi-ICON-NAME">
                              <span
                                ><FontAwesome
                                  class="btn p-1 FontAwesome"
                                  icon="phone" /></span></span
                            >&nbsp;{{ doctor.number }}
                          </button>
                        </td>
                        <!-- date & edit -->
                        <td>
                          <div class="float-start font">
                            <span class="fw-bold">
                              {{ moment(doctor.created_at).format("L") }}</span
                            >
                            <span class="d-block">
                              <div class="dropdown" v-if="type == '1'">
                                <button
                                  class="btn mt-2 text-white dropdown-toggle"
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
                                      @click="
                                        openeditModal(), EditDoctor(doctor)
                                      "
                                      class="dropdown-item"
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
                        <!-- عدد الطلبات -->
                        <td>
                          <div
                            class="text-center font"
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
                  <!-- modal popup add doctor -->
                  <transition name="fade">
                    <div class="modall" v-if="show">
                      <!-- <div class="modal__backdrop" @click="closeModal()"> -->
                      <div class="modal__backdrop">
                        <div class="modal__dialog">
                          <div class="modal__body">
                            <slot name="body" />
                            <div class="">
                              <!-- header -->
                              <div class="d-inline">
                                <h5
                                  class="fw-bold text-center"
                                  style="color: #322a7d"
                                >
                                  اضافة دكتور
                                </h5>
                                <p class="text-center">
                                  اضف طبيب جديد الي قائمة الاطباء
                                </p>
                              </div>
                              <!-- body -->
                              <div class="">
                                <form>
                                  <!-- صورة الدكتور -->
                                  <div class="row g-3 align-items-center">
                                    <div class="col-auto d-block mx-auto m-3">
                                      <input
                                        type="file"
                                        ref="file"
                                        @change="selectFile()"
                                      />
                                    </div>
                                  </div>
                                  <!-- <h1> اسم لطبيب </h1> -->
                                  <div class="row g-3 align-items-center">
                                    <div class="col-auto d-block mx-auto m-3">
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="اسم لطبيب"
                                        v-model="name"
                                      />
                                      <span
                                        class="erroe-feedbak"
                                        v-if="v$.name.$error"
                                        >{{ v$.name.$errors[0].$message }}</span
                                      >
                                    </div>
                                  </div>
                                  <!-- رقم الهاتف -->
                                  <div class="row g-3 align-items-center">
                                    <div class="col-auto d-block mx-auto m-3">
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="رقم الهاتف"
                                        v-model="number"
                                      />
                                      <span
                                        class="erroe-feedbak"
                                        v-if="v$.number.$error"
                                        >{{
                                          v$.number.$errors[0].$message
                                        }}</span
                                      >
                                    </div>
                                  </div>
                                  <!-- <h1> عنوان لطبيب </h1> -->
                                  <div class="row g-3 align-items-center">
                                    <div class="col-auto d-block mx-auto m-3">
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="عنوان لطبيب"
                                        v-model="address"
                                      />
                                      <span
                                        class="erroe-feedbak"
                                        v-if="v$.address.$error"
                                        >{{
                                          v$.address.$errors[0].$message
                                        }}</span
                                      >
                                    </div>
                                  </div>
                                  <!-- footer -->
                                  <div class="modal__footer">
                                    <button
                                      class="btn"
                                      type="button"
                                      @click="AddDoctor()"
                                    >
                                      اضف الان
                                    </button>
                                    <button
                                      class="btn"
                                      type="button"
                                      @click="closeModal(), ResetDoctors()"
                                    >
                                      اغلاق
                                    </button>
                                    <br />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                  <!-- modal popup edit doctor -->
                  <transition name="fade">
                    <div class="modall" v-if="edit">
                      <!-- <div class="modal__backdrop" @click="closeModal()"> -->
                      <div class="modal__backdrop">
                        <div class="modal__dialog">
                          <div class="modal__body">
                            <slot name="body" />
                            <!-- <div class="modal__header">
                              <slot name="header" />
                              <button
                                type="button"
                                class="modal__close"
                                @click="closeModal()"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 352 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                                  ></path>
                                </svg>
                              </button>
                            </div> -->
                            <div class="">
                              <!-- header -->
                              <div class="modal-header d-inline">
                                <h5
                                  class="modal-title fw-bold text-center"
                                  style="color: #322a7d"
                                  id="exampleModalLabel"
                                >
                                  تعديل
                                </h5>
                              </div>
                              <!-- body -->
                              <div class="">
                                <form>
                                  <!-- صورة الدكتور -->
                                  <!-- <div class="row g-3 align-items-center">
                                    <div class="col-auto d-block mx-auto m-3">
                                      <input
                                        type="file"
                                        ref="file"
                                        @change="selectFile()"
                                      />
                                    </div>
                                  </div> -->
                                  <!-- <h1> اسم لطبيب </h1> -->
                                  <div class="row g-3 align-items-center">
                                    <div class="col-auto d-block mx-auto m-3">
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="اسم لطبيب"
                                        v-model="name"
                                      />
                                      <span
                                        class="erroe-feedbak"
                                        v-if="v$.name.$error"
                                        >{{ v$.name.$errors[0].$message }}</span
                                      >
                                    </div>
                                  </div>
                                  <!-- رقم الهاتف -->
                                  <div class="row g-3 align-items-center">
                                    <div class="col-auto d-block mx-auto m-3">
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="رقم الهاتف"
                                        v-model="number"
                                      />
                                      <span
                                        class="erroe-feedbak"
                                        v-if="v$.number.$error"
                                        >{{
                                          v$.number.$errors[0].$message
                                        }}</span
                                      >
                                    </div>
                                  </div>
                                  <!-- <h1> عنوان لطبيب </h1> -->
                                  <div class="row g-3 align-items-center">
                                    <div class="col-auto d-block mx-auto m-3">
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="عنوان لطبيب"
                                        v-model="address"
                                      />
                                      <span
                                        class="erroe-feedbak"
                                        v-if="v$.address.$error"
                                        >{{
                                          v$.address.$errors[0].$message
                                        }}</span
                                      >
                                    </div>
                                  </div>
                                  <br />
                                  <!-- footer -->
                                  <button
                                    class="btn"
                                    type="button"
                                    @click="UpdateDoctor()"
                                  >
                                    تعديل
                                  </button>
                                  <button
                                    class="btn"
                                    type="button"
                                    @click="closeEditModal(), ResetDoctors()"
                                  >
                                    اغلاق
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>

                  <!-- modal popup edit doctor -->
                  <!-- <div class="root">
                    <teleport to="body">
                      <div class="modalpopup" v-if="edit">
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
                            <form>
                              <div class="row g-3 align-items-center">
                                <div class="col-auto d-block mx-auto m-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="اسم لطبيب"
                                    v-model="name"
                                  />
                                  <span
                                    class="erroe-feedbak"
                                    v-if="v$.name.$error"
                                    >{{ v$.name.$errors[0].$message }}</span
                                  >
                                </div>
                              </div>
                              <div class="row g-3 align-items-center">
                                <div class="col-auto d-block mx-auto m-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="رقم الهاتف"
                                    v-model="number"
                                  />
                                  <span
                                    class="erroe-feedbak"
                                    v-if="v$.number.$error"
                                    >{{ v$.number.$errors[0].$message }}</span
                                  >
                                </div>
                              </div>
                              <div class="row g-3 align-items-center">
                                <div class="col-auto d-block mx-auto m-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="عنوان لطبيب"
                                    v-model="address"
                                  />
                                  <span
                                    class="erroe-feedbak"
                                    v-if="v$.address.$error"
                                    >{{ v$.address.$errors[0].$message }}</span
                                  >
                                </div>
                              </div>
                              <br />
                            </form>
                          </div>
                          <button class="btn" @click="UpdateDoctor()">
                            تعديل
                          </button>
                          <button
                            class="btn"
                            @click="(editDoctorOpen = false), ResetDoctors()"
                          >
                            اغلاق
                          </button>
                        </div>
                      </div>
                    </teleport>
                  </div> -->
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
import PageLoader from "@/components/pageloader/PageLoader.vue";
var moment = require("moment");
// moment.locale("ar_SA");
import useVuelidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
export default {
  name: "DoctorsCom",
  components: { PageLoader },
  data() {
    return {
      loading: false,
      show: false,
      edit: false,
      editDoctorOpen: false,
      moment: moment,
      doctors: [],
      v$: useVuelidate(),
      image: "",
      name: "",
      number: "",
      address: "",
      user_id: "",
      type: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: maxLength(15) },
      number: { required, minLength: maxLength(11) },
      address: { required, minLength: maxLength(15) },
    };
  },
  /* get */
  async mounted() {
    this.loading = true;
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "login" });
    }
    this.type = JSON.parse(user).type;

    let token = localStorage.getItem("token");
    let result = await axios
      .get(`https://lab.almona.host/api/doctors`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .catch((err) => {
        console.log(err);
      });
    if (result.data.success == true) {
      this.doctors = result.data.doctors;
    }
    this.loading = false;
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    closeEditModal() {
      this.edit = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openeditModal() {
      this.edit = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    selectFile() {
      this.image = this.$refs.file.files[0];
    },
    async loaddoctors() {
      this.loading = true;
      let token = localStorage.getItem("token");
      let result = await axios.get(`https://lab.almona.host/api/doctors`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (result.data.success == true) {
        console.log(result.data);
        this.doctors = result.data.doctors;
      }
      this.loading = false;
    },
    async AddDoctor() {
      // console.log(this.image);
      console.log("add doctor function");
      this.v$.$validate();
      if (!this.v$.$error) {
        let token = localStorage.getItem("token");
        let result = await axios.post(
          `https://lab.almona.host/api/add_doctor`,
          {
            name: this.name,
            number: this.number,
            address: this.address,
            image: this.image,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setTimeout(() => {
          this.name = "";
          this.number = "";
          this.address = "";
          this.image = "";
          this.v$.number.$errors[0].$message = "";
          this.v$.name.$errors[0].$message = "";
          this.v$.address.$errors[0].$message = "";
        }, 1000);
        console.log(result);
        if (result.data.success == true) {
          console.log("data true");
          this.closeModal();
          this.loaddoctors();
        } else {
          console.log("data false");
        }
      } else {
        console.log("form validated faild");
      }
    },
    ResetDoctors() {
      this.name = "";
      this.number = "";
      this.address = "";
      this.image = "";
    },
    async DeleteDoctor(id) {
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
            let token = localStorage.getItem("token");
            console.log("delete doctor");
            axios.post(`https://lab.almona.host/api/del_doctor/${id}`, {
              headers: {
                Authorization: "Bearer " + token,
              },
            });

            this.$swal.fire(
              "حذف!",
              "تم حذف العنصر بنجاح.",
              "success",
              this.loaddoctors()
            );
            this.loaddoctors();
          }
        });
    },
    async EditDoctor(doctor) {
      this.user_id = doctor.id;
      // this.image = doctor.image;
      this.name = doctor.name;
      this.number = doctor.number;
      this.address = doctor.address;
      console.log("EditDoctor call success");
      console.log("edit doctor");
      if (!this.v$.$error) {
        console.log("validated");
        let editresult = await axios.post(
          `https://lab.almona.host/api/user/edit/${this.user_id}`,
          {
            name: this.name,
            // image: this.image,
            number: this.number,
            address: this.address,
          }
        );
        console.log(editresult);
      } else {
        console.log("not validate");
      }
    },
    async UpdateDoctor() {
      console.log("update doctor function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        let token = localStorage.getItem("token");
        let result = await axios.post(
          `https://lab.almona.host/api/edit_doctor/${this.user_id}`,
          {
            // image: this.image
            name: this.name,
            number: this.number,
            address: this.address,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setTimeout(() => {
          this.name = "";
          this.number = "";
          this.address = "";
          this.v$.number.$errors[0].$message = "";
          this.v$.name.$errors[0].$message = "";
          this.v$.address.$errors[0].$message = "";
        }, 1000);
        console.log(result);
        if (result.data.success == true) {
          console.log("data updated succesfuly");
          this.closeEditModal();
          this.loaddoctors();
        } else {
          console.log("data false");
        }
      } else {
        console.log("form validated faild");
      }
    },
  },
};
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 600px) {
  table tr td {
    width: 200px;
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .button_number {
    margin-bottom: 21px;
    font-size: 10px;
    width: 90px;
  }
  .button_number .FontAwesome {
    font-size: 10px;
  }
  .name_address {
    width: 200px;
  }
  .name_address span {
    font-size: 10px;
  }
  .font {
    width: 164px;
  }
}
/* Large devices (laptops/desktops, 992px and up) */

@media only screen and (min-width: 992px) {
  .button_number {
    margin-bottom: 21px;
  }
  .name_address {
    width: 230px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .button_number {
    margin-bottom: 21px;
  }
  .name_address {
    width: 230px;
  }
}
</style>
