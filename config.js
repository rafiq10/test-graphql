const config = {
  "port": 9000,
  "sqldb": {
    "dialect": "mssql",
    "server": "datacluster",
    "database": "TIS_FinanzasGlobal",
    "username": "Rafal",
    "password": "Rfl2206"
  },
  "winston": { // and Loggly details
    token: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    subdomain: "myCompanyAccount",
    tags: ["GQL2SQL", "API"],
    handleExceptions: true,
    json: true
  }
}

module.exports = config
