const EntitySchema = require("typeorm").EntitySchema;

class School {
  constructor(data) {
    if (!data) {
      return;
    }
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
}

const SchoolSchema = new EntitySchema({
  name: "School",
  target: School,
  columns: {
    id: { primary: true, type: "int", generated: true },
    name: { type: "varchar", length: 45 },
    email: { type: "varchar", length: 45 },
    password: { type: "varchar", length: 100 },
    createdAt: { createDate: true },
    updatedAt: { updateDate: true },
  },
  relations: {
    orders: {
      target: () => "Order",
      type: "one-to-many",
      inverseSide: "school",
    },
  },
});

module.exports = {
  School,
  SchoolSchema,
};
