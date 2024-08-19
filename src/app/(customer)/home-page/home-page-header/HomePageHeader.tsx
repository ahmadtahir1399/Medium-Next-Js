import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SignUp from "@/components/common/SignUp/SignUp";

const HomePageHeader = () => {
  return (
    <div className="border-b-[1px] border-primarygrey mt-[70px]">
      <div className="p-1 pb-28 my-container">
        <div className="flex flex-col justify-center col-span-2">
          <h1 className="2xl:text-[125px] xl:text-[115px] lg:text-[105px] md:text-[95px] text-[80px] tracking-tight leading-[100px] text-primarygrey font-normal mb-8 mt-28">
            Human <br /> <span>stories & ideas</span>
          </h1>
          <p className="text-[24px] tracking-tight text-primarygrey font-normal second-font mb-8">
            A place to read, write, and deepen your understanding
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="py-[22px] px-[20px] font-medium text-[20px] rounded-full second-font transition-all duration-900 ease-in-sout w-[198px]"
                variant="mybutton"
              >
                Start Reading
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[670px] ">
              <DialogHeader>
                <SignUp />
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div className="absolute top-[90px] right-0 lg:block hidden">
            <Image
              height={570}
              width={445}
              src="/assets/images/home-page/Home-page-image-1.webp"
              alt=""
              className="w-[445px] h-[570px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
