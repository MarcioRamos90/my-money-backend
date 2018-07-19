const BillingoCycle = require("./billingCycle");
const errorHandler = require("../common/errorHandler");

BillingoCycle.methods(["get", "post", "put", "delete"]);
BillingoCycle.updateOptions({ new: true, runValidators: true });
BillingoCycle.after("post", errorHandler);
BillingoCycle.after("put", errorHandler);

BillingoCycle.route("count", (req, res, next) => {
  BillingoCycle.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      res.json({ value });
    }
  });
});

BillingoCycle.route("summary", (req, res, next) => {
  BillingoCycle.aggregate(
    {
      $project: {
        credit: { $sum: "$credits.value" },
        debt: { $sum: "$debts.value" }
      }
    },
    {
      $group: {
        _id: null,
        credit: { $sum: "$credit" },
        debt: { $sum: "$debt" }
      }
    },
    {
      $project: { _id: 0, credit: 1, debt: 1 }
    },
    (error, result) => {
      if (error) {
        res.status(500).json({ errors: [error] });
      } else {
        res.json(result[0] || { credit: 0, debt: 0 });
      }
    }
  );
});

module.exports = BillingoCycle;
