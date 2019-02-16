import Vue from 'vue';
import loading from '~/components/global/loading';
import pagination from '~/components/global/pagination';
import timeTable from '~/components/global/time_table';
import VueRecaptcha from "vue-recaptcha";
Vue.component('v-loading', loading);
Vue.component('pagination', pagination);
Vue.component('timeTable', timeTable);
// Vue.component('VueRecaptcha', VueRecaptcha);
Vue.filter('currency', value => {
  if (typeof value !== 'number') {
    return value;
  }
  return new Intl.NumberFormat().format(value);
});
Vue.filter('persianDigit', value => {
  if (value || value === 0) {
    return value.toString().replace(/\d+/g, function (digit) {
      var enDigitArr = [],
        peDigitArr = [];
      for (var i = 0; i < digit.length; i++) {
        enDigitArr.push(digit.charCodeAt(i));
      }
      for (var j = 0; j < enDigitArr.length; j++) {
        peDigitArr.push(
          String.fromCharCode(
            enDigitArr[j] + (!!value && value === true ? 1584 : 1728)
          )
        );
      }
      return peDigitArr.join('');
    });
  } else {
    return value;
  }
});
// Vue.use(require('vue-jalali-moment'));
Vue.filter('persianDate', (value, format, locale) => {
  if (locale) {
    moment.locale(locale)
  }
  return moment(value, 'YYYY-M-D HH:mm:ss').format(format || 'jYYYY/jM/jD');
});
