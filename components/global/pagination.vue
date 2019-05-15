<style lang="scss" scoped>
.resaa-pagination {
  width: 100%;
  display: flex;
  height: 38px;
  > a {
    width: 90px;
    display: flex;
    justify-content: center;
    background: #dcdfe0;
    height: 100%;
    align-items: center;
    height: 100%;
    cursor: pointer;
    color: #333;
    text-decoration: none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
    &.prev {
      border-radius: 0 0 16px 0;
    }
    &.next {
      border-radius: 0 0 0 16px;
    }
    &:hover {
      background: #febe10;
    }
    &[disabled] {
      opacity: 0.75;
      color: #666;
      background-color: #dcdfe0;
      cursor: default;
    }
  }
}
ul {
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  direction: rtl;
  background: #fff;
  cursor: pointer;
  li {
    flex: 0 1 12%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #fff;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
    &:hover,
    &.selected {
      background: #febe10;
    }
  }
}
</style>
<template>
  <section v-if="lastPage > 1" class="resaa-pagination">
    <a :disabled="page==1" @click="goPrev" class="prev">قبلی</a>
    <a :disabled="page==1" @click="goFirst" class="first">اولین</a>
    <ul>
      <li
        @click="goPage(num)"
        v-for="num in pages"
        :key="num"
        :class="{selected:num===page}"
      >{{num | persianDigit}}</li>
    </ul>
    <a :disabled="page==lastPage" @click="goLast" class="last">آخرین</a>
    <a :disabled="page==lastPage" @click="goNext" class="next">بعدی</a>
  </section>
</template>
<script>
import _ from "lodash";
export default {
  props: ["value", "limit", "totalItems", "numOfPage"],
  data: () => ({
    page: 1,
    page_show: 10
  }),
  watch: {
    page() {
      this.$emit("change", this.page);
    }
  },
  created() {
    this.page = JSON.parse(JSON.stringify(this.value));
    this.page_show = this.numOfPage || 10;
  },
  updated() {
    this.page = JSON.parse(JSON.stringify(this.value));
  },
  methods: {
    goPrev() {
      if (this.page < 2) {
        return;
      }
      this.page -= 1;
    },
    goNext() {
      if (this.page === this.lastPage) {
        return;
      }
      this.page += 1;
    },
    goPage(page) {
      this.page = page;
    },
    goFirst() {
      this.page = 1;
    },
    goLast() {
      this.page = this.lastPage;
    }
  },
  computed: {
    lastPage() {
      return Math.ceil(this.totalItems / this.limit);
    },
    pages() {
      let start = 1,
        end = this.page_show;
      if (this.lastPage < this.page_show) {
        end = this.lastPage;
      }
      if (this.page > this.page_show / 2) {
        if (this.lastPage > this.page + this.page_show / 2) {
          start = this.page - Math.floor(this.page_show / 2);
          end = this.page + Math.floor(this.page_show / 2);
        } else {
          start = this.lastPage - this.page_show + 2;
          end = this.lastPage + 1;
        }
      }
      return _.range(start, end + 1);
    }
  }
};
</script>
