const createToken = (paymentDetails) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // simulate return of a token
            resolve('3dwe8fhw9fw3984');
        }, 3000);
      });
}
