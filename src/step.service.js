// * TODO: Implement function for updating user's step data in store
// * TODO: Function for getting user's step data may need some adjustments
module.exports = function stepService(store) {
  const builtinProps = Object.getOwnPropertyNames(Object.prototype).sort();
  const service = {};

  service.get = (username) => {
    if (username in builtinProps) {
      return undefined;
    }
    return store[username];
  };

  service.add = (username, ts, newSteps) => {
    // Assume that `store` is initially an empty object {}. An example `store` is:
    // {
    //   jenna: {
    //     ts: 1503256778463,
    //     cumulativeSteps: 12323,
    //   },
    //   james: {
    //     ts: 1503256824767,
    //     cumulativeSteps: 587,
    //   },
    // }

    // if (store[username]) {
    //   store[username].ts = ts;
    //   store[username].cumulativeSteps += newSteps;
    // } else {
    //   store[username] = {};
    //   store[username].ts = ts;
    //   store[username].cumulativeSteps += newSteps;
    // }

    if (!store[username]) {
      store[username] = {};
      store[username].cumulativeSteps = 0;
    }
    store[username].ts = ts;
    store[username].cumulativeSteps += newSteps;

  };

  return service;
};
