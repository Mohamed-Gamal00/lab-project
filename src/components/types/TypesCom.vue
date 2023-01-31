<template>
  <div>
    <!-- اضافة نوع -->
    <div v-if="loading">
      <h1>loooding.....</h1>
      <PageLoader />
    </div>
    <div class="col-md-12 col-sm-12">
      <div class="row">
        <div class="mt-4 mb-5">
          <span
            ><h4 class="fw-bold text-black">
              <strong>انواع الضروس </strong>
            </h4></span
          >
          <span>
            <!-- اضف النوع -->
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
              v-for="type in types"
              :key="type.id"
              class="m-1 btn fw-bold p-1 text-center rounded-2"
            >
              <!-- <strong class="d-inline">{{ color.name }}</strong>
                          <button type="button" @click="deletetype(color.id)">
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
                  <strong class="d-inline">{{ type.name }}</strong>
                </a>

                <ul
                  class="dropdown-menu"
                  v-if="type == '1'"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <button
                      @click="(isedit = true), Editype(type)"
                      type="button"
                      class="dropdown-item"
                    >
                      تعديل
                    </button>
                  </li>
                  <li>
                    <a
                      @click="deletetype(type.id)"
                      class="dropdown-item"
                      href="#"
                      >حذف</a
                    >
                  </li>
                </ul>
              </div>
              <!-- add type popup -->
              <teleport to="body">
                <div class="modalpopup" v-if="isOpen">
                  <div class="">
                    <h2>اختار نوع الخاص بالضرس</h2>
                    <div>
                      <br />
                      <label for="floatingInput">نوع الضرس</label>
                      <input type="text" class="form-control" v-model="name" />

                      <br />
                      <label for="floatingInput">السعر </label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="price"
                      />
                    </div>
                    <div class="mt-lg-2">
                      <button
                        type="button"
                        class="btn shadow"
                        @click="(isOpen = false), addcolor()"
                      >
                        اضف
                      </button>
                      <button
                        type="button"
                        class="btn shadow"
                        @click="(isOpen = false), reset()"
                      >
                        إغلاق
                      </button>
                    </div>
                  </div>
                </div>
              </teleport>
              <!-- edit type popup -->
              <teleport to="body">
                <div class="modalpopup" v-if="isedit">
                  <div class="">
                    <h2>تعديل النوع الخاص بالضرس</h2>
                    <div>
                      <br />
                      <label for="floatingInput">نوع الضرس</label>
                      <input type="text" class="form-control" v-model="name" />

                      <br />
                      <label for="floatingInput">السعر </label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="price"
                      />
                    </div>
                    <div class="mt-lg-2">
                      <button
                        type="button"
                        class="btn shadow"
                        @click="(isedit = false), UpdateType()"
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
    </div>
  </div>
</template>

<script>
import PageLoader from "@/components/pageloader/PageLoader.vue";
import axios from "axios";
export default {
  name: "TypesCom",
  components: { PageLoader },
  data() {
    return {
      loading: false,
      isOpen: false,
      isedit: false,
      price: "",
      name: "",
      types: [],
      type_id: "",
      type: "",
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
    let result = await axios.get(`https://lab.almona.host/api/types`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (result.status == 200) {
      console.log(result.data);
      this.types = result.data.types;
    }
    this.loading = false;
  },
  methods: {
    async loadetypes() {
      this.loading = true;
      let token = localStorage.getItem("token");
      let result = await axios.get(`https://lab.almona.host/api/types`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (result.status == 200) {
        console.log(result.data);
        this.types = result.data.types;
      }
      this.loading = false;
    },
    reset() {
      this.provider_id = "";
      this.name = "";
      this.price = "";
    },
    async addcolor() {
      let token = localStorage.getItem("token");
      console.log("add color fun");
      let result = await axios.post(
        `https://lab.almona.host/api/add_type`,
        {
          name: this.name,
          price: this.price,
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
        this.loadetypes();
        setTimeout(() => {
          this.price = "";
          this.name = "";
        }, 1000);
      } else {
        console.log("data false");
      }
    },
    async deletetype(id) {
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
            console.log("delete doctor");
            axios.post(`https://lab.almona.host/api/del_type/${id}`, {
              headers: {
                Authorization: "Bearer " + token,
              },
            });

            this.$swal.fire(
              "حذف!",
              "تم حذف العنصر بنجاح.",
              "success",
              this.loadetypes()
            );
            this.loadetypes();
          }
        });
      // let result = await axios.post(
      //   `https://lab.almona.host/api/del_type/${id}`
      // );
      // if (result.data.success == true) {
      //   console.log(" provider deleted succesfuly");
      //   this.loadetypes();
      // } else {
      //   console.log("faild to delete type");
      // }
    },
    Editype(type) {
      console.log("type");
      this.type_id = type.id;
      this.name = type.name;
      this.price = type.price;
      console.log("Editcolor call success");
    },
    async UpdateType() {
      let token = localStorage.getItem("token");
      let result = await axios.post(
        `https://lab.almona.host/api/edit_type/${this.type_id}`,
        {
          name: this.name,
          price: this.price,
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
          this.price = "";
        }, 1000);
        this.isedit = false;
        this.loadetypes();
      } else {
        console.log("data false");
      }
      console.log(result);
    },
  },
};
</script>

<style scoped>
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
