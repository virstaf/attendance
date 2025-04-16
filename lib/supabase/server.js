"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  const client = createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
            console.log("cookies successful");
          } catch (err) {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
            console.error("cookies err:::", err);
          }
        },
      },
    }
  );
  return client;
}

export async function getUser() {
  // const { auth } = await createClient();
  // const userObject = await auth.getUser();

  // if (userObject.error) {
  //   console.error(userObject.error);
  //   return null;
  // }
  // return userObject.data.user;
  return {
    user_metadata: {
      email: "uniik@gmail.com",
      id: 1,
      role: "admin",
      username: "uniik",
    },
  };
}
