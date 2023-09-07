
export const loginService = () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const res = await fetch('account.json');
        const data = await res.json();
        resolve(data)
      } catch (error) {
        reject(error);
      }
    }, 2000)
  });
}