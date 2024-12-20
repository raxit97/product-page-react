import clsx from "clsx";
import { FOOTER_NAVIGATION_ITEMS } from "../../constants/navigation-items";

export const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="flex justify-between mx-auto max-w-7xl px-6 py-12 gap-x-32">
        <div className="flex flex-col gap-y-16 justify-between w-6/12">
          {/* Company links */}
          <div className="flex gap-x-16">
            {FOOTER_NAVIGATION_ITEMS.navLinks.map((item) => (
              <div className="flex flex-col gap-y-4" key={item.name}>
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <div className="flex flex-col gap-y-2">
                  {item.links.map((link) => (
                    <span
                      key={link.name}
                      className="text-sm cursor-pointer text-gray-400 hover:text-gray-700"
                    >
                      {link.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Copyright, terms of service */}
          <div className="flex flex-col gap-y-4">
            <h3 className="text-sm text-gray-600">
              &copy; 2010-2022 All rights reserved.
            </h3>
            <div className="w-4/5">
              {FOOTER_NAVIGATION_ITEMS.additionalLinks.map((item, index) => (
                <span
                  key={item.name}
                  className="text-sm text-gray-400"
                >
                  {index > 0 && "|"}
                  <span className={clsx("underline", index > 0 ? 'px-2' : 'pr-2')}>{item.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-12 w-5/12">
          <div className="flex justify-between">
            {/* Socials */}
            <div className="flex flex-col gap-y-2">
              <h3 className="font-semibold text-sm">SOCIALS</h3>
              <div className="flex gap-x-2">
                {FOOTER_NAVIGATION_ITEMS.socials.map((item) => (
                  <span key={item.name} title={item.name}>
                    {item.icon}
                  </span>
                ))}
              </div>
            </div>
            {/* OS Platforms */}
            <div className="flex flex-col gap-y-2">
              <h3 className="font-semibold text-sm">PLATFORMS</h3>
              <div className="flex gap-x-2">
                {FOOTER_NAVIGATION_ITEMS.platforms.map((item) => (
                  <span key={item.name} title={item.name}>
                    {item.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex flex-col gap-y-4">
            <h3 className="font-semibold text-sm">SIGN UP</h3>
            <div className="flex gap-x-2">
              <input type="text" placeholder="Your email" className="border w-full p-2" />
              <button className="bg-black text-white p-2">SUBSCRIBE</button>
            </div>
            <p className="text-xs text-gray-400">
              By clicking the SUBSCRIBE button, you are agreeing to our <span className="underline text-blue-700">Privacy & Cookie Policy</span>
            </p>
          </div>
          {/* Payment methods */}
          <div className="flex flex-col gap-y-2">
            <h3 className="font-semibold text-sm">WE ACCEPT</h3>
            <div className="overflow-auto gap-x-1">
              {Array.from({ length: 10 }).map((_, index) => (
                <span key={index} title="Payment method">
                  <img src="/payment-method.png" alt="Visa" className="w-20 h-12 inline-block" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
