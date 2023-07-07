"use client";
import { useState, useRef, useEffect } from "react";
import { formTypes } from "@/type";

const Contact = () => {
  const [info, setInfo] = useState<formTypes>({ name: "", message: "" });
  const inputRef = useRef<HTMLInputElement>(null);

  const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInfo({ name: "", message: "" });
    console.log(info);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, name: event.target.value });
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, message: event.target.value });
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex h-full w-full  justify-center items-center">
      <form className="flex flex-col gap-y-4">
        <input
          onChange={handleNameChange}
          value={info.name}
          type="text"
          ref={inputRef}
          placeholder="Name"
          className="border p-2 text-black "
        />
        <input
          onChange={handleTextChange}
          value={info.message}
          className="border p-2 h-16 text-black "
          type="textarea"
          placeholder="Your Message"
        />
        <button
          className="h-10 flex p-2 justify-center items-center bg-blue-600 text-white"
          onClick={submitForm}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

// This is the example of how to use typescript in form element in react we can see that we have used the event type in the onChange event
// and also in the onClick event we have used the event type.
// When we are the hover over the event type we can see that it is the type of the event that is being used in the event handler.
// We can see that we have used the event type in the onChange event handler and also in the onClick event handler.
