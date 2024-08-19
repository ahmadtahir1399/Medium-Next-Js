import React from "react";
import Navbar from "@/components/common/navbar/Navbar";
import HomePageHeader from "@/app/(customer)/home-page/home-page-header/HomePageHeader";
import HomePageHeader01 from "@/app/(customer)/home-page/home-page-header/HomePageHeader01";
import HomePageHeader02 from "@/app/(customer)/home-page/home-page-header/HomePageHeader02";
import HomePageHeader03 from "@/app/(customer)/home-page/home-page-header/HomePageHeader03";
import HomePageHeader04 from "@/app/(customer)/home-page/home-page-header/HomePageHeader04";
import Footer from "@/components/common/footer/Footer";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <HomePageHeader />
      </div>
      <div className="2xl:block xl:block lg:block md:hidden hidden">
        <HomePageHeader01 />
        <HomePageHeader02 />
        <HomePageHeader03 />
        <HomePageHeader04 />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
