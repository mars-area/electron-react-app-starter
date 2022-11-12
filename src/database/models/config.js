const Store = require('electron-store');

const configSchema = {
  path: {
    type: 'string',
    default: ''
  },
  createdAt: {
    type: 'string',
    default: new Date().toISOString()
  },
  updatedAt: {
    type: 'string',
    default: new Date().toISOString()
  }
}

const Configs = new Store(configSchema)

module.exports = { Configs }