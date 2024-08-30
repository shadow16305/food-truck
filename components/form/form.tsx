"use client";

import { Input } from "./input";
import { BiGroup, BiLocationPlus } from "react-icons/bi";
import { MdOutlineEmail, MdOutlinePersonAdd } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { TbMessageDots } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export const Form = () => {
  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("form submitted", data);
    axios
      .post("/api/contact", data)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Email sent successfully!");
          reset();
        } else {
          toast.error("Failed to send email.");
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("An error occurred while sending the email.");
      });
  };

  return (
    <form className="flex flex-col justify-between py-10 w-11/12 lg:w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-8 w-full">
        <Input
          icon={<BiGroup size={24} className="text-dark-red" />}
          placeholder="Name*"
          type="text"
          {...register("name", { required: true })}
        />
        <Input
          icon={<MdOutlineEmail size={24} className="text-dark-red" />}
          placeholder="Email*"
          type="email"
          {...register("email", { required: true })}
        />
        <Input
          icon={<FiPhone size={24} />}
          placeholder="Phone*"
          type="tel"
          {...register("number", { required: true })}
        />
        <Input
          icon={<BiLocationPlus size={24} className="text-dark-red" />}
          placeholder="Address*"
          type="text"
          {...register("address", { required: true })}
        />
        <Input
          icon={<MdOutlinePersonAdd size={24} className="text-dark-red" />}
          placeholder="Event Size*"
          type="number"
          {...register("size", { required: true })}
        />
        <div className="border-b border-b-neutral-300 w-full flex justify-between">
          <textarea
            id="message"
            placeholder="Write a message*"
            className="max-h-40 min-h-9 w-full focus:border-none focus:outline-none resize-none hover:resize-y"
            {...register("message", { required: true })}
          />
          <TbMessageDots size={24} className="text-dark-red" />
        </div>
      </div>
      <button
        type="submit"
        className="rounded-lg w-full py-2 bg-dark-red text-neutral-300 font-medium flex gap-x-1 items-center justify-center transition-colors hover:bg-red-900">
        Submit <BsArrowRight size={20} className="pt-0.5" />
      </button>
    </form>
  );
};
