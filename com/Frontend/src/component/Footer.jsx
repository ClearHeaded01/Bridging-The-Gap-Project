import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitch, BsTwitterX } from "react-icons/bs";

const Footers = () => {
  return (
    <Footer
      container
      className="border rounded-none border-t-8 border-purple-950 bg-black"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1 pb-5">
          <div className="mt-5 w-[50%]">
            <Link
              to={"/"}
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold "
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg ">
                Universal Talk AI
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Welcome to our AI-integrated platform, where advanced technology
              revolutionizes communication. We convert American Sign Language
              (ASL) hand gestures to text and vice versa, seamlessly translate
              between languages, and elevate dialogue with immersive
              text-to-speech synthesis. Experience the pinnacle of inclusive
              communication, where innovation meets precision. "Empowering the
              silent with a voice and the speechless with understanding."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="px-10">
              <Footer.Title
                className="text-xl text-white font-bold pb-4"
                title="Follow us"
              />
              <Footer.LinkGroup className="flex flex-col text-white gap-5" col>
                <Footer.Link href="#" target="_blank">
                  Facebook
                </Footer.Link>
                <Footer.Link href="#" target="_blank">
                  Twitter
                </Footer.Link>
                <Footer.Link href="#" target="_blank">
                  GitHub
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="px-10">
              <Footer.Title
                className="text-xl text-white font-bold pb-4"
                title="Legal"
              />
              <Footer.LinkGroup className="flex flex-col text-white gap-5" col>
                <Footer.Link href="#" target="_blank">
                  Privacy
                </Footer.Link>
                <Footer.Link href="#" target="_blank">
                  Terms
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className=" w-full sm:flex sm:items-center sm:justify-between pt-5">
          <Footer.Copyright
            className="text-white"
            href="#"
            by=""
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center text-white">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitch} />
            <Footer.Icon href="#" icon={BsTwitterX} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footers;
