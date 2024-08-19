"use client";
import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Logo from "@/components/common/logos/Logo";
import Login from "../login/Login";
import SignUp from "../SignUp/SignUp";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 390);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const links = [
    { name: "Our story", link: "/" },
    { name: "Membership", link: "/" },
  ];

  return (
    <div className="relative">
      <div
        className={cn(
          "bg-primarybody border-b-[1px] border-primarygrey duration-900 ease-in-out fixed top-0 z-50 transition-all backdrop-filter w-full",
          scrolled ? "bg-primarywhite" : "bg-primarybody"
        )}
      >
        <div className="flex justify-between items-center text-center pt-5 my-container pb-4">
          <Logo className="w-[160px] h-[35px]" props={undefined} />
          <div className="flex items-center gap-6">
            <ul className="flex gap-5">
              {links.map(({ link, name }, index) => (
                <li key={index} className="lg:flex hidden">
                  <Link
                    href={link}
                    className="second-font cursor-pointer text-sm font-medium text-primarynav"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <Dialog>
                <DialogTrigger>
                  <li className="second-font cursor-pointer text-sm font-medium text-primarynav">
                    Write
                  </li>
                </DialogTrigger>
                <DialogContent>
                  <SignUp />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <li className="second-font cursor-pointer text-sm font-medium text-primarynav">
                    Sign in
                  </li>
                </DialogTrigger>
                <DialogContent>
                  <Login />
                </DialogContent>
              </Dialog>
            </ul>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className={cn(
                    "rounded-full second-font transition-all duration-900 ease-in-out",
                    scrolled ? "bg-primarygreen hover:bg-primarydarkgreen" : ""
                  )}
                  variant="mybutton"
                >
                  Get started
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[670px]">
                <DialogHeader>
                  <SignUp />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
