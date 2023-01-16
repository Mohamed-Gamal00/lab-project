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
                              v-model="name"
                            />
                            <span class="erroe-feedbak" v-if="v$.name.$error">{{
                              v$.name.$errors[0].$message
                            }}</span>
                          </div>
                        </div>
                        <!-- رقم الحالة -->
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
                        <!-- ملاحظات -->
                        <div class="form-outline">
                          <textarea
                            class="form-control"
                            id="textAreaExample1"
                            placeholder="ملاحظات"
                            rows="4"
                            v-model="messege"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                  </div>
                  <!-- col-6 -->
                  <div class="col-md-6">
                    <div>
                      <!-- الوان الضروس -->
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
      v$: useVuelidate(),
      doctors: [],
      doctor_id: "",
      color_id: "",
      type_id: "",
      name: "",
      number: "",
      messege: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: maxLength(20) },
      doctor_id: { required },
      number: { required },
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
            name: this.name,
            doctor_id: this.doctor_id,
            color_id: this.color_id,
            type_id: this.type_id,
            number: this.number,
            messege: this.messege,
          },
          {
            headers: {
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODdmZTEwNjQzZjFhY2Q0ODJjOTE3YzAxNzA2MWY2YjQwYzE5YTE3ZGMzZjRmYmIwODg4NDhkYzg4OGY0MWEyMzk1OWYyMzdjY2ViMmQ1MTQiLCJpYXQiOjE2NzM4Njc1MjguNjc5MzI5LCJuYmYiOjE2NzM4Njc1MjguNjc5MzM3LCJleHAiOjE3MDU0MDM1MjguNjU3NTk1LCJzdWIiOiIxNDAiLCJzY29wZXMiOltdfQ.AYdjBM8ERdV-rTzfVQiJcgA_R0wNqiFfz6osBAVA_6XDMNGplxpV_8le-4pKPCxIy4ugUOvxV8po7IUUqBSyJcABinfZEwBg1XXE65qSktbw-c7qXX7STtljeNIqcjgaoi-yU5AhUyKgP5vWRGbPs-fRJyhPaI3LLPFYrYirMY5xmljGdeJ0PW3pL_SfZ81yOHa4ygNfYtwh40DcuWhHHT02q4srS5U6WzOaLA9xZ9KhH5usUVgL7ao9IAahnhWJF1-vV1R5_5Bw8ypv0y5Rh7zNfVgraTvd9nnXHYJCLrxBH4aF0jMMCE1klHUzZLmi9vYxuKuUIuunIRtESw8g4jAjROjkMxJqvNzp3eQ8iSNZemByCo0-AdI1CBe3wBtsvjaRXn_xD1nq6t56PETGru4cJZZ65c3LZFm8T2mzhPhkmVijtinCB8mxCo54N6vTOwB4BoYcoVPkxC0nfvEdkGyAn0AU1sR-CidTtceCiwNhKIk35fSMo0JczJjyimaFW4Ve1sTxiNinyuYErhE-fAFm3ExYq6XhVs40xsJkPNdFx40hWQVkBza6ctg2ZkuREOUI0n5E-bUgG8EHyIIhLfilWBgr9qMOG8jrRXwEji3-aXmcjGgzgnFRna2YMvSXuEs2IiREBLoUDI1Q0NBTuAd_8wWlaMPCMM6DPBmjS3w",
            },
          }
        );
        console.log(result);
        if (result.data.success == true) {
          console.log("data true purchase added success");
          this.loadpurchase();
          setTimeout(() => {
            this.doctor_id = "";
            this.name = "";
            this.number = "";
            this.messege = "";
            this.v$.name.$errors[0].$message = "";
            this.v$.doctor_id.$errors[0].$message = "";
            this.v$.number.$errors[0].$message = "";
            this.v$.messege.$errors[0].$message = "";
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
