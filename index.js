'use strict';

const http = require("http");
const {
  URL,
  URLSearchParams
} = require('url');

const fetch = require('node-fetch');
/* Default config */
const config = {
  "host": 'localhost',
  "port": 9000
};
const args = process.argv.slice(2);

const cosmos = {};

// used for raw registry response
cosmos.chain_registry = {
  "api_github_repotree": "https://api.github.com/repos/cosmos/chain-registry/git/trees/master",
  "chains": {},
  "chain_count": null,
  "update_from_github": async function() {}
};

// TODO: make this a module
cosmos.chain_registry.update_from_github = async function() {
  await fetch(cosmos.chain_registry.api_github_repotree)
    .then((res) => res.json())
    .then((json) => {
      let chain_count = 0;
      json.tree.forEach((item, i) => {
        if (item.path == ".github") return; // skip root
        if (item.type == "tree") {
          cosmos.chain_registry.chains[item.path] = `https://raw.githubusercontent.com/cosmos/chain-registry/master/${item.path}/chain.json`;
          chain_count++;
        }
      });
      cosmos.chain_registry.chain_count = chain_count;
    });
  console.log('\x1b[34m%s\x1b[0m', `config.chain_registry updated. Total chains: ${cosmos.chain_registry.chain_count}`);
};
cosmos.chain_registry.get_chain_json_file = async function(chainName) {
  if (cosmos.chain_registry.chains[chainName]) {
    let chainURL = cosmos.chain_registry.chains[chainName];
    let chainJson = {};
    await fetch(chainURL)
      .then((res) => res.json())
      .then((json) => {
        console.dir(json, {
          colors: true
        });
        chainJson = json;
      });
    return chainJson;
  }
  return false;
};



// generic functions
async function getJSONBodyAsync(req) {
  const buffers = [];
  for await (const chunk of req) {
    buffers.push(chunk);
  }
  const data = Buffer.concat(buffers).toString();
  return JSON.parse(data);
}


// HTTP Server
const server = http.createServer(async (req, res) => {
  console.log('\x1b[36m%s\x1b[0m', "##### Client Request: " + req.method + " " + req.url);

  const url = new URL(req.url, "http://example.test");

  const res_json = {};
  if (req.method === "GET") {
    const arrPath = url.pathname.split("/");
    // console.log(arrPath);
    switch (arrPath[1]) {
      case "chain": // https://localhost:9000/chain/{chainName}
        if (arrPath[2] && arrPath[2] != '') {
          console.log('\x1b[36m%s\x1b[0m', `### Chain Request: '${arrPath[2]}'`);
          let chainName = arrPath[2];
          let chainJson = await cosmos.chain_registry.get_chain_json_file(chainName);
          if (chainJson) {
            res_json.chain = chainName;
            res_json.apis = chainJson.apis.rest;
          } else {
            res_json.error = "Chain not found";
            res_json.msg = "Chain not found";
          }
          //set the response
          res.writeHead(200, {
            "Content-Type": "application/json"
          });

          // let res_json = await getJSONBodyAsync(req);
          console.dir(res_json, {
            colors: true
          });
          res.write(JSON.stringify(res_json));
          res.end();
          return;
        }

        break;
      default:
        break;
    }
  }


  console.log(400);
  res.writeHead(404);
  res.end();
});

server.listen(config.port, config.host, () => {
  console.log('\x1b[33m%s\x1b[0m', `Server is running on http://${config.host}:${config.port}`);

  console.log(cosmos.chain_registry.update_from_github());
});


// REFERENCE:
// cosmos.test_address = "cosmos1uvay4nxlvy4uud25dcvdmruhl4n0zg0dv0sqk2";
/*
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

*/
