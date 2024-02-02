import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  specs: [{
    type: String,
    required: true,
  }],
  imageUrl: {type: String, required: true},
  carOwner: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true}
});

//turns the schema into a collection
//the name of the collection is this VV
export const CarModel = mongoose.model("cars", CarSchema);
