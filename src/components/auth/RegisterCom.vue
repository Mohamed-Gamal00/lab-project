<template>
  <div class="register">
    <form @click.prevent>
      <!-- name -->
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto m-3">
          <h1 class="text-white registerfont">سجل بياناتك</h1>
          <input
            type="text"
            class="form-control"
            placeholder="الاسم"
            v-model="name"
          />
          <span class="erroe-feedbak" v-if="v$.name.$error">{{
            v$.name.$errors[0].$message
          }}</span>
        </div>
      </div>
      <!-- number -->
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto m-3">
          <input
            type="number"
            class="form-control"
            placeholder="رقم الهاتف"
            v-model="number"
          />
          <span class="erroe-feedbak" v-if="v$.number.$error">{{
            v$.number.$errors[0].$message
          }}</span>
        </div>
      </div>
      <!-- password -->
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto m-3">
          <input
            type="password"
            class="form-control"
            placeholder="كلمة السر"
            v-model="pass"
          />
          <span class="erroe-feedbak" v-if="v$.pass.$error">{{
            v$.pass.$errors[0].$message
          }}</span>
        </div>
      </div>
      <!-- password_confirmation -->
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto m-3">
          <input
            type="password"
            class="form-control"
            placeholder="تأكيد كلمة المرور"
            v-model="password_confirmation"
          />
          <span class="erroe-feedbak" v-if="v$.password_confirmation.$error">{{
            v$.password_confirmation.$errors[0].$message
          }}</span>
        </div>
      </div>
      <br />
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto">
          <button type="submit" @click="SignUp()" class="btn btn-primary">
            دخول
          </button>
          &nbsp; &nbsp; &nbsp;
          <button @click="Loginpage()" type="submit" class="btn text-white">
            تسجيل
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  name: "RegisterCom",

  data() {
    return {
      loading: false,
      v$: useValidate(),
      name: "",
      number: "",
      pass: "",
      password_confirmation: "",
    };
  },
  validations() {
    return {
      name: { required },
      number: { required },
      pass: { required },
      password_confirmation: { required },
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    Loginpage() {
      this.$router.push({ name: "login" });
    },
    async SignUp() {
      console.log("SignUp(now)");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated Succesfuly");
        let result = await axios.post(
          "http://localhost:3000/users",
          {
            name: this.name,
            number: this.number,
            pass: this.pass,
            password_confirmation: this.password_confirmation,
          }
          // {
          //   headers: {
          //     Authorization:
          //       "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNzRiYzI0OTY4MWQ0ZmFkZmY1NmJmNTA0NmZiMGY5N2E1OGU0OWE1ZTcyMmI3ZTA0YmYwNGQ2MzAxZmE2YTMxZjg0OTI3MmIxNzE0Y2MwMjkiLCJpYXQiOjE2NzQzNzY5NTEuMzk3OTUyLCJuYmYiOjE2NzQzNzY5NTEuMzk3OTU4LCJleHAiOjE3MDU5MTI5NTEuMzg4OTUyLCJzdWIiOiIxNDIiLCJzY29wZXMiOltdfQ.TGbFbhql1B7x0t7i4IMd5y9Dsm9HpsIX9HCc-u6ZRRsv-4KCuXR_HfmETSwY-mzaCsrfggaPio7nFD89f2MGVDMhpaXnh3X1GWFoxwRYSAmkU-QNy7zrJYNz4o1qlcFjpV0R4Bw8lmGXwX-9AqbXPuGEhItbXve3ZVfgQjcOAWLumVe6zvBw5aPz39PZ-7zTv1ZcwZz0jmjNdVaQCy-FT83RG4WRqmSJb-rGCtvpLh4eF3PuhCGCbMVClO7ucUIPA1z8DQmQ653UkW16RiBDVWUAi6c_ee8U9sHfBLRWAQQ10ugF7TyCnKI1YtxGsWjYFPCkHsQt1PqJNn1MkRIZSpxx-80HMvKSNvtfbSMwCcT5eXI9KL3RQJliUi1t0Wdg37AodPozLJeTC6Ux_2pbNMa4mqXclg6Jd0SUNBF2MMd7UqXguC3E_ClGFn99pgFV5kz3HC78_-7Vfy03N3a7wD5Vz2td_EHD59qImBzGg0WCrdzRw0xwEdMtBlwzN0vjogrutBTSWEP2QtGbsD-GKjHjB0Bk-ijX6vvO6qBQiBMUXLm0nLcywtlWrs8o_eyEGffr2ibPx3BTulS_QTmFu1TiEgYNV56UCfhDxXOBQZ3Q8NSR8P1ra0-jrvrzaeCjwjzSxK_A4zvj_kEuNu1AKfWG2StWcxtlBnyJ_PVLBGU",
          //   },
          // }
        );
        if (result.status == 201) {
          console.log("Add new user Succesfuly");
          //save user data in local storage
          localStorage.setItem("user-info", JSON.stringify(result.data));
          console.log(result);
          console.log(JSON.stringify(result.data));
          //redirect to
          this.$router.push({ name: "home" });
        } else {
          console.log("erro on add new user");
        }
      } else {
        console.log("form validation Faild");
      }
    },
  },
};
</script>

<style scoped>
.registerfont {
  font-size: 20px !important;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.register {
  background-image: url("@/assets/lab_img/Image.png") !important;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.erroe-feedbak {
  color: red;
  font-size: 0.85em;
}
</style>
