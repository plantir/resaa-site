<template>
  <img v-if="lazy" v-lazy="image_src" @error="onEror" :alt="alt" />
  <img v-else :src="image_src" :alt="alt" @error="onEror" />
</template>

<script>
export default {
  props: {
    doctor: {},
    size: {
      default: 3
    }
  },
  data() {
    return {
      lazy: false,
      error: false
    };
  },
  mounted() {
    if (this.$attrs.lazy) {
      this.lazy = true;
    }
  },
  methods: {
    onEror() {
      this.error = true;
    }
  },
  computed: {
    image_src() {
      if (this.error) {
        return "/img/doc-placeholder_old.png";
      } else {
        return `/api/doctors/${this.doctor.subscriberNumber}/image?imageSize=${this.size}`;
      }
    },
    fullname() {
      return this.doctor.fullNameWithTitle
        ? this.doctor.fullNameWithTitle
        : this.doctor.firstName + " " + this.doctor.lastName;
    },
    alt() {
      return `تصویر ${this.fullname}`;
    }
  }
};
</script>