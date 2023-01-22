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
                        <!-- رقم الحالة -->
                        <!-- <div class="row g-3 align-items-center">
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
                        </div> -->
                        <!-- تاريخ الاضافة -->
                        <div class="row g-3 align-items-center">
                          <div class="col-auto d-block mx-auto m-3">
                            <input
                              type="date"
                              class="form-control"
                              placeholder="تاريخ الاضافة"
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
                        <div class="form-outline">
                          <textarea
                            class="form-control"
                            id="textAreaExample1"
                            placeholder="ملاحظات"
                            rows="4"
                            v-model="notes"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                  </div>
                  <!-- col-6 -->
                  <div class="col-md-6">
                    <div>
                      <!-- اختيار الوان الضروس -->
                      <div class="row g-3 align-items-center">
                        <div class="col-auto d-block mx-auto m-3">
                          <select class="form-select" v-model="color_id">
                            <option disabled value="">اسم اللون</option>
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
                      <!-- اضافة -->
                    </div>
                  </div>
                  <!-- col-3 -->
                  <div class="col-md-3">
                    <!-- اختيار الوان الضروس -->
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
                  </div>
                  <button
                    type="button"
                    @click="Addorder()"
                    class="btn mt-lg-2 btn-success"
                  >
                    add
                  </button>
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
      // number: { required },
      required_date: { required },
    };
  },
  async mounted() {
    console.log("colors");
    let resultcolor = await axios.get(`https://lab.almona.host/api/colors`);
    if (resultcolor.status == 200) {
      console.log(resultcolor.data);
      this.colors = resultcolor.data.colors;
    }
    console.log("doctors");
    let result = await axios.get(`https://lab.almona.host/api/doctors`);
    if (result.data.success == true) {
      console.log(result.data);
      this.doctors = result.data.doctors;
    }
    console.log("types");
    let resulttypes = await axios.get(`https://lab.almona.host/api/types`);
    if (resulttypes.data.success == true) {
      console.log(resulttypes.data);
      this.types = resulttypes.data.types;
    }
  },
  methods: {
    async Addorder() {
      console.log("add purchases function");
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
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNzRiYzI0OTY4MWQ0ZmFkZmY1NmJmNTA0NmZiMGY5N2E1OGU0OWE1ZTcyMmI3ZTA0YmYwNGQ2MzAxZmE2YTMxZjg0OTI3MmIxNzE0Y2MwMjkiLCJpYXQiOjE2NzQzNzY5NTEuMzk3OTUyLCJuYmYiOjE2NzQzNzY5NTEuMzk3OTU4LCJleHAiOjE3MDU5MTI5NTEuMzg4OTUyLCJzdWIiOiIxNDIiLCJzY29wZXMiOltdfQ.TGbFbhql1B7x0t7i4IMd5y9Dsm9HpsIX9HCc-u6ZRRsv-4KCuXR_HfmETSwY-mzaCsrfggaPio7nFD89f2MGVDMhpaXnh3X1GWFoxwRYSAmkU-QNy7zrJYNz4o1qlcFjpV0R4Bw8lmGXwX-9AqbXPuGEhItbXve3ZVfgQjcOAWLumVe6zvBw5aPz39PZ-7zTv1ZcwZz0jmjNdVaQCy-FT83RG4WRqmSJb-rGCtvpLh4eF3PuhCGCbMVClO7ucUIPA1z8DQmQ653UkW16RiBDVWUAi6c_ee8U9sHfBLRWAQQ10ugF7TyCnKI1YtxGsWjYFPCkHsQt1PqJNn1MkRIZSpxx-80HMvKSNvtfbSMwCcT5eXI9KL3RQJliUi1t0Wdg37AodPozLJeTC6Ux_2pbNMa4mqXclg6Jd0SUNBF2MMd7UqXguC3E_ClGFn99pgFV5kz3HC78_-7Vfy03N3a7wD5Vz2td_EHD59qImBzGg0WCrdzRw0xwEdMtBlwzN0vjogrutBTSWEP2QtGbsD-GKjHjB0Bk-ijX6vvO6qBQiBMUXLm0nLcywtlWrs8o_eyEGffr2ibPx3BTulS_QTmFu1TiEgYNV56UCfhDxXOBQZ3Q8NSR8P1ra0-jrvrzaeCjwjzSxK_A4zvj_kEuNu1AKfWG2StWcxtlBnyJ_PVLBGU",
            },
          }
        );
        console.log(result);
        if (result.data.success == true) {
          console.log("data true purchase added success");
          setTimeout(() => {
            this.doctor_id = "";
            this.patient_name = "";
            // this.number = "";
            this.notes = "";
            this.required_date = "";
            this.v$.patient_name.$errors[0].$message = "";
            this.v$.doctor_id.$errors[0].$message = "";
            this.v$.notes.$errors[0].$message = "";
            this.v$.required_date.$errors[0].$message = "";
          });
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
</style>
