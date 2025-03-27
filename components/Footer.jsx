import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-popover">
      <div className="container mx-auto px-4 flex items-center justify-between text-muted-foreground">
        <div className="flex items-center space-x-2 ">
          <Link href="/">Attendance</Link>
          <p className="">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
        <Link href="https://uniiktheo.tech">Powered by UniikTheo</Link>
      </div>
    </footer>
  );
};

export default Footer;
