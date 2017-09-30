const mongoose = require('mongoose');
const MODEL_NAME = 'Organization';

const organizationSchema = mongoose.Schema({
  name: String,
  email: String,
  uuid: { type: [String], index: true },
  cnpj: String,
  cnas: String,
});

organizationSchema.methods.findByUuid = function (cb) {
  return this.model(MODEL_NAME).find({ uuid: this.uuid }, cb);
}

organizationSchema.methods.findByCnpj = function (cb) {
  return this.model(MODEL_NAME).find({ cnpj: this.cnpj }, cb);
}

organizationSchema.methods.findByCnas = function (cb) {
  return this.model(MODEL_NAME).find({ cnas: this.cnas }, cb);
}

module.exports = mongoose.model(MODEL_NAME, organizationSchema);