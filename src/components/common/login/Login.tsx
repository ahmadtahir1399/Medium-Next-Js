/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import Icons from "../Icons";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/helper/supabase";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

// Infer the type from the schema
type FormValues = z.infer<typeof schema>;

type IconProps = {
  className?: string;
};

type LoginState = {
  isEmailFormVisible: boolean;
  isEmailSent: boolean;
};

const Login: React.FC = () => {
  const [state, setState] = useState<LoginState>({
    isEmailFormVisible: false,
    isEmailSent: false,
  });
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    setLoading(true);
    console.log(formData);
    setState((prevState) => ({ ...prevState, isEmailSent: true }));

    const { data, error } = await supabase.auth.signInWithOtp({
      email: formData.email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: "http://localhost:3000/",
      },
    });

    if (error) {
      console.error("Error signing in:", error);
      setLoading(false);
    } else {
      console.log("Sign-in email sent:", data);
    }
  };

  const renderAuthButtons = (): JSX.Element => (
    <>
      <Button
        variant="authbutton"
        className="border flex justify-start py-[22px] mb-3"
      >
        <Icons.Google className="w-6 h-6" />
        <span className="second-font text-[16px] text-center ml-10">
          Sign in with Google
        </span>
      </Button>
      <Button
        variant="authbutton"
        className="border flex justify-start py-[22px] mb-3"
      >
        <Icons.Facebook className="w-6 h-6" />
        <span className="second-font text-[16px] text-center ml-8">
          Sign in with Facebook
        </span>
      </Button>
      <Button
        variant="authbutton"
        className="border flex justify-start py-[22px] mb-3"
      >
        <Icons.Apple className="w-6 h-6" />
        <span className="second-font text-[16px] text-center ml-10">
          Sign in with Apple
        </span>
      </Button>
      <Button
        variant="authbutton"
        className="border flex justify-start py-[22px] mb-3"
      >
        <Icons.X className="w-6 h-6" />
        <span className="second-font text-[16px] text-center ml-14">
          Sign in with X
        </span>
      </Button>
      <Button
        variant="authbutton"
        className="border flex justify-start py-[22px] mb-10"
        onClick={() =>
          setState((prevState) => ({ ...prevState, isEmailFormVisible: true }))
        }
      >
        <Icons.Mail className="w-6 h-6" />
        <span className="second-font text-[16px] text-center ml-10">
          Sign in with email
        </span>
      </Button>
    </>
  );

  const renderContent = (): JSX.Element => {
    if (!state.isEmailFormVisible) {
      return (
        <div>
          <div className="text-center text-[28px]">Join Medium.</div>
          <div className="flex justify-center items-center flex-col pt-9">
            {renderAuthButtons()}
            <div className="pb-24">
              <h1 className="second-font">
                Don't have an account?
                <Dialog>
                  <DialogTrigger asChild>
                    <span className="text-primaryextradarkgreen ml-1 cursor-pointer hover:text-primarydarkgreen font-semibold">
                      Sign up
                    </span>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[670px]">
                    <DialogHeader>{/* <SignUp /> */}</DialogHeader>
                  </DialogContent>
                </Dialog>
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="second-font text-xs text-center text-primarylink">
                Click Sign in to agree to Medium's
                <Link href="#" className="underline">
                  Terms of Service
                </Link>
                and acknowledge that <br /> Medium's
                <Link href="#" className="underline">
                  Privacy Policy
                </Link>
                applies to you.
              </h1>
            </div>
          </div>
        </div>
      );
    } else if (!state.isEmailSent) {
      return (
        <div>
          <div className="text-center text-[28px] leading-[32px] pt-[35px] pb-[30px]">
            Sign in with email
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="mb-[25px]">
              <h1 className="font-medium text-base text-primaryblack second-font text-center">
                Enter the email address associated with <br /> your account, and
                we'll send a magic link to <br /> your inbox.
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-[10px]">
                <div className="second-font text-center text-[14px] leading-[32px] pt-[35px] pb-[30px]">
                  <div className="grid w-[270px] max-w-sm items-center gap-1.5">
                    <Label htmlFor="email" className="text-center">
                      Your Email
                    </Label>
                    <Input
                      className="bg-primarygray95"
                      type="email"
                      id="email"
                      {...register("email")}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <Button
                  type="submit"
                  className="bg-primaryblack second-font rounded-full py-2 h-[40px] w-full"
                  variant="mybutton"
                >
                  {loading ? "Sending" : "continue"}
                </Button>
              </div>
            </form>
            <div className="mb-10">
              <span
                className="second-font text-sm text-primarydarkgreen flex cursor-pointer"
                onClick={() =>
                  setState((prevState) => ({
                    ...prevState,
                    isEmailFormVisible: false,
                  }))
                }
              >
                <ChevronUpIcon className="-rotate-90 w-5 h-5 font-thin text-primarygreen" />{" "}
                All Sign in options
              </span>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="second-font text-xs text-center text-primarylink leading-5">
                This site is protected by reCAPTCHA Enterprise and the <br />
                <Link href="#" className="underline">
                  Google Privacy Policy
                </Link>
                and
                <Link href="#" className="underline">
                  Terms of Service
                </Link>
                apply.
              </h1>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="text-center text-[28px] leading-[32px] pt-[35px] pb-[30px]">
            Check your inbox.
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="mb-[25px]">
              <h1 className="font-medium text-base text-primaryblack second-font text-center">
                Click the link we sent to <br /> your {email} to Sign in.
              </h1>
            </div>
            <Link href="/">
              <Button
                className="bg-primaryblack second-font rounded-full py-2 h-[40px] "
                variant="mybutton"
              >
                Ok
              </Button>
            </Link>
          </div>
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default Login;
