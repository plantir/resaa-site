<style lang="scss" scoped>
.container {
  max-width: 600px;
}
.vote-btn {
  opacity: 0.4;
  &.active {
    opacity: 1;
  }
}
</style>
<template>
  <v-container grid-list-xs>
    <v-card class="pa-3">
      <div ref="wrapper">
        <h3 class="mb-4">
          لطفا نظر خود را در رابطه با
          <span
            class="secondary--text"
          >{{doctor.title}} {{doctor.firstName}} {{doctor.lastName}}</span> بنویسید
        </h3>
        <v-layout row wrap>
          <v-flex xs6>
            <v-btn
              class="vote-btn"
              color="success"
              :class="{active:form.vote == 1}"
              @click="form.vote = 1"
              block
              outline
            >کاملا راضی هستم</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn
              class="vote-btn"
              color="red"
              :class="{active:form.vote == 0}"
              @click="form.vote = 0"
              block
              outline
            >کاملا ناراضی هستم</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
              v-validate="'required'"
              data-vv-as="نام"
              :error-messages="errors.collect('name')"
              name="name"
              label="نام"
              solo
              v-model="form.author"
              id="id"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-textarea
              v-validate="'required'"
              data-vv-as="متن نظر"
              :error-messages="errors.collect('comment')"
              v-model="form.comment"
              name="comment"
              label="لطفا نظر خود را راجع به این پزشک بنویسید"
              solo
            ></v-textarea>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-btn color="primary" block @click="submit">ارسال</v-btn>
          </v-flex>
        </v-layout>
      </div>
    </v-card>
  </v-container>
</template>
<script>
export default {
  async asyncData({
    $axios,
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {
    let { result } = await $axios.$get(`/Doctors/${params.doctorVsin}/profile`);
    let doctor = result.doctor;
    return {
      doctor,
      form: {
        author: "",
        comment: "",
        callId: params.callId,
        doctorVsin: params.doctorVsin,
        vote: 1
      }
    };
  },
  methods: {
    async submit() {
      let valid = await this.$validator.validateAll();
      if (!valid) return;
      let loader = this.$loader.show(this.$refs.wrapper);
      try {
        let result = await this.$axios.$post("api/CallOpinions", this.form);
        await this.$toast.success().showSimple("نظر شما با موفقیت ثبت شد");
        this.resetForm();
      } catch (error) {
        this.$toast
          .error()
          .showSimple("شما قبلا برای این تماس نظر ثبت کرده اید");
      }
      loader.hide();
    },
    resetForm() {
      this.form.comment = null;
      this.form.author = null;
      this.form.vote = 1;
      setTimeout(() => {
        this.$validator.errors.clear();
      }, 10);
    }
  }
};
</script>