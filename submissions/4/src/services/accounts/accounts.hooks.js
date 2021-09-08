module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      async (context) => {
        context.data.created_at = new Date();
        return context;
      },
    ],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [
      async (context) => {
        context.result.data.forEach((item) => {
          item.active = true;
        });
        return context;
      },
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
