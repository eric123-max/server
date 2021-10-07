
const populateDish = require('../../hooks/populate-dish');

const { populate } = require ('feathers-hooks-common')

const BmenuDishschema = {
  include: {
    service: 'dishes',
    nameAs: 'breakfast',
    parentField: 'breakfast',
    childField: '_id'
  }
}

const LmenuDishschema = {
  include: {
    service: 'dishes',
    nameAs: 'lunch',
    parentField: 'lunch',
    childField: '_id'
  }
}

const DmenuDishschema = {
  include: {
    service: 'dishes',
    nameAs: 'dinner',
    parentField: 'dinner',
    childField: '_id'
  }
}

const SmenuDishschema = {
  include: {
    service: 'dishes',
    nameAs: 'snack',
    parentField: 'snack',
    childField: '_id'
  }
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populate({schema: BmenuDishschema}), populate({schema: LmenuDishschema}), populate({schema: DmenuDishschema}), populate({schema: SmenuDishschema})],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
