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
                  ><span><FontAwesome icon="cart-plus" />الطلبات</span>
                </span>
              </div>
              <!-- اضافة طلب -->
              <div>
                <h1>اضافة طلب</h1>
                <div class="row">
                  <div class="col-md-4">
                    <div class="modal-body">
                      <form>
                        <!-- اختيار الدكتور -->
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-6">
                            <select class="form-select" v-model="doctor_id">
                              <option disabled value="">اسم الدكتور</option>
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
                              >{{ v$.doctor_id.$errors[0].$message }}</span
                            >
                          </div>
                          <!-- اسم الحالة -->
                          <div class="col-md-6">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="اسم الحالة"
                              v-model="patient_name"
                            />
                            <span
                              class="erroe-feedbak"
                              v-if="v$.patient_name.$error"
                              >{{ v$.patient_name.$errors[0].$message }}</span
                            >
                          </div>
                          <!-- تاريخ الاضافة -->
                          <div class="col-md-12 m-3">
                            <input
                              type="date"
                              class="form-control"
                              placeholder="ميعاد الطلب"
                              v-model="required_date"
                            />
                            <span
                              class="erroe-feedbak"
                              v-if="v$.required_date.$error"
                              >{{ v$.required_date.$errors[0].$message }}</span
                            >
                          </div>
                          <!-- ملاحظات -->
                          <div class="col-md-12 m-3">
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
                      </form>
                    </div>
                  </div>
                  <!-- col-6 اختيار الوان الضروس  -->
                  <div class="col-md-5">
                    <div class="row d-flex justify-content-center">
                      <div>
                        <!-- اختيار الوان الضروس -->
                        <div class="col-md-12">
                          <select class="form-select" v-model="color_id">
                            <option disabled value="">اللون</option>
                            <option
                              v-for="color in colors"
                              :value="color.id"
                              :key="color.id"
                            >
                              {{ color.name }}
                            </option>
                          </select>
                          <!-- <span
                              class="erroe-feedbak"
                              v-if="v$.doctor_id.$error"
                              >{{ v$.doctor_id.$errors[0].$message }}</span
                            > -->
                        </div>
                        <div class="mt-2 color_section p-3 rounded-2">
                          <span
                            v-for="color in colors"
                            :key="color.id"
                            :style="[color.hex]"
                            class="m-1 btn fw-bold p-1 text-center rounded-2"
                          >
                            <div class="dropdown bg-transparent">
                              <a>
                                <strong class="d-inline">{{
                                  color.name
                                }}</strong>
                              </a>
                            </div>
                          </span>
                        </div>
                        <!-- اضافة -->
                      </div>
                    </div>
                  </div>
                  <!-- col-3 -->
                  <div class="col-md-3">
                    <!-- اختيار انواع الضروس -->
                    <div
                      class="row g-3 align-items-center justify-content-center"
                    >
                      <div class="col-md-12 mb-2">
                        <select class="form-select" v-model="type_id">
                          <option disabled value="">النوع</option>
                          <option
                            v-for="typee in types"
                            :key="typee.id"
                            :value="typee.id"
                          >
                            {{ typee.name }}
                          </option>
                        </select>
                        <!-- <span
                            class="erroe-feedbak"
                            v-if="v$.doctor_id.$error"
                            >{{ v$.doctor_id.$errors[0].$message }}</span
                          > -->
                      </div>
                    </div>
                    <div class="col-3 col-md-3 col-sm-12">
                      <div class="text-center">
                        <img
                          src="@/assets/lab_img/Teeth.png"
                          alt="img"
                          width="180"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- اضف -->
                  <div>
                    <button
                      type="button"
                      @click="Addorder()"
                      class="btn mt-lg-2 text-white"
                      style="background-color: #322a7d"
                    >
                      اضف الان
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
export default {
  name: "AddOrderCom",
  data() {
    return {
      loading: false,
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
      // number: "",
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
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "login" });
    }
    let token = localStorage.getItem("token");
    console.log("colors");
    let resultcolor = await axios.get(`https://lab.almona.host/api/colors`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (resultcolor.status == 200) {
      console.log(resultcolor.data);
      this.colors = resultcolor.data.colors;
    }
    console.log("doctors");
    let result = await axios.get(`https://lab.almona.host/api/doctors`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (result.data.success == true) {
      console.log(result.data);
      this.doctors = result.data.doctors;
    }
    console.log("types");
    let resulttypes = await axios.get(`https://lab.almona.host/api/types`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (resulttypes.data.success == true) {
      console.log(resulttypes.data);
      this.types = resulttypes.data.types;
    }
  },
  methods: {
    async Addorder() {
      this.loading = true;
      console.log("add purchases function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        let token = localStorage.getItem("token");
        let result = await axios.post(
          `https://lab.almona.host/api/add_order`,
          {
            patient_name: this.patient_name,
            doctor_id: this.doctor_id,
            color_id: this.color_id,
            type_id: this.type_id,
            notes: this.notes,
            required_date: this.required_date,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(result);
        if (result.data.success == true) {
          console.log("data true purchase added success");
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
          setTimeout(() => {
            this.doctor_id = "";
            this.patient_name = "";
            this.notes = "";
            this.required_date = "";
            this.v$.patient_name.$errors[0].$message = "";
            this.v$.doctor_id.$errors[0].$message = "";
            this.v$.notes.$errors[0].$message = "";
            this.v$.required_date.$errors[0].$message = "";
          });
          this.$router.push({ name: "orders" });
        } else {
          console.log("data false");
        }
      } else {
        console.log("form validated faild");
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.color_section {
  height: 120px;
  overflow: scroll;
}
table td {
  width: 106px;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 600px) {
  input,
  textarea,
  select {
    /* width: 200px; */
  }
}
@media only screen and (max-width: 600px) {
  input,
  textarea,
  select {
    width: 200px;
  }
}
</style>
