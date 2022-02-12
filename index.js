const cosmos = {};
cosmos.chain_registry_url = "https://github.com/cosmos/chain-registry/tree/master/";
cosmos.test_address = "cosmos1uvay4nxlvy4uud25dcvdmruhl4n0zg0dv0sqk2";
cosmos.api.balances = async function(chainName, address) {
  console.log("cosmos.api.balances");
  console.log(chainName);
  console.log(address);
  console.log();
  let apiURL = await cosmos.chain.getAPIUrl(chainName);

  let balances = {};
  fetch(apiURL + "/cosmos/bank/v1beta1/balances/" + address)
    .then((res) => {
      balances = res;
    });
  return balances;
};

cosmos.chain.getAPIUrl = async function(chainName) {
  console.log("cosmos.chain.getAPIUrl");
  console.log(chainName);
  console.log();

  // get chain info from chain_registry_url:
  let apiURL = "";
  await fetch(cosmos.chain_registry_url + chainName + "/chain.json")
    .then((chain) => {
      console.log(chain.apis.rest[0]);
      apiURL = chain.apis.rest[0];
    });
  return apiURL;
};
