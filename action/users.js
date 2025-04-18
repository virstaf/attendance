"use server";

import { createClient } from "@/lib/supabase/server";
import { handleError } from "../lib/utils.ts";

export const loginAction = async (email, password) => {
  try {
    const { auth } = await createClient();
    const { error } = await auth.signInWithPassword({ email, password });
    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

export const logoutAction = async () => {
  try {
    const { auth } = await createClient();
    const { error } = await auth.signOut();
    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

export const signupAction = async (email, password) => {
  try {
    const { auth } = await createClient();
    const { data, error } = await auth.signUp({ email, password });
    if (error) throw error;

    const userId = data.user?.id;
    if (!userId) throw new Error("Error signing up");

    // Add user to database
    const { error: dbError } = await createClient().from("users").insert({
      id: userId,
      email,
    });
    if (dbError) throw dbError;

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};
