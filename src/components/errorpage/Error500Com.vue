<template>
  <div class="error">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 d-flex justify-content-center">
          <section class="page_501">
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <div class="col-sm-offset-1 text-center">
                    <div class="contant_box_501">
                      <div class="row">
                        <img
                          src="@/assets/lab_img/error500.gif"
                          class="thumbnail img-fluid"
                          alt=""
                        />
                      </div>
                      <h3 class="h2">تعذر الاتصال بالخادم</h3>

                      <p>تحقق من الاتصال بالإنترنت !</p>

                      <router-link
                        class="m-2 link_501 text-decoration-none"
                        :to="{ name: 'login' }"
                        exact
                        ><a
                          class="fw-bold text-white text-decoration-none"
                          href="#home"
                          >الصفحة الرئيسة</a
                        ></router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "Error500Com",
  components: {},
  async mounted() {},
};
</script>
<style scoped>
.error {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error .link_501 {
  color: #fff !important;
  padding: 10px 20px;
  background: #322a7d;
  margin: 20px 0;
  display: inline-block;
}
</style>
