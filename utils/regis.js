// utils/auth.js

import Admin from "@/models/Admin";

export const registerAdmin = async (username, password) => {
  try {
    const newAdmin = new Admin({
      username,
      password,
    });

    await newAdmin.save();

    return { status: "success" };
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred");
  }
};
