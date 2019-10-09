import doctors_json from '@/components/doctor_detail/doctors.json';
let doctors = Object.freeze(doctors_json);
export default async function(ctx, inject) {
  for (let doctor of doctors) {
    if (!doctor.timetable || !doctor.timetable.segments) {
      continue;
    }
    console.log(doctor);
    for (const item of doctor.timetable.segments) {
      let start_hour = get_hour(item.from);
      let end_hour = get_hour(item.to);
      let start_minute = get_minute(item.from);
      let end_minute = get_minute(item.to);
      const day_of_week = get_day(item.from);
      let now = {
        day_of_week: new Date().getDay(),
        hour: new Date().getHours(),
        minute: new Date().getMinutes()
      };
      if (day_of_week == now.day_of_week) {
        if (start_hour < now.hour && end_hour > now.hour) {
          doctor.currentlyAvailable = true;
          break;
        }
        if (start_hour == now.hour && start_minute < now.minute) {
          doctor.currentlyAvailable = true;
          break;
        }
        if (end_hour == now.hour && end_minute > now.minute) {
          doctor.currentlyAvailable = true;
          break;
        }
      }
    }
  }
  function get_hour(value) {
    let hour = Math.floor((value / 60) % 24);
    return hour < 10 ? `0${hour}` : hour;
  }
  function get_minute(value) {
    let minute = Math.round(((value / 60) % 1) * 60);
    return minute < 10 ? `0${minute}` : minute;
  }
  function get_day(value) {
    return Math.floor(value / 60 / 24);
  }
  inject('virtual_doctors', doctors);
}
