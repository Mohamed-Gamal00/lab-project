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
              <div class="row">
                <!-- تغيير كلمة المرور -->
                <div class="col-lg-4 col-md-4 col-sm-12 bg-white m-2 rounded-3">
                  <!-- wellcom message &&&&&&  تغيير كلمة المرور -->
                  <div class="row d-flex justify-content-center mt-4 mb-5">
                    <div class="col-8">
                      <div>
                        <h5 class="mb-0">مرحبا</h5>
                        <h2 class="mb-0">دياب</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                    <div class="col-4 mt-2">
                      <div class="text-center">
                        <img
                          src="https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg"
                          width="90"
                          class="rounded-circle"
                        />
                      </div>
                    </div>
                    <div class="text-center">
                      <button
                        type="button"
                        style="background: #322a92; width: 300px"
                        class="btn text-white fw-bold"
                      >
                        تغيير كلمة المرور
                      </button>
                    </div>
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
                          :style="[color.hex, width, overflow]"
                          class="m-1 btn fw-bold p-1 text-center rounded-2"
                        >
                          <!-- <strong class="d-inline">{{ color.name }}</strong>
                          <button type="button" @click="deletecolor(color.id)">
                            delete
                          </button> -->
                          <div class="dropdown bg-transparent">
                            <a
                              class="btn font dropdown-toggle"
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
                              aria-labelledby="dropdownMenuLink"
                            >
                              <li>
                                <!-- <button
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
                                </button> -->
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
                        </span>
                      </div>
                    </div>
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
export default {
  name: "SettingCom",
  data() {
    return {
      isOpen: false,
      // width: "width:10%",
      // overflow: "overflow:hidden",
      hex: "",
      name: "",
      colors: [],
    };
  },
  async mounted() {
    let result = await axios.get(`https://lab.almona.host/api/colors`);
    if (result.status == 200) {
      console.log(result.data);
      this.colors = result.data.colors;
    }
  },
  methods: {
    async loadecolor() {
      let result = await axios.get(`https://lab.almona.host/api/colors`);
      if (result.status == 200) {
        console.log(result.data);
        this.colors = result.data.colors;
      }
    },
    reset() {
      this.provider_id = "";
      this.name = "";
      this.hex = "";
    },
    async addcolor() {
      console.log("add color fun");
      let result = await axios.post(`https://lab.almona.host/api/add_color`, {
        name: this.name,
        hex: this.hex,
      });
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
      let result = await axios.post(
        `https://lab.almona.host/api/del_color/${id}`
      );
      if (result.data.success == true) {
        console.log(" provider deleted succesfuly");
        this.loadecolor();
      } else {
        console.log("faild to delete provider");
      }
    },
  },
};
</script>

<style scoped></style>
