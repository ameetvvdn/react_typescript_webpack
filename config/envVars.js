const envVars = {
}

const devSpecific = {};

const prodSpecific = {};

module.exports = {
  dev: Object.assign(envVars, devSpecific),
  prod: Object.assign(envVars, prodSpecific)
}
