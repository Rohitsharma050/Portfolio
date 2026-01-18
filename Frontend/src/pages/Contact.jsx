import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="px-3 reveal">
      <div className="bg-[#f7f7f2] min-h-screen w-full rounded-t-[4rem] px-4 sm:px-6">

        <div className="flex flex-col items-center pt-16 sm:pt-20 text-center">

          {/* HEADINGS */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#676664]">
            LET&apos;S CONNECT
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#676664]">
            AND
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#676664]">
            MAKE IT MEMORABLE
          </h1>

          {/* FORM */}
          <form
            className="flex flex-col border border-[#483522] rounded-2xl gap-5
            w-full max-w-[550px] h-auto lg:h-[550px]
            px-6 sm:px-8 lg:px-10 py-8 sm:py-10 my-12 sm:my-20"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#676664]">
              Welcome!
            </h1>

            <input
              className="border border-[#483522] rounded-xl px-3 py-3"
              type="text"
              placeholder="Name"
            />

            <input
              className="border border-[#483522] rounded-xl px-3 py-3"
              type="email"
              placeholder="Email"
            />

            <textarea
              className="border border-[#483522] rounded-xl px-3 py-3 h-32 sm:h-36 lg:h-40 resize-none"
              placeholder="Just write..."
            />

            <button
              className="border border-[#483522] rounded-xl px-3 py-3
              text-white bg-[#483522] hover:bg-[#6e583f] transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
