const promiseTest = function () {
  return new Promise((resolver, reject) => {
    setTimeout(() => {
      resolver(100);
      //   reject('error');
      }, 2000);
  });
}

promiseTest().then((res) => {
  console.log(res);
});

