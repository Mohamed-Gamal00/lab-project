<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row align-items-center mb-2">
                <!-- header -->
                <div class="fw-bold fs-4 mt-lg-4">
                  <span style="color: #322a7d"
                    ><span><FontAwesome icon="money-bill" />المشتريات</span>
                  </span>
                  <span class="float-start">
                    <button
                      @click="add_purchases = true"
                      type="button"
                      class="btn btn-primary"
                      style="background-color: #322a7d; border: none"
                    >
                      اضافة مشتريات
                      <span
                        ><FontAwesome style="color: orange" icon="money-bill"
                      /></span>
                    </button>
                  </span>
                </div>
              </div>
              <div v-if="loading">
                <h1>loooding.....</h1>
                <PageLoader />
              </div>
              <div class="row">
                <!-- col-8 table contain -->
                <div class="col-lg-8 col-md-8 col-sm-12 rounded-3">
                  <!-- table -->
                  <div class="table-responsive">
                    <table class="table mt-lg-3">
                      <!-- <div v-if="purchases.length > 0">
                        <span class="small fw-bold"
                          >العدد ({{ purchases.length }})</span
                        >
                      </div> -->
                      <tbody>
                        <tr
                          v-for="purchase in purchases"
                          :key="purchase.id"
                          class="bg-white"
                        >
                          <!-- اسم المنتج-->
                          <td colspan="">
                            <div class="fw-bold font td_width">
                              <span class="m-3">{{ purchase.name }}</span>
                            </div>
                          </td>
                          <!-- اسم التاجر -->
                          <td>
                            <!-- <button
                                type="button"
                                class="btn fw-bold font-lg mb-0 p-1 button_number"
                              >
                                <span class="bi-ICON-NAME"> <span></span></span
                                >&nbsp;{{ purchase.provider }}
                              </button> -->
                            <div class="fw-bold font td_width">
                              <span class="m-3">{{ purchase.provider }}</span>
                            </div>
                          </td>
                          <!-- السعر في الكمية -->
                          <td>
                            <span class="d-block font">
                              {{ purchase.amount }}x{{ purchase.price }}
                            </span>
                          </td>
                          <!-- السعر الاجمالي  -->
                          <td>
                            <span class="d-block font">
                              {{ purchase.total_price }}
                            </span>
                          </td>
                          <!-- خيارات -->
                          <td>
                            <span class="d-block">
                              <!-- خيارات -->
                              <div class="dropdown">
                                <a
                                  class="btn font dropdown-toggle"
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
                                        (edit_purchases = true),
                                          Editpurchase(purchase)
                                      "
                                      type="button"
                                      class="dropdown-item"
                                    >
                                      تعديل
                                    </button>
                                  </li>
                                  <li v-if="type == '1'">
                                    <a
                                      @click="deletepurchase(purchase.id)"
                                      class="dropdown-item"
                                      href="#"
                                      >حذف</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </span>
                          </td>
                          <!-- modal popup add-->
                          <div class="root">
                            <teleport to="body">
                              <div class="modalpopup" v-if="add_purchases">
                                <div class="text-center">
                                  <!-- header -->
                                  <div class="modal-header d-inline">
                                    <h5
                                      class="modal-title fw-bold text-center"
                                      style="color: #322a7d"
                                      id="exampleModalLabel"
                                    >
                                      اضافة مشتريات
                                    </h5>
                                    <p class="text-center">
                                      اضف الي قائمة المشتريات
                                    </p>
                                  </div>
                                  <div class="modal-body">
                                    <form>
                                      <!-- اختيار التاجر -->
                                      <div class="row g-3 align-items-center">
                                        <div
                                          class="col-auto d-block mx-auto m-3"
                                        >
                                          <select
                                            class="form-select"
                                            v-model="provider_id"
                                          >
                                            <option disabled value="">
                                              اسم التاجر
                                            </option>
                                            <option
                                              :value="provider.id"
                                              v-for="provider in providers"
                                              :key="provider.id"
                                            >
                                              {{ provider.name }}
                                            </option>
                                          </select>
                                          <span
                                            class="erroe-feedbak"
                                            v-if="v$.provider_id.$error"
                                            >{{
                                              v$.provider_id.$errors[0].$message
                                            }}</span
                                          >
                                          <!-- <div>Selected: {{ selected }}</div> -->
                                        </div>
                                      </div>
                                      <!-- name اسم المنتج -->
                                      <div class="row g-3 align-items-center">
                                        <div
                                          class="col-auto d-block mx-auto m-3"
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder="اسم المنتج"
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
                                      <!-- العملية الحسابية -->
                                      <div class="">
                                        <!-- amount -->
                                        <input
                                          style="width: 100px"
                                          lass="form-control"
                                          type="number"
                                          id="amount"
                                          v-model="amount"
                                          placeholder="الكمية"
                                        />&nbsp;
                                        <span
                                          class="erroe-feedbak"
                                          v-if="v$.amount.$error"
                                          >{{
                                            v$.amount.$errors[0].$message
                                          }}</span
                                        >
                                        <!-- price -->
                                        <input
                                          style="width: 100px"
                                          lass="form-control"
                                          type="number"
                                          id="secondNumb"
                                          v-model="price"
                                          placeholder="السعر"
                                        />
                                        <span
                                          class="erroe-feedbak"
                                          v-if="v$.price.$error"
                                          >{{
                                            v$.price.$errors[0].$message
                                          }}</span
                                        >
                                        <h6 class="mt-2">
                                          result is {{ result }}
                                        </h6>
                                      </div>
                                      <!-- تاكيد و الغاء -->
                                      <button
                                        class="btn"
                                        type="button"
                                        @click="addpurchases()"
                                      >
                                        add</button
                                      >&nbsp;
                                      <button
                                        class="btn"
                                        @click="
                                          (add_purchases = false), reset()
                                        "
                                      >
                                        close
                                      </button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </teleport>
                          </div>

                          <!-- modal popup edit-->
                          <div class="root">
                            <teleport to="body">
                              <div class="modalpopup" v-if="edit_purchases">
                                <div class="text-center">
                                  <!-- header -->
                                  <div class="modal-header d-inline">
                                    <h5
                                      class="modal-title fw-bold text-center"
                                      style="color: #322a7d"
                                      id="exampleModalLabel"
                                    >
                                      تعديل
                                    </h5>
                                  </div>
                                  <div class="modal-body">
                                    <form>
                                      <!-- اختيار التاجر -->
                                      <div class="row g-3 align-items-center">
                                        <div
                                          class="col-auto d-block mx-auto m-3"
                                        >
                                          <select
                                            class="form-select"
                                            v-model="provider_id"
                                          >
                                            <option disabled value="">
                                              اسم التاجر
                                            </option>
                                            <option
                                              :value="provider.id"
                                              v-for="provider in providers"
                                              :key="provider.id"
                                            >
                                              {{ provider.name }}
                                            </option>
                                          </select>
                                          <span
                                            class="erroe-feedbak"
                                            v-if="v$.provider_id.$error"
                                            >{{
                                              v$.provider_id.$errors[0].$message
                                            }}</span
                                          >
                                          <!-- <div>Selected: {{ selected }}</div> -->
                                        </div>
                                      </div>
                                      <!-- name اسم المنتج -->
                                      <div class="row g-3 align-items-center">
                                        <div
                                          class="col-auto d-block mx-auto m-3"
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                            placeholder="اسم المنتج"
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
                                      <!-- العملية الحسابية -->
                                      <div class="">
                                        <!-- amount -->
                                        <input
                                          style="width: 100px"
                                          lass="form-control"
                                          type="number"
                                          id="amount"
                                          v-model="amount"
                                          placeholder="الكمية"
                                        />&nbsp;
                                        <span
                                          class="erroe-feedbak"
                                          v-if="v$.amount.$error"
                                          >{{
                                            v$.amount.$errors[0].$message
                                          }}</span
                                        >
                                        <!-- price -->
                                        <input
                                          style="width: 100px"
                                          lass="form-control"
                                          type="number"
                                          id="secondNumb"
                                          v-model="price"
                                          placeholder="السعر"
                                        />
                                        <span
                                          class="erroe-feedbak"
                                          v-if="v$.price.$error"
                                          >{{
                                            v$.price.$errors[0].$message
                                          }}</span
                                        >
                                        <h6 class="mt-2">
                                          result is {{ result }}
                                        </h6>
                                      </div>
                                      <!-- تاكيد و الغاء -->

                                      <!-- edit -->
                                      <button
                                        type="button"
                                        class="btn"
                                        @click="Updatepurchase()"
                                      >
                                        تعديل</button
                                      >&nbsp;
                                      <button
                                        type="button"
                                        class="btn"
                                        @click="
                                          (edit_purchases = false), reset()
                                        "
                                      >
                                        الغاء
                                      </button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </teleport>
                          </div>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- pagination -->
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                      <li
                        class="page-item"
                        v-for="link in pagination.links"
                        :key="link"
                        v-bind:class="[
                          { disabled: !link.url },
                          { active: link.active },
                        ]"
                      >
                        <a
                          class="page-link"
                          v-html="link.label"
                          @click="fetchpurchases(link.url)"
                        ></a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <!--col-4 الاحصائيات -->
                <div class="col-lg-4 col-sm-12 col-md-3 rounded-3">
                  <!-- ملخص الاحصائيات -->
                  <div class="row">
                    <p>ملخص الاحصائيات</p>
                    <button
                      style="
                        height: 150px;
                        background-color: #322a7d;
                        border: none;
                      "
                      class="rounded-4 text-white p-0"
                    >
                      <div class="mb-3">
                        <p class="fw-bold text-white">
                          <strong class="text-white">اجمالي المشتريات</strong>
                        </p>
                      </div>
                      <h2>
                        <strong class="text-white"> {{ totalprice }}</strong>
                      </h2>
                    </button>
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
  name: "PurchasesCom",
  components: { PageLoader },

  data() {
    return {
      loading: false,
      v$: useVuelidate(),
      add_purchases: false,
      edit_purchases: false,
      amount: "", //amount
      price: "", //price
      // selected: "",
      providers: [],
      provider_id: "",
      name: "",
      purchases: [],
      pagination: {},
      purshase_id: "",
      type: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: maxLength(20) },
      provider_id: { required },
      amount: { required },
      price: { required },
    };
  },
  computed: {
    result: function () {
      return this.amount * this.price;
    },
    totalprice: function () {
      let sum = 0;
      for (let i = 0; i < this.purchases.length; i++) {
        sum += parseFloat(this.purchases[i].total_price);
      }

      return sum;
    },
  },
  /* get purchases and purchases*/
  async mounted() {
    this.loading = true;
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "login" });
    }
    this.type = JSON.parse(user).type;

    this.fetchpurchases();
    /* allProviders */
    let token = localStorage.getItem("token");
    await axios
      .get(`https://lab.almona.host/api/allProviders`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        // console.log(response);
        this.providers = response.data.data;
      })
      .catch((err) => {
        console.log("catch error", err.response);
        this.$router.push({ name: "servererror" });
      });

    this.loading = false;
  },

  methods: {
    makePagination(meta) {
      let pagination = {
        links: meta.links,
      };
      this.pagination = pagination;
    },
    async fetchpurchases(page_url) {
      page_url = page_url || `https://lab.almona.host/api/purchases`;
      let token = localStorage.getItem("token");
      await axios
        .get(page_url, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          this.purchases = response.data.data;
          this.makePagination(response.data.meta);
        })
        .catch((err) => {
          console.log(err.response);
          this.$router.push({ name: "servererror" });
        });
    },
    async loadpurchase() {
      this.loading = true;
      let token = localStorage.getItem("token");
      await axios
        .get(`https://lab.almona.host/api/purchases`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          this.purchases = response.data.data;
        });
      this.loading = false;
    },
    reset() {
      this.provider_id = "";
      this.name = "";
      this.amount = "";
      this.price = "";
      this.v$.name.$errors[0].$message = ""; // اسم المنتج
      this.v$.provider_id.$errors[0].$message = ""; // اسم المنتج
      this.v$.amount.$errors[0].$message = "";
      this.v$.price.$errors[0].$message = "";
    },
    async addpurchases() {
      let token = localStorage.getItem("token");
      console.log("add purchases function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        await axios
          .post(
            `https://lab.almona.host/api/add_purchase`,
            {
              name: this.name,
              provider_id: this.provider_id,
              amount: this.amount,
              price: this.price,
            },
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          )
          .then(() => {
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
            this.add_purchases = false;
            this.loadpurchase();
            setTimeout(() => {
              this.provider_id = "";
              this.name = "";
              this.amount = "";
              this.price = "";
              this.v$.name.$errors[0].$message = ""; // اسم المنتج
              this.v$.provider_id.$errors[0].$message = ""; // اسم المنتج
              this.v$.amount.$errors[0].$message = "";
              this.v$.price.$errors[0].$message = "";
            });
          })
          .catch((err) => {
            console.log(err.response);
          });
      } else {
        console.log("form validated faild");
      }
    },
    async deletepurchase(id) {
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
            console.log("delete purchase");
            axios
              .post(`https://lab.almona.host/api/del_purchase/${id}`, {
                headers: {
                  Authorization: "Bearer " + token,
                },
              })
              .then((response) => {
                console.log(response);
                if (response.data.success == true) {
                  console.log(response);
                  this.$swal.fire("حذف!", "تم حذف العنصر بنجاح.", "success");
                  this.loadpurchase();
                } else {
                  this.$swal.fire("فشل الحذف", "فشل حذف هذا العنصر", "error");
                  console.log(response);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
      // console.log("delete function run");
      // let result = await axios.post(
      //   `https://lab.almona.host/api/del_purchase/${id}`,
      //   {}
      // );
      // if (result.data.success == true) {
      //   console.log(" purchase deleted succesfuly");
      //   console.log(result.data);
      //   this.loadpurchase();
      // } else {
      //   console.log("end dletepurchases");
      // }
    },
    async Editpurchase(purchase) {
      this.name = purchase.name;
      this.amount = purchase.amount;
      this.price = purchase.price;
      this.provider_id = purchase.provider_id;
      this.purshase_id = purchase.id;
      console.log("done open Editpurchase");
    },
    async Updatepurchase() {
      let token = localStorage.getItem("token");
      console.log("update purchase function");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("form validated successfuly");
        await axios
          .post(
            `https://lab.almona.host/api/edit_purchase/${this.purshase_id}`,
            {
              name: this.name,
              amount: this.amount,
              price: this.price,
              provider_id: this.provider_id,
            },
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          )
          .then(() => {
            console.log("data updated succesfuly");
            this.$swal.fire({
              toast: true,
              icon: "success",
              title: "تم التعديل بنجاح",
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
            this.edit_purchases = false;
            this.loadpurchase();
          })
          .catch((err) => {
            console.log(err.response);
          });
        setTimeout(() => {
          this.name = "";
          this.amount = "";
          this.price = "";
          this.provider_id = "";
          this.v$.name.$errors[0].$message = ""; // اسم المنتج
          this.v$.provider_id.$errors[0].$message = ""; // اسم المنتج
          this.v$.amount.$errors[0].$message = "";
          this.v$.price.$errors[0].$message = "";
        });
      } else {
        console.log("form validated faild");
      }
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 600px) {
  select {
    width: 225px !important;
  }
  .td_width {
    width: 180px !important;
  }
}
@media only screen and (max-width: 600px) {
  .td_width {
    width: 157px !important;
  }
}
</style>
