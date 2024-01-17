// utils/auth.js

import bcrypt from "bcryptjs";
import Admin from "@/models/Admin";

export const loginAdmin = async (username, password) => {
  try {
    const admin = await Admin.findOne({ username });

    if (!admin) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    return { status: "success" };
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred");
  }
};
