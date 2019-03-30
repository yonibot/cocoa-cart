export const createToken = (paymentDetails) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // simulate return of a token
            console.log("Token created - 3dwe8fhw9fw3984")
            if (paymentDetails.cardNumber === '0000000000000000') {
                reject();
            } else {
                resolve('3dwe8fhw9fw3984');
            }
        }, 1000);
      });
}
