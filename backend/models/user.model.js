import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: Number,
  },
  password: {
    type: String,
  },
  college: {
    type: String,
  },
});

// UserSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

export const User = mongoose.model("User", UserSchema);
