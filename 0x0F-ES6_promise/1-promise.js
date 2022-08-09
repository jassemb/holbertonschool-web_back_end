export default function getFullResponseFromAPI(success) {
    return new Promise(() => { if (success) {
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(Error('The fake API is not working currently'));
      }});
  }
  