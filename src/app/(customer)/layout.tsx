"use client";
import React, { useEffect, useState } from "react";
import HomePage from "./home-page/HomePage";
import { supabase } from "@/lib/helper/supabase";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      console.log({ session });

      if (error) {
        console.error("Error fetching session:", error);
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(!!session);
      }
    };

    checkSession();
  }, []);

  return (
    <div className="bg-primarybody flex w-full">
      <div className="w-full">
        {isLoggedIn ? "dashboard" : <HomePage />}
        <div>
          <div className="my-containern">{children}</div>
        </div>
      </div>
    </div>
  );
}
