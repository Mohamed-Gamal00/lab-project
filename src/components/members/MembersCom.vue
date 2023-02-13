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
                  <div v-if="loading">
                    <h1>loooding.....</h1>
                    <PageLoader />
                  </div>
                  <div class="fw-bold fs-4 mt-lg-4">
                    <span style="color: #322a7d"
                      ><span><FontAwesome icon="user" />الاعضاء</span>
                    </span>
                    <span class="float-start">
                      <button
                        @click="AddUserOpen = true"
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
                  <div class="">
                    <table class="table mt-lg-3">
                      <div>
                        <!-- <span class="small fw-bold"
                          >العدد ({{ users.length }})</span
                        > -->
                      </div>
                      <tbody>
                        <tr
                          v-for="user in users"
                          :key="user.id"
                          class="bg-white"
                        >
                          <!-- name -->
                          <td colspan="">
                            <div class="fw-bold font">
                              <span><FontAwesome icon="user" /></span>
                              <span class="m-3">{{ user.name }}</span>
                            </div>
                          </td>
                          <!-- number -->
                          <td style="width: 50%">
                            <button
                              type="button"
                              class="btn fw-bold font-lg mb-0 p-1 button_number"
                              style="background-color: #84e0be"
                            >
                              <span class="bi-ICON-NAME">
                                <span
                                  ><FontAwesome
                                    class="btn font-lg p-0 FontAwesome"
                                    icon="phone" /></span></span
                              >&nbsp;{{ user.number }}
                            </button>
                          </td>
                          <!-- date -->
                          <td>
                            <span class="d-block font">
                              {{ user.created_at }}
                            </span>
                          </td>
                          <!-- خيارات -->
                          <td>
                            <span class="d-block">
                              <!-- خيارات -->
                              <div class="dropdown">
                                <a
                                  class="btn btn-secondary font dropdown-toggle"
                                  href="#"
                                  role="button"
                                  id="dropdownMenuLink"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  style="
                                    background-color: #322a7d;
                                    color: white;
                                  "
                                >
                                  خيارات
                                </a>

                                <ul
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuLink"
                                >
                                  <li>
                                    <button
                                      @click="
                                        (editDoctorOpen = true), EditUser(user)
                                      "
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
                          <!-- modal popup add member root -->
                          <div class="root">
                            <teleport to="body">
                              <div class="modalpopup" v-if="AddUserOpen">
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
                                        (AddUserOpen = false), ResetDoctors()
                                      "
                                    >
                                      اغلاق
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </teleport>
                          </div>
                          <!-- modal popup edit member root -->
                          <div class="root">
                            <teleport to="body">
                              <div class="modalpopup" v-if="editDoctorOpen">
                                <div class="text-center">
                                  <!-- header -->
                                  <div class="modal-header d-inline">
                                    <h5
                                      class="modal-title fw-bold text-center"
                                      style="color: #322a7d"
                                    >
                                      تعديل
                                    </h5>
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
                                    <span class="text-danger" v-if="errors">
                                      {{ errors }}
                                    </span>
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
                                    <button class="btn" @click="UpdateUser()">
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
                              </div>
                            </teleport>
                          </div>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- pagination -->
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                      <li
                        class="page-item"
                        v-for="link in pagination.links"
                        :key="link"
                        v-bind:class="[
                          { disabled: !link.url },
                          { active: link.active },
                        ]"
                      >
                        <a
                          class="page-link"
                          v-html="link.label"
                          @click="fetchusers(link.url)"
                        ></a>
                      </li>
                    </ul>
                  </nav>
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
import PageLoader from "@/components/pageloader/PageLoader.vue";
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
export default {
  name: "MembersCom",
  components: { PageLoader },

  data() {
    return {
      loading: false,
      AddUserOpen: false,
      editDoctorOpen: false,
      users: [],
      v$: useVuelidate(),
      pagination: {},
      id: "",
      name: "",
      number: "",
      password: "",
      confirm_password: "",
      userType: "",
      user_id: "",
      errors: "",
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
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "login" });
    }
    this.type = JSON.parse(user).type;
    this.fetchusers();
  },
  methods: {
    makePagination(meta) {
      let pagination = {
        links: meta.links,
      };
      this.pagination = pagination;
    },
    async fetchusers(page_url) {
      page_url = page_url || `https://lab.almona.host/api/users`;
      this.loading = true;
      let token = localStorage.getItem("token");
      await axios
        .get(page_url, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          this.users = response.data.data;
          this.makePagination(response.data.meta);
        })
        .catch((err) => {
          console.log(err.response);
          this.$router.push({ name: "servererror" });
        });
      this.loading = false;
    },
    async LoadUser() {
      this.loading = true;
      let user = localStorage.getItem("user");
      if (!user) {
        this.$router.push({ name: "login" });
      }
      let token = localStorage.getItem("token");
      let result = await axios.get(`https://lab.almona.host/api/users`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (result.status == 200) {
        console.log(result.data);
        this.users = result.data.data;
      }
      this.loading = false;
    },
    async addmember() {
      this.v$.$validate(); //active my validations
      /* validations */
      if (!this.v$.$error) {
        console.log("validated");
        let token = localStorage.getItem("token");
        let addresult = await axios.post(
          `https://lab.almona.host/api/user/add`,
          {
            name: this.name,
            number: this.number,
            password: this.password,
            confirm_password: this.confirm_password,
            userType: this.userType,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (addresult.data.success == true) {
          this.$swal.fire({
            toast: true,
            icon: "success",
            title: "تم الاضافة بنجاح ",
            animation: false,
            position: "top-right",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", this.$swal.stopTimer);
              toast.addEventListener("mouseleave", this.$swal.resumeTimer);
            },
          });
          this.AddUserOpen = false;
          this.LoadUser();
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
            console.log("delete members");
            axios.post(`https://lab.almona.host/api/user/del/${id}`, {
              headers: {
                Authorization: "Bearer " + token,
              },
            });

            this.$swal.fire(
              "حذف!",
              "تم حذف العنصر بنجاح.",
              "success",
              this.LoadUser()
            );
            this.LoadUser();
          }
        });
    },
    async EditUser(user) {
      console.log("EditDoctor call success");
      this.user_id = user.id;
      this.name = user.name;
      this.number = user.number;
      this.userType = user.type;
    },
    async UpdateUser() {
      console.log("update doctor function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("validate");
        let token = localStorage.getItem("token");
        await axios
          .post(
            `https://lab.almona.host/api/user/edit/${this.user_id}`,
            {
              name: this.name,
              number: this.number,
              password: this.password,
              confirm_password: this.confirm_password,
              userType: this.userType,
            },
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          )
          .then(() => {
            this.$swal.fire({
              toast: true,
              icon: "success",
              title: "تم التعديل بنجاح ",
              animation: false,
              position: "top-right",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", this.$swal.stopTimer);
                toast.addEventListener("mouseleave", this.$swal.resumeTimer);
              },
            });
            this.editDoctorOpen = false;
            this.LoadUser();
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
          })
          .catch((err) => {
            console.log(err);
            this.errors = err.response.data.error;
          });
      } else {
        console.log("not validate");
      }
    },
    ResetDoctors() {
      this.name = "";
      this.number = "";
      this.address = "";
      this.password = "";
      this.userType = "";
      this.confirm_password = "";
      this.v$.number.$errors[0].$message = "";
      this.v$.name.$errors[0].$message = "";
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
    width: 120px;
  }
  .button_number .FontAwesome {
    font-size: 10px;
  }
  .font {
    width: 164px;
  }
}
</style>
