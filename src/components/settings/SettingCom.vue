<template>
  <div class="wrapper">
    <main role="main" class="main-content">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="row align-items-center mb-2">
              <!-- header -->
              <div class="fw-bold fs-4 mt-lg-4">
                <span style="color: #322a7d"
                  ><span><FontAwesome icon="gear" />الاعدادات</span>
                </span>
              </div>
              <div v-if="loading">
                <h1>loooding.....</h1>
                <PageLoader />
              </div>
              <div class="row">
                <!-- تغيير كلمة المرور -->
                <div
                  class="col-lg-4 col-md-4 col-sm-12 bg-white m-2 rounded-3 changePassword"
                >
                  <!-- wellcom message &&&&&&  تغيير كلمة المرور -->
                  <div class="row d-flex justify-content-center mt-4 mb-lg-1">
                    <div class="col-8">
                      <div>
                        <h5 class="mb-0">مرحبا</h5>
                        <h2 class="mb-0 font mt-2">{{ username }}</h2>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="text-center">
                        <img
                          src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg"
                          width="70"
                          class="rounded-circle"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      style="background: #322a92"
                      class="btn text-white fw-bold"
                    >
                      تغيير كلمة المرور
                    </button>
                  </div>
                </div>
                <!-- اضافة الالوان -->
                <div class="col-md-7 col-sm-12">
                  <div class="row">
                    <div class="mt-4 mb-5">
                      <span
                        ><h4 class="fw-bold text-black">
                          <strong>الوان الضروس</strong>
                        </h4></span
                      >
                      <span>
                        <!-- اضف لون -->
                        <button
                          v-if="type == '1'"
                          @click="isOpen = true"
                          type="button"
                          style="width: 70px; height: 38px"
                          class="btn shadow bg-white text-black fw-bold m-1"
                        >
                          اضف+
                        </button>
                      </span>
                      <div class="mt-2 bg-white p-3 rounded-2">
                        <span
                          v-for="color in colors"
                          :key="color.id"
                          :style="[color.hex]"
                          class="m-1 btn fw-bold p-1 text-center rounded-2"
                        >
                          <!-- <strong class="d-inline">{{ color.name }}</strong>
                          <button type="button" @click="deletecolor(color.id)">
                            delete
                          </button> -->
                          <div class="dropdown bg-transparent">
                            <a
                              class="btn shadow font dropdown-toggle"
                              href="#"
                              role="button"
                              id="dropdownMenuLink"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <strong class="d-inline">{{ color.name }}</strong>
                            </a>

                            <ul
                              class="dropdown-menu"
                              v-if="type == '1'"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <li>
                                <button
                                  @click="(isedit = true), Editcolor(color)"
                                  type="button"
                                  class="dropdown-item"
                                >
                                  تعديل
                                </button>
                              </li>
                              <li>
                                <a
                                  @click="deletecolor(color.id)"
                                  class="dropdown-item"
                                  href="#"
                                  >حذف</a
                                >
                              </li>
                            </ul>
                          </div>
                          <!-- add color popup -->
                          <teleport to="body">
                            <div class="modalpopup" v-if="isOpen">
                              <div class="text-center">
                                <h2>اختار اللون الخاص بالضرس</h2>
                                <div>
                                  <br />
                                  <input
                                    type="color"
                                    class=""
                                    v-model="hex"
                                  /><br />
                                  {{ hex }}
                                  <input
                                    type="text"
                                    class="form-control"
                                    v-model="name"
                                  />
                                </div>
                                <div class="mt-lg-2">
                                  <button
                                    type="button"
                                    class="btn shadow"
                                    @click="(isOpen = false), addcolor()"
                                  >
                                    add color
                                  </button>
                                  <button
                                    type="button"
                                    class="btn shadow"
                                    @click="(isOpen = false), reset()"
                                  >
                                    close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </teleport>
                          <!-- edit color popup -->
                          <teleport to="body">
                            <div class="modalpopup" v-if="isedit">
                              <div class="text-center">
                                <h2>اختار اللون الخاص بالضرس</h2>
                                <div>
                                  <br />
                                  <input
                                    type="color"
                                    class=""
                                    v-model="hex"
                                  /><br />
                                  <!-- {{ hex }} -->
                                  <input
                                    type="text"
                                    class="form-control"
                                    v-model="name"
                                  />
                                </div>
                                <div class="mt-lg-2">
                                  <button
                                    type="button"
                                    class="btn shadow"
                                    @click="(isedit = false), Updatecolor()"
                                  >
                                    تعديل
                                  </button>
                                  <button
                                    type="button"
                                    class="btn shadow"
                                    @click="(isedit = false), reset()"
                                  >
                                    الغاء
                                  </button>
                                </div>
                              </div>
                            </div>
                          </teleport>
                        </span>
                      </div>
                    </div>
                  </div>
                  <TypesCom />
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
import PageLoader from "@/components/pageloader/PageLoader.vue";
import TypesCom from "@/components/types/TypesCom.vue";
import axios from "axios";
export default {
  name: "SettingCom",
  components: { TypesCom, PageLoader },
  data() {
    return {
      loading: false,
      isOpen: false,
      isedit: false,
      // width: "width:10%",
      // overflow: "overflow:hidden",
      hex: "",
      name: "",
      colors: [],
      color_id: "",
      type: "",
      username: "",
    };
  },
  async mounted() {
    this.loading = true;
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "login" });
    } else {
      this.username = JSON.parse(user).name;
    }
    this.type = JSON.parse(user).type;
    let token = localStorage.getItem("token");
    let result = await axios.get(`https://lab.almona.host/api/colors`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (result.status == 200) {
      console.log(result.data);
      this.colors = result.data.colors;
    }
    this.loading = false;
  },
  methods: {
    async loadecolor() {
      let token = localStorage.getItem("token");
      this.loading = true;
      let result = await axios.get(`https://lab.almona.host/api/colors`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (result.status == 200) {
        console.log(result.data);
        this.colors = result.data.colors;
      }
      this.loading = false;
    },
    reset() {
      this.name = "";
      this.hex = "";
    },
    async addcolor() {
      let token = localStorage.getItem("token");
      console.log("add color fun");
      let result = await axios.post(
        `https://lab.almona.host/api/add_color`,
        {
          name: this.name,
          hex: this.hex,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (result.data.success == true) {
        console.log("data true color added success");
        console.log(result.data.success);
        this.isOpen = false;
        this.loadecolor();
        setTimeout(() => {
          this.hex = "";
          this.name = "";
        }, 1000);
      } else {
        console.log("data false");
      }
    },
    async deletecolor(id) {
      let token = localStorage.getItem("token");
      console.log("delete doctor");
      axios.post(`https://lab.almona.host/api/del_color/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      this.loadecolor();
      // this.$swal
      //   .fire({
      //     title: "هل انت متاكد من حذف هذا العنصر",
      //     text: "لن تتمكن من الرجوع مجددا!",
      //     icon: "warning",
      //     showCancelButton: true,
      //     confirmButtonColor: "#322a7d",
      //     cancelButtonColor: "#d33",
      //     confirmButtonText: "حذف",
      //     cancelButtonText: "الغاء",
      //   })
      //   .then((result) => {
      //     if (result.isConfirmed) {
      //       this.$swal.fire(
      //         "حذف!",
      //         "تم حذف العنصر بنجاح.",
      //         "success",
      //         this.loadecolor()
      //       );
      //       this.loadecolor();
      //     }
      // });
    },
    Editcolor(color) {
      console.log("editcolor");
      this.color_id = color.id;
      this.name = color.name;
      this.hex = color.hex;
      console.log("Editcolor call success");
    },
    async Updatecolor() {
      let token = localStorage.getItem("token");
      let result = await axios.post(
        `https://lab.almona.host/api/edit_color/${this.color_id}`,
        {
          // image: this.image
          name: this.name,
          hex: this.hex,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (result.data.success == true) {
        console.log("data updated succesfuly");
        setTimeout(() => {
          this.name = "";
          this.hex = "";
        }, 1000);
        this.isedit = false;
        this.loadecolor();
      } else {
        console.log("data false");
      }
      console.log(result);
    },
  },
};
</script>

<style scoped>
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .changePassword {
    /* height: 212px; */
    height: fit-content;
  }
  .changePassword button {
    width: 70%;
  }
}
</style>
