let number = '2570';

let new_num = number.replace(/[۰-۹]/g, function(w) {
  var persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return persian.indexOf(w);
});
console.log(new_num);
console.log(number);
