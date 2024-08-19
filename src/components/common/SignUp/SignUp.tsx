import React from "react";
import Icons from "../Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
// import SignIn from "../Common/SignIn";

const SignUp = () => {
  const renderContent = () => {
    return (
      <div>
        {/* Title of the signup page */}
        <div className="text-center text-[28px] leading-[32px] pt-[35px] pb-[39px]">
          Join Medium.
        </div>
        {/* Container for the signup buttons */}
        <div className="flex justify-center items-center flex-col">
          {/* Google signup button */}
          <div className="pt-9">
            <Button
              variant="authbutton"
              className="border transition duration-150 flex justify-start py-[22px] mb-3"
            >
              <Icons.Google className="w-6 h-6 text-start"></Icons.Google>
              <span className="second-font text-[16px] text-center ml-10">
                Sign up with Google
              </span>
            </Button>
          </div>

          {/* Facebook signup button */}
          <div>
            <Button
              variant="authbutton"
              className="border transition duration-150 flex justify-start py-[22px] mb-3"
            >
              <Icons.Facebook className="w-6 h-6 text-start"></Icons.Facebook>
              <span className="second-font text-[16px] text-center ml-8">
                Sign up with Facebook
              </span>
            </Button>
          </div>

          {/* Email signup button */}
          <div>
            <Button
              variant="authbutton"
              className="border transition duration-150 flex justify-start py-[22px] mb-10"
            >
              <Icons.Mail className="w-6 h-6 text-start"></Icons.Mail>
              <span className="second-font text-[16px] text-center ml-10">
                Sign up with email
              </span>
            </Button>
          </div>

          {/* Sign in link for existing users */}
          <div className="pb-36">
            <h1 className="second-font">
              Already have an account?
              <Dialog>
                <DialogTrigger asChild>
                  <span className="text-primaryextradarkgreen ml-1 cursor-pointer hover:text-primarydarkgreen font-semibold">
                    Sign in
                  </span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[670px] ">
                  <DialogHeader>{/* <SignIn /> */}</DialogHeader>
                </DialogContent>
              </Dialog>
            </h1>
          </div>

          {/* Terms of Service and Privacy Policy notice */}
          <div className="flex justify-center items-center">
            <h1 className="second-font text-xs text-center text-primarylink">
              Click “Sign up” to agree to Mediums
              <Link href="#" className="underline mr-1 ml-1">
                Terms of Service
              </Link>
              and acknowledge that <br /> Mediums
              <Link href="#" className="underline mr-1 ml-1">
                Privacy Policy
              </Link>
              applies to you.
            </h1>
          </div>
        </div>
      </div>
    );
  };

  return <div>{renderContent()}</div>;
};

export default SignUp;
