const { Forbidden } = require("@feathersjs/errors");
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [
      async (context) => {
        return new Forbidden("Forbidden");
      },
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
