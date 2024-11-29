const database = require("../../../infra/db");
const { v4: uuidv4 } = require("uuid");
const models = require("../../../infra/models");

const { User } = models;

class UsersRepository {
  async findAll() {
    await database.sync();
    return await User.findAll({
      where: {
        role: "USER",
      },
    });
  }

  async create(user) {
    await database.sync();
    user.id = uuidv4();
    await User.create(user);
  }
}

module.exports = new UsersRepository();
