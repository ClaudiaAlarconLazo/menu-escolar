const EntitySchema = require("typeorm").EntitySchema;

class Order {
  constructor(data) {
    if (!data) {
      return;
    }
    this.date = data.date;
    this.isRectified = data.isRectified;
    this.observations = data.observations;
    this.vegetarian = data.vegetarian;
    this.vegetarianReal = data.vegetarianReal;
    this.celiac = data.celiac;
    this.celiacReal = data.celiacReal;
    this.standard = data.standard;
    this.standardReal = data.standardReal;
    this.caloric = data.caloric;
    this.caloricReal = data.caloricReal;
    this.ethnic = data.ethnic;
    this.ethnicReal = data.ethnicReal;
  }
}

const OrderSchema = new EntitySchema({
  name: "Order",
  target: Order,
  columns: {
    id: { primary: true, type: "int", generated: true, comment: "clave primaria de order" },
    date: { type: "date" },
    isRectified: { type: "boolean", default: false },
    observations: { type: "text", nullable: true },
    vegetarian: { type: "int" },
    vegetarianReal: { type: "int", nullable: true },
    celiac: { type: "int" },
    celiacReal: { type: "int", nullable: true },
    standard: { type: "int" },
    standardReal: { type: "int", nullable: true },
    caloric: { type: "int" },
    caloricReal: { type: "int", nullable: true },
    ethnic: { type: "int" },
    ethnicReal: { type: "int", nullable: true },
    createdAt: { createDate: true },
    updatedAt: { updateDate: true },
  },
  relations: {
    school: {
      target: () => "School",
      type: "many-to-one",
      inverseSide: "orders",
      eager: true,
      joinTable: true,
    },
  },
});

module.exports = {
  Order,
  OrderSchema,
};
