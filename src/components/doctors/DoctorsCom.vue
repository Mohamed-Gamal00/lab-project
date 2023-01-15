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
                        @click="AddDoctorOpen = true"
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
                              <div class="dropdown">
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
                                        (editDoctorOpen = true),
                                          EditDoctor(doctor)
                                      "
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
                        <!-- modal popup add doctor -->
                        <div class="root">
                          <teleport to="body">
                            <div class="modalpopup" v-if="AddDoctorOpen">
                              <div class="text-center">
                                <!-- header -->
                                <div class="modal-header d-inline">
                                  <h5
                                    class="modal-title fw-bold text-center"
                                    style="color: #322a7d"
                                    id="exampleModalLabel"
                                  >
                                    اضافة دكتور
                                  </h5>
                                  <p class="text-center">
                                    اضف طبيب جديد الي قائمة الاطباء
                                  </p>
                                </div>
                                <!-- body -->
                                <div class="modal-body">
                                  <form>
                                    <!-- <h1> اسم لطبيب </h1> -->
                                    <div class="row g-3 align-items-center">
                                      <div class="col-auto d-block mx-auto m-3">
                                        <input
                                          style="width: 231px"
                                          type="file"
                                          id="example-email"
                                          name="example-email"
                                          class="form-control"
                                          ref="myFile"
                                          @change="selectFile"
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
                                          >{{
                                            v$.name.$errors[0].$message
                                          }}</span
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
                                  </form>
                                </div>
                                <!-- footer -->
                                <button class="btn" @click="AddDoctor()">
                                  اضف الان
                                </button>
                                <button
                                  class="btn"
                                  @click="
                                    (AddDoctorOpen = false), ResetDoctors()
                                  "
                                >
                                  اغلاق
                                </button>
                              </div>
                            </div>
                          </teleport>
                        </div>
                        <!-- modal popup edit doctor -->
                        <div class="root">
                          <teleport to="body">
                            <div class="modalpopup" v-if="editDoctorOpen">
                              <div class="text-center">
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
                                <div class="modal-body">
                                  <form>
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
                                          >{{
                                            v$.name.$errors[0].$message
                                          }}</span
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
                                  </form>
                                </div>
                                <!-- footer -->
                                <button class="btn" @click="UpdateDoctor()">
                                  تعديل
                                </button>
                                <button
                                  class="btn"
                                  @click="
                                    (editDoctorOpen = false), ResetDoctors()
                                  "
                                >
                                  اغلاق
                                </button>
                              </div>
                            </div>
                          </teleport>
                        </div>
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
// moment.locale("ar_SA");
import useVuelidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
export default {
  name: "DoctorsCom",
  data() {
    return {
      AddDoctorOpen: false,
      editDoctorOpen: false,
      moment: moment,
      doctors: [],
      v$: useVuelidate(),
      image: "",
      name: "",
      number: "",
      address: "",
      doctor: {
        id: "",
        name: "",
        number: "",
        address: "",
      },
      user_id: "",
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
    let result = await axios.get(`https://lab.almona.host/api/doctors`);
    if (result.data.success == true) {
      this.doctors = result.data.doctors;
    }
  },
  methods: {
    selectFile() {
      this.image = this.$target.files[0];
    },
    async loaddoctors() {
      let result = await axios.get(`https://lab.almona.host/api/doctors`);
      if (result.data.success == true) {
        console.log(result.data);
        this.doctors = result.data.doctors;
      }
    },
    async AddDoctor() {
      console.log(this.image);
      console.log("add doctor function");
      this.v$.$validate();
      if (!this.v$.$error) {
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
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
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
          console.log("data true");
          this.AddDoctorOpen = false;
          this.loaddoctors();
        } else {
          console.log("data false");
        }
      } else {
        console.log("form validated faild");
      }
    },
    ResetDoctors() {
      this.user_id = "";
      this.name = "";
      this.number = "";
      this.provider.id = "";
      this.provider.name = "";
      this.provider.number = "";
    },
    async DeleteDoctor(id) {
      console.log("delete doctor");
      let result = await axios.post(
        `https://lab.almona.host/api/del_doctor/${id}`,
        {}
      );
      if (result.data.success == true) {
        console.log(" user deleted succesfuly");
        this.loaddoctors();
      } else {
        console.log("faild to delete user");
      }
    },
    async EditDoctor(doctor) {
      this.user_id = doctor.id;
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
        let result = await axios.post(
          `https://lab.almona.host/api/edit_doctor/${this.user_id}`,
          {
            name: this.name,
            number: this.number,
            address: this.address,
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
          this.editDoctorOpen = false;
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
