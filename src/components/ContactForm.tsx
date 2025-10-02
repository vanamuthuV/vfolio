import { useRef, useState, type FormEvent } from "react";
import Loader from "./Loader";
import { CircleCheck } from "lucide-react";

const ContactForm = () => {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const [status, setStatus] = useState<
    "submit" | "submitting" | "submitted" | "error"
  >("submit");

  const handleSubmit = async (
    ev:
      | FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    ev.preventDefault();

    if (status === "submit") {
      try {
        setStatus("submitting");
        const response = await fetch(
          "https://vanafolioserver.vercel.app/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name.current?.value,
              email: email.current?.value,
              message: message.current?.value,
            }),
          }
        );

        console.log(response);

        const data = await response.json();

        if (data?.variant === "success") {
          setStatus("submitted");
        } else {
          setStatus("error");
        }
      } catch (err) {
        console.error("Error submitting form:", err);
        setStatus("error");
      }
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row w-full gap-10 p-5 items-center justify-center">
      <div className="md:w-2/4 w-full h-64 flex items-center justify-center border-2 border-black md:border-0 p-1 rounded">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1355.5954036695794!2d77.59005737577178!3d12.978708482041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzQ0LjgiTiA3N8KwMzUnMjQuNiJF!5e1!3m2!1sen!2sin!4v1759396620078!5m2!1sen!2sin"
          loading="lazy"
          className="border-0 rounded w-full md:w-3/4 h- h-full"
        ></iframe>
      </div>

      <div className="md:w-2/4 w-full flex items-center justify-center">
        <form
          onSubmit={(ev: FormEvent<HTMLFormElement>) => handleSubmit(ev)}
          className="md:w-3/4 w-full flex flex-col gap-2 items-center justify-center"
        >
          <span className="p-0.5 w-full rounded-sm bg-white">
            <input
              ref={name}
              className="w-full border-2 border-[#584c77] rounded-sm shadow-2xl focus:border-[#584c77] focus:outline-none bg-[#d3d3d3] px-2 py-1"
              type="text"
              placeholder="name"
            />
          </span>

          <span className="p-0.5 w-full rounded-sm bg-white">
            <input
              ref={email}
              className="w-full border-2 border-[#584c77] rounded-sm shadow-2xl focus:border-[#584c77] focus:outline-none bg-[#d3d3d3] px-2 py-1"
              type="text"
              placeholder="email"
            />
          </span>

          <span className="p-0.5 w-full rounded-sm bg-white">
            <textarea
              ref={message}
              placeholder="what's on your mind"
              className="w-full border-2 border-[#584c77] rounded-sm shadow-2xl focus:border-[#584c77] focus:outline-none bg-[#d3d3d3] px-2 py-1"
            />
          </span>
          <span
            className={`p-0.5 w-full rounded-sm ${
              (status === "submit" ||
                status === "submitted" ||
                status === "error") &&
              "bg-white"
            }`}
          >
            {status === "submit" ? (
              <button
                type="submit"
                className="bg-[#d3d3d3] cursor-pointer w-full rounded-sm border-2 border-[#584c77] py-2 text-[#584c77]"
              >
                Submit
              </button>
            ) : status === "submitting" ? (
              <Loader />
            ) : status === "submitted" ? (
              <span className="w-full text-center flex items-center justify-center p-1 bg-green-400 text-[#584c77]">
                <CircleCheck className="h-5 w-5 mr-2 text-green-900" /> All
                good! I’ll reach out soon
              </span>
            ) : (
              <span className="w-full text-center flex items-center justify-center p-1 bg-red-400 text-white">
                Sorry, email service is down
              </span>
            )}
          </span>
        </form>
      </div>
    </div>
  );
};

export { ContactForm };
