import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((data) => {
      for (const res of data) {
        if (res.status === 'rejected') {
          res.value = res.reason.message;
          return res.reason;
        }
      }
      return data;
    });
}
