const uuid = require('uuid')


const getUniqueUserId = () => {
  let id = uuid.v1()
  return id
}

getUniqueUserId()

module.exports = getUniqueUserId;
