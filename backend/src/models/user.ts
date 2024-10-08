import mongoose from "mongoose";
import validator from "validator";

interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  dob: Date;
  photo: string;
  role: "user" | "admin";
  gender: "male" | "female" | "other";
  createdAt: Date;
  updatedAt: Date;
  age: number;
}

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "Please enter you id"],
    },
    name: {
      type: String,
      required: [true, "Please enter you name"],
    },
    email: {
      type: String,
      required: [true, "Please enter you email"],
      unique: [true, "Email already exists"],
      validate: validator.default.isEmail,
    },
    dob: {
      type: Date,
      required: [true, "Please enter you date of birth"],
    },
    photo: {
      type: String,
      required: [true, "Please add photo"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: [true, "Please enter you gender"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("age").get(function () {
  const today = new Date();
  const dob = this.dob;

  let age = today.getFullYear() - dob.getFullYear();

  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }
  return age;
});

export const User = mongoose.model("User", userSchema);
