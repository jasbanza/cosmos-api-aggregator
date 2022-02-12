const base_address = "cosmos1uvay4nxlvy4uud25dcvdmruhl4n0zg0dv0sqk2";

COSMOS_CONFIG.forEach(function(chain) {
  console.log(chain)


  fetch(chain.apiURL + "/cosmos/bank/v1beta1/balances/" + address)
    .then((res) => {
      console.log(res);
    });

});
