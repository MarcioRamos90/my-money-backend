const BillingoCycle = require("./billingCycle");

BillingoCycle.methods(["get", "post", "put", "delete"]);
BillingoCycle.updateOptions({ new: true, runValidators: true });

module.exports = BillingoCycle;
