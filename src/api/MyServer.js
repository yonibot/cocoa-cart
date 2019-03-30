export const createCharge = (paymentDetails) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // simulate return of a successful charge
            console.log("Charge created.")
            resolve('');
        }, 1000);
      });
}
