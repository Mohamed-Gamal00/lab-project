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
                  <div class="col-md-3">
                    <div class="modal-body">
                      <form>
                        <!-- اختيار الدكتور -->
                        <div class="row g-3 align-items-center">
                          <div class="col-auto d-block mx-auto m-3">
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
                        </div>
                        <!-- اسم الحالة -->
                        <div class="row g-3 align-items-center">
                          <div class="col-auto d-block mx-auto m-3">
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
                        </div>
                        <!-- تاريخ الاضافة -->
                        <div class="row g-3 align-items-center">
                          <div class="col-auto d-block mx-auto m-3">
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
                        </div>
                        <!-- ملاحظات -->
                        <div class="row g-3 align-items-center">
                          <div class="col-auto d-block mx-auto m-3">
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
                  <div class="col-md-6">
                    <div>
                      <!-- اختيار الوان الضروس -->
                      <div class="row g-3 align-items-center">
                        <div class="col-auto d-block mx-auto m-3">
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
                      </div>
                      <div class="mt-2 bg-white color_section p-3 rounded-2">
                        <span
                          v-for="color in colors"
                          :key="color.id"
                          :style="[color.hex]"
                          class="m-1 btn fw-bold p-1 text-center rounded-2"
                        >
                          <div class="dropdown bg-transparent">
                            <a>
                              <strong class="d-inline">{{ color.name }}</strong>
                            </a>
                          </div>
                        </span>
                      </div>
                      <!-- table -->
                      <!-- 
                      <table class="table mt-lg-3">
                        <thead style="background-color: #322a7d">
                          <tr>
                            <th scope="col">الضرس</th>
                            <th scope="col">اللون</th>
                            <th scope="col">السعر</th>
                            <th scope="col">مسح</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>اسم الضرس {{ type_id }}</th>
                            <td>اللون{{ color_id }}</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                        </tbody>
                      </table>
                       -->
                      <!-- اضافة -->
                    </div>
                  </div>
                  <!-- col-3 -->
                  <div class="col-md-3">
                    <!-- اختيار انواع الضروس -->
                    <div class="row g-3 align-items-center">
                      <div class="col-auto d-block mx-auto m-3">
                        <select class="form-select" v-model="type_id">
                          <option disabled value="">النوع</option>
                          <option
                            v-for="type in types"
                            :key="type.id"
                            :value="type.id"
                          >
                            {{ type.name }}
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
                          class="rounded"
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
    } else {
      this.username = JSON.parse(user).name;
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
      let token = localStorage.getItem("token");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
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
    width: 200px;
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
