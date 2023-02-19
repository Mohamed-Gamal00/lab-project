<template>
  <!-- <NavBarCom /> -->
  <div v-if="loading">
    <h1>loooding.....</h1>
    <PageLoader />
  </div>
  <div class="login">
    <div class="container-fluid w-auto p-3 vh-100 bg-light">
      <div class="row vh-700">
        <!-- col-8 img -->
        <div class="col-lg-8 m-0 p-0 bg-dark col8">
          <div class="fixed-bottom">
            <span class="text-light">logo</span>
            <h1 class="text-light fw-bold">مرحبا بك في معمل دياب</h1>
            <h6 class="text-white-50 fw-bold mb-5">مرحبا بك في معمل دياب</h6>
          </div>
        </div>
        <!-- col-4 form-->
        <div class="col-lg-4 m-0 p-0 col4bg font align-self-center">
          <div class="row p-0 m-auto formtext">
            <div class="col-12">
              <h1 class="text-center fw-bold">مرحبا بعودتك</h1>
              <p class="text-center fw-bold">قم بتسجيل الدخول اولا</p>
            </div>
            <!-- form -->
            <div class="col-lg-12 d-flex justify-content-center">
              <div clasns="row">
                <div class="col-lg-12">
                  <form>
                    <!-- رقم المستخدم -->
                    <div class="mb-4">
                      <!-- <label for="username" class="form-label text-dark mb-0">
                        <FontAwesome icon="user" />رقم المستخدم</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="username"
                        v-model="number"
                      /> -->
                      <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <FontAwesome icon="user" />
                          </div>
                        </div>
                        <input
                          type="tel"
                          pattern="[0-9]*"
                          class="form-control"
                          id="inlineFormInputGroupUsername2"
                          placeholder="رقم المستخدم"
                          v-model="number"
                        />
                      </div>
                      <span class="erroe-feedbak" v-if="v$.number.$error">{{
                        v$.number.$errors[0].$message
                      }}</span>
                    </div>
                    <!-- كلمة المرور -->
                    <div class="mb-4">
                      <!-- <label for="pass" class="form-label text-dark mb-0"
                        ><FontAwesome icon="lock" /> كلمة المرور</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        id="pass"
                        v-model="pass"
                      /> -->
                      <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <FontAwesome icon="lock" />
                          </div>
                        </div>
                        <input
                          type="password"
                          class="form-control"
                          id="inlineFormInputGroupUsername2"
                          placeholder="كلمة المرور"
                          v-model="password"
                        />
                      </div>
                      <span class="erroe-feedbak" v-if="v$.password.$error">{{
                        v$.password.$errors[0].$message
                      }}</span>
                    </div>
                    <label class="sr-only" for="inlineFormInputGroupUsername2"
                      >Username</label
                    >
                    <!-- الدخول -->
                    <div class="d-grid">
                      <button
                        type="button"
                        @click="userlogin()"
                        class="btncolor"
                      >
                        تسجيل الدخول
                      </button>
                      <!-- <button
                        type="submit"
                        @click="signup()"
                        class="btncolor mt-3"
                      >
                        SignUp
                      </button> -->
                      <span class="mt-1 text-center erroe-feedbak">
                        {{ UsernotFoundError }}
                        {{ message[0] }}<br />
                        {{ message[1] }}
                      </span>
                    </div>
                  </form>
                </div>
                <div class="col-lg-12 footertext">
                  <span class="text-center fw-bold">
                    <b>تم الانشاء والتطوير بواسطة SIGMA</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageLoader from "@/components/pageloader/PageLoader.vue";
import setAuthHeader from "@/utils/setAuthHeader";
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, maxLength, minLength } from "@vuelidate/validators";
export default {
  name: "LoginCom",
  components: { PageLoader },
  data() {
    return {
      loading: false,
      v$: useVuelidate(),
      number: "",
      password: "",
      UsernotFoundError: "",
      message: [],
    };
  },
  validations() {
    return {
      number: { required, maxLength: maxLength(11), minLength: minLength(11) },
      password: { required },
    };
  },
  mounted() {
    let user = localStorage.getItem("token");
    if (user) {
      this.$router.push({ name: "home" });
    } else {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    async userlogin() {
      this.loading = true;
      const credentaials = {
        number: this.number,
        password: this.password,
      };
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated Succesfuly");
        let token = localStorage.getItem("token");
        await axios
          .post(`https://lab.almona.host/api/login`, credentaials, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            console.log(response);
            if (response.data.success == true) {
              localStorage.setItem("token", response.data.user.token);
              localStorage.setItem("user", JSON.stringify(response.data.user));
              setAuthHeader(response.data.user.token);
              this.$router.push({ name: "home" });
            } else {
              this.message = [
                "هذا المستخدم غير موجود",
                "تحقق من كلمة المرور و رقم الهاتف",
              ];
              setTimeout(() => {
                this.message[0] = "";
              }, 2000);
              setTimeout(() => {
                this.message[1] = "";
              }, 4000);
            }
          })
          .catch(() => {
            this.$router.push({ name: "servererror" });
          });
      } else {
        console.log("form validation Faild");
        this.UsernotFoundError = "form validation Faild";
      }
      this.loading = false;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Cairo:wght@200;300;400;500;600;700;800&family=Readex+Pro:wght@200;300;400;500&display=swap");
* {
  direction: rtl;
  font-family: "Almarai", sans-serif;
  font-weight: bolder;
}
.login {
  overflow-y: hidden;
}
.col8 {
  background-image: url("@/assets/lab_img/Image.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
.fixed-bottom {
  position: relative !important;
  top: 65%;
  left: 0;
  right: 40px !important;
  bottom: 0;
}
.vh-700 {
  height: 100%;
}
.vh-700 img {
  width: 100%;
  height: 700px;
}
.font {
  color: #322a7d;
  font-weight: 700;
}
.btncolor {
  background-color: #322a7d;
  height: 35px;
  border: #322a7d solid 1px;
  border-radius: 10px;
  color: white;
}
/* .formtext {
      position: relative;
      bottom: -15%;
    } */
.col4bg {
  background-color: #f5f6fa;
}
.footertext {
  /* margin-top: 45%; */
  position: relative;
  top: 60%;
  font-size: 15px;
}
@media only screen and (max-width: 600px) {
  .col8 {
    display: none;
  }
}
.erroe-feedbak {
  color: red;
  font-size: 0.85em;
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
</style>
