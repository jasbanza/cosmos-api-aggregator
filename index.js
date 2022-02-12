const cosmos = {};
cosmos.test_address = "cosmos1uvay4nxlvy4uud25dcvdmruhl4n0zg0dv0sqk2";

cosmos.chain = {};

cosmos.chain.getAPIUrl = async function(prefix) {
  let apiURL = "";
  let chains = {};
  await fetch("https://raw.githubusercontent.com/jasbanza/cosmos-chains-list/main/cosmos.chains.json")
    .then((res) => res.json())
    .then((json) => {
      chains = json.chains;
    });

  chains.forEach((chain) => {
    if (chain.coinLookup.addressPrefix == prefix) {
      apiURL = chain.apiURL;
    }
  });
  return apiURL;
};

cosmos.api = {};

cosmos.api.balances = async function(address) {

  // get prefix from address
  let prefix = address.substring(0, address.indexOf("1"));


  let apiURL = await cosmos.chain.getAPIUrl(prefix);
  let balances = {};
  await fetch(apiURL + "/cosmos/bank/v1beta1/balances/" + address)
    .then((res) => {
      balances = res;
    });
  return balances;
};
