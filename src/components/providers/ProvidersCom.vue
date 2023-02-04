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
                      ><span><FontAwesome icon="user" />التجار</span>
                    </span>
                    <span class="float-start">
                      <button
                        v-if="type == '1'"
                        @click="AddDoctorOpen = true"
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        style="background-color: #322a7d; border: none"
                        data-bs-target="#exampleModal"
                      >
                        اضافة تاجر
                        <span
                          ><FontAwesome style="color: orange" icon="user-plus"
                        /></span>
                      </button>
                    </span>
                  </div>
                  <div v-if="loading">
                    <h1>loooding.....</h1>
                    <PageLoader />
                  </div>
                  <!-- table -->
                  <div class="table-responsive">
                    <table class="table mt-lg-3">
                      <div v-if="providers.length > 0">
                        <span class="small fw-bold"
                          >العدد ({{ providers.length }})</span
                        >
                      </div>
                      <tbody>
                        <tr
                          v-for="provider in providers"
                          :key="provider.id"
                          class="bg-white"
                        >
                          <!-- name -->
                          <td colspan="">
                            <div class="fw-bold font">
                              <span><FontAwesome icon="provider" /></span>
                              <span class="m-3">{{ provider.name }}</span>
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
                              >&nbsp;{{ provider.number }}
                            </button>
                          </td>
                          <!-- date -->
                          <td>
                            <span class="d-block font">
                              {{ provider.created_at }}
                            </span>
                          </td>
                          <!-- خيارات -->
                          <td>
                            <span class="d-block">
                              <!-- خيارات -->
                              <div class="dropdown" v-if="type == '1'">
                                <a
                                  class="btn font btn-secondary dropdown-toggle"
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
                                        (editDoctorOpen = true),
                                          EditProviders(provider)
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
                                      @click="DeleteProvider(provider.id)"
                                      class="dropdown-item"
                                      href="#"
                                      >حذف</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </span>
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
                                      اضافة تاجر
                                    </h5>
                                    <p class="text-center">
                                      اضف تاجر جديد الي قائمة التجار
                                    </p>
                                  </div>
                                  <!-- body -->
                                  <div class="modal-body">
                                    <form>
                                      <!-- اسم التاجر -->
                                      <div class="row g-3 align-items-center">
                                        <div
                                          class="col-auto d-block mx-auto m-3"
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder="اسم التاجر"
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
                                        <div
                                          class="col-auto d-block mx-auto m-3"
                                        >
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
                                    </form>
                                  </div>
                                  <!-- footer -->
                                  <button class="btn" @click="AddProvider()">
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
                                      اضافة تاجر
                                    </h5>
                                    <p class="text-center">
                                      اضف تاجر جديد الي قائمة التجار
                                    </p>
                                  </div>
                                  <!-- body -->
                                  <div class="modal-body">
                                    <form>
                                      <!-- اسم التاجر -->
                                      <div class="row g-3 align-items-center">
                                        <div
                                          class="col-auto d-block mx-auto m-3"
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder="اسم التاجر"
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
                                        <div
                                          class="col-auto d-block mx-auto m-3"
                                        >
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
                                    </form>
                                  </div>
                                  <!-- footer -->
                                  <button class="btn" @click="UpdateProvider()">
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
  name: "ProvidersCom",
  components: { PageLoader },
  data() {
    return {
      loading: false,
      AddDoctorOpen: false,
      editDoctorOpen: false,
      providers: [],
      type: "",
      v$: useVuelidate(),
      name: "",
      number: "",
      provider: {
        id: "",
        name: "",
        number: "",
      },
      user_id: "",
    };
  },
  validations() {
    return {
      name: { required, maxLength: maxLength(20) },
      number: { required, maxLength: maxLength(11) },
    };
  },
  async mounted() {
    this.loading = true;
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "login" });
    }
    this.type = JSON.parse(user).type;
    let token = localStorage.getItem("token");
    let result = await axios
      .get(`https://lab.almona.host/api/providers`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .catch(() => this.$router.push({ name: "servererror" }));
    if (result.status == 200) {
      console.log(result.data);
      this.providers = result.data.providers;
    }
    this.loading = false;
  },
  methods: {
    async loadproviders() {
      this.loading = true;
      let token = localStorage.getItem("token");
      let result = await axios.get(`https://lab.almona.host/api/providers`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (result.data.success == true) {
        this.providers = result.data.providers;
      }
      this.loading = false;
    },
    ResetDoctors() {
      this.name = "";
      this.number = "";
      this.v$.number.$errors[0].$message = "";
      this.v$.name.$errors[0].$message = "";
    },
    async AddProvider() {
      let token = localStorage.getItem("token");
      console.log("add doctor function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        let result = await axios.post(
          `https://lab.almona.host/api/add_provider`,
          {
            name: this.name,
            number: this.number,
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
          this.v$.number.$errors[0].$message = "";
          this.v$.name.$errors[0].$message = "";
        });
        console.log(result);
        if (result.data.success == true) {
          console.log("data true provider added success");
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
          this.AddDoctorOpen = false;
          this.loadproviders();
        } else {
          console.log("data false");
        }
      } else {
        console.log("form validated faild");
      }
    },
    async DeleteProvider(id) {
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
            console.log("delete purchase");
            let token = localStorage.getItem("token");
            axios.post(`https://lab.almona.host/api/del_provider/${id}`, {
              headers: {
                Authorization: "Bearer " + token,
              },
            });

            this.$swal.fire(
              "حذف!",
              "تم حذف العنصر بنجاح.",
              "success",
              this.loadproviders()
            );
            this.loadproviders();
          }
        });
      // console.log("delete doctor");
      // let result = await axios.post(
      //   `https://lab.almona.host/api/del_provider/${id}`,
      //   {}
      // );
      // if (result.data.success == true) {
      //   console.log(" provider deleted succesfuly");
      //   this.loadproviders();
      // } else {
      //   console.log("faild to delete provider");
      // }
    },
    async EditProviders(provider) {
      this.user_id = provider.id;
      this.name = provider.name;
      this.number = provider.number;
      this.provider.id = provider.id;
      this.provider.name = provider.name;
      this.provider.number = provider.number;
    },
    async UpdateProvider() {
      console.log("update provider function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        let token = localStorage.getItem("token");
        let result = await axios.post(
          `https://lab.almona.host/api/edit_provider/${this.user_id}`,
          {
            name: this.name,
            number: this.number,
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
          this.v$.number.$errors[0].$message = "";
          this.v$.name.$errors[0].$message = "";
        }, 1000);
        console.log(result);
        if (result.data.success == true) {
          console.log("data updated succesfuly");
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
          this.loadproviders();
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
