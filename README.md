# cosmos-api-aggregator
_Node.js CORS reverse-proxy REST API gateway for all chains found in https://github.com/cosmos/chain-registry_

## Features:
- ***A single endpoint*** for all Cosmos chains rest APIs.
- ***Dynamically scaling*** - No need to maintain a config file when chains are added or updated in the public Cosmos chain-registry.
- ***CORS proxy*** - Not all endpoints have CORS enabled, so web apps will need a CORS proxy.
- ***Low maintenance*** - The only time you will need to change config, is if you want to override...
- ***Custom override*** - If there's a preferred endpoint you'd like to use instead of the defaults.
- ***Caching*** - Keeps cached record of endpoints found in the chain-registry. 
- ***Error handling*** If a chain's endpoint responds with an error, the proxy will update cached endpoints and/or try secondary endpoints. 

## Ideas for later
- ***Monitoring*** - See which endpoints are not working, and alert maintainer 
- ***Logging*** - Errors are logged 
- ***Akash*** - docker compose & akash deploy
