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
                      ><span><FontAwesome icon="user" />الاعضاء</span>
                    </span>
                    <span class="float-start">
                      <button
                        @click="AddDoctorOpen = true"
                        type="button"
                        class="btn btn-primary text-white"
                        style="background-color: #322a7d; border: none"
                      >
                        اضافة عضو
                        <span
                          ><FontAwesome style="color: orange" icon="user-plus"
                        /></span>
                      </button>
                    </span>
                  </div>
                  <!-- table -->
                  <table class="table mt-lg-3">
                    <div v-if="users.length > 0">
                      <span class="small fw-bold"
                        >العدد ({{ users.length }})</span
                      >
                    </div>
                    <tbody>
                      <tr v-for="user in users" :key="user.id" class="bg-white">
                        <!-- name -->
                        <td colspan="3">
                          <div class="fw-bold font">
                            <span><FontAwesome icon="user" /></span>
                            <span class="m-3">{{ user.name }}</span>
                          </div>
                        </td>
                        <!-- number -->
                        <td>
                          <button
                            type="button"
                            class="btn fw-bold p-1 button_number"
                            style="background-color: #84e0be"
                          >
                            <span class="bi-ICON-NAME">
                              <span
                                ><FontAwesome
                                  class="btn p-1 FontAwesome"
                                  icon="phone" /></span></span
                            >&nbsp;{{ user.number }}
                          </button>
                        </td>
                        <!-- date -->
                        <td>
                          <span class="d-block font"
                            ><span class="m-3 text-secondary"
                              >تاريخ الاضافة
                            </span>
                            {{ user.created_at }}
                          </span>
                        </td>
                        <!-- خيارات -->
                        <td>
                          <span class="d-block">
                            <!-- خيارات -->
                            <div class="dropdown">
                              <a
                                class="btn btn-secondary dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style="background-color: #322a7d; color: white"
                              >
                                خيارات
                              </a>

                              <ul
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuLink"
                              >
                                <li>
                                  <button
                                    @click="editUser(user)"
                                    type="button"
                                    class="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                  >
                                    تعديل
                                  </button>
                                </li>
                                <li>
                                  <a
                                    @click="deleteUser(user.id)"
                                    class="dropdown-item"
                                    href="#"
                                    >حذف</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </span>
                        </td>
                        <!-- modal popup add doctor root -->
                        <div class="root">
                          <teleport to="body">
                            <div class="modalpopup" v-if="AddDoctorOpen">
                              <div class="text-center">
                                <!-- header -->
                                <div class="modal-header d-inline">
                                  <h5
                                    class="modal-title fw-bold text-center"
                                    style="color: #322a7d"
                                  >
                                    اضافة عضو
                                  </h5>
                                  <p class="text-center">
                                    اضف عضو جديد الي قائمة الاعضاء
                                  </p>
                                </div>
                                <!-- body -->
                                <form>
                                  <!-- اسم العضو -->
                                  <div class="row g-3 align-items-center">
                                    <div class="col-auto d-block mx-auto m-3">
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="اسم العضو"
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
                                  <!-- كلمة المرور -->
                                  <div class="row g-3 align-items-center">
                                    <div class="col-auto d-block mx-auto m-3">
                                      <div class="">
                                        <input
                                          type="password"
                                          class="form-control"
                                          placeholder="كلمة المرور"
                                          v-model="password"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <!-- تأكيد كلمة المرور -->
                                  <div class="row g-3 align-items-center">
                                    <div class="col-auto d-block mx-auto m-3">
                                      <div class="mb">
                                        <input
                                          type="password"
                                          class="form-control"
                                          placeholder=" تأكيد كلمة المرور"
                                          v-model="confirm_password"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <br />
                                  <br />
                                  <!-- check box -->
                                  <div class="row g-3 align-items-center">
                                    <div class="col-auto d-block mx-auto m-3">
                                      نوع العضوية
                                      <div class="form-check">
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="flexRadioDefault1"
                                          value="1"
                                          :checked="userType == 1"
                                          v-model="userType"
                                        />
                                        <label
                                          class="form-check-label"
                                          for="flexRadioDefault1"
                                        >
                                          مسؤول
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="flexRadioDefault2"
                                          value="2"
                                          :checked="userType == 2"
                                          v-model="userType"
                                        />
                                        <label
                                          class="form-check-label"
                                          for="flexRadioDefault2"
                                        >
                                          مستخدم
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                                <!-- footer -->
                                <div>
                                  <button class="btn" @click="addmember()">
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
import useVuelidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
export default {
  name: "MembersCom",
  data() {
    return {
      AddDoctorOpen: false,
      editDoctorOpen: false,
      users: [],
      v$: useVuelidate(),

      id: "",
      name: "",
      number: "",
      password: "",
      confirm_password: "",
      userType: "",

      user_id: "",
    };
  },
  validations() {
    return {
      name: { required, maxLength: maxLength(20) },
      number: { required, maxLength: maxLength(11) },
      password: { required },
      confirm_password: { required },
      userType: { required },
    };
  },
  async mounted() {
    let result = await axios.get(`https://lab.almona.host/api/users`);
    if (result.status == 200) {
      console.log(result.data);
      this.users = result.data.users;
    }
  },
  methods: {
    async loadmembers() {
      let result = await axios.get(`https://lab.almona.host/api/users`);
      if (result.status == 200) {
        console.log(result.data);
        this.users = result.data.users;
      }
    },
    async addmember() {
      this.v$.$validate(); //active my validations
      /* validations */
      if (!this.v$.$error) {
        console.log("validated");
        let addresult = await axios.post(
          `https://lab.almona.host/api/user/add`,
          {
            name: this.name,
            number: this.number,
            password: this.password,
            confirm_password: this.confirm_password,
            userType: this.userType,
          }
        );
        if (addresult.data.success == true) {
          this.AddDoctorOpen = false;
          this.loadmembers();
          setTimeout(() => {
            this.name = "";
            this.number = "";
            this.address = "";
            this.password = "";
            this.userType = "";
            this.confirm_password = "";
            this.v$.number.$errors[0].$message = "";
            this.v$.name.$errors[0].$message = "";
          }, 1000);
        }
      } else {
        this.errorMessege = "املاء حقول الادخال بطريقة صحيحة";
      }
    },
    async deleteUser(id) {
      console.log("delete fun");
      let result = await axios.post(
        `https://lab.almona.host/api/user/del/${id}`,
        {}
      );
      if (result.data.success == true) {
        console.log(" user deleted succesfuly");
        this.AddDoctorOpen = false;
        this.loadmembers();
      } else {
        this.successMessege = "";
        this.errorMessege = "خطاء : refresh page";
      }
    },
  },
};
</script>

<style scoped>
* {
  color: #322a7d;
}
@media only screen and (max-width: 600px) {
  .button_number {
    margin-bottom: 21px;
    font-size: 10px;
    width: 90px;
  }
  .button_number .FontAwesome {
    font-size: 10px;
  }
  * {
    font-size: 10px;
  }
}
</style>
