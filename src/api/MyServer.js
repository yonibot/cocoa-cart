const createToken = (paymentDetails) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // simulate return of a successful charge
            resolve('');
        }, 1000);
      });
}
