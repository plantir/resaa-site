<style lang="scss" scoped >
.v-expansion-panel {
  box-shadow: none;
  ::v-deep {
    .v-expansion-panel__header {
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16);
      border-radius: 10px;
      background: #fff;
    }
    .v-expansion-panel__body {
      padding-top: 20px;
      background: none;
      transition: 0.18s cubic-bezier(1, 1, 1, 1);
      .v-card {
        overflow: hidden;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16) !important;
        border-radius: 10px;
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
        transition: none !important;
      }
      &--active {
        .v-expansion-panel__header {
          background: #00bca4;
          color: #fff;
        }
        .v-icon {
          &:before {
            content: "\f068";
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
<template>
  <section>
    <div class="wrapper">
      <v-expansion-panel v-model="model">
        <v-expansion-panel-content v-for="(faq,i) in items" :key="i" expand-icon="la-plus">
          <div slot="header">{{faq.question}}</div>
          <v-card>
            <v-card-text v-html="faq.answer"></v-card-text>
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