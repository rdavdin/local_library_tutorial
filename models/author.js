const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

AuthorSchema.virtual("name").get(function () {
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }
  if (!this.first_name || !this.family_name) {
    fullname = "";
  }
  return fullname;
});

AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual("lifespan").get(function () {
  let lifespan = "(";
  lifespan += this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED)
    : "";
  lifespan += " - ";
  lifespan += this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)
    : "";
  lifespan += ")";
  return lifespan;
});
AuthorSchema.virtual("date_birth_formatted").get(function () {
  return DateTime.fromJSDate(this.date_of_birth).toISODate(); //YYYY-MM-DD
});
AuthorSchema.virtual("date_death_formatted").get(function () {
  return DateTime.fromJSDate(this.date_of_death).toISODate(); //YYYY-MM-DD
});

module.exports = mongoose.model("Author", AuthorSchema);
