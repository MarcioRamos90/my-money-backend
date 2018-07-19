const BillingoCycle = require("./billingCycle");

BillingoCycle.methods(["get", "post", "put", "delete"]);
BillingoCycle.updateOptions({ new: true, runValidators: true });

BillingoCycle.route("count", (req, res, next) => {
  BillingoCycle.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      res.json({ value });
    }
  });
});

module.exports = BillingoCycle;
