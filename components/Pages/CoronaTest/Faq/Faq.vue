<style lang="scss" scoped >
h2 {
  margin-bottom: 32px !important;
  text-align: center;
}
.v-expansion-panel {
  box-shadow: none;
  ::v-deep {
    .v-expansion-panel__header {
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16);
      border-radius: 10px;
      background: #fff;
      font-size: 16px;
      font-weight: 700;
      @include media(md-and-up) {
        min-height: 50px;
      }
    }
    .v-expansion-panel__body {
      padding-top: 20px;
      background: none;
      transition: 0.18s cubic-bezier(1, 1, 1, 1);
      .v-card {
        overflow: hidden;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16) !important;
        border-radius: 10px;
        font-size: 16px;
        line-height: 28px;
      }
    }
    .v-expansion-panel__container {
      background: none;
      border-top: none;
      margin-top: 16px;
      &:first-child {
        margin-top: 0;
      }
      .v-icon {
        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
      }
      &--active {
        .v-expansion-panel__header {
          background: #00bca4;
          color: #fff;
        }
        .v-icon {
          color: #fff !important;
          // &:before {
          // content: "\f28e";
          // }
        }
      }
    }
  }
}
</style>
<template>
  <section>
    <div class="wrapper">
      <h2>سوالات متداول درباره تست کرونا</h2>
      <v-expansion-panel v-model="model">
        <v-expansion-panel-content v-for="(faq,i) in items" :key="i">
          <div slot="header">
            <p class="mb-0">{{faq.question}}</p>
          </div>
          <v-card>
            <v-card-text>
              <p class="mb-0" v-html="faq.answer"></p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </section>
</template>
<script>
export default {
  props: ["items"],
  data() {
    return {
      model: 0
    };
  }
};
</script>