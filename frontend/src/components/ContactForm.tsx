"use client";

// IMPORTS FROM ZOD AND REACT-HOOK-FORM
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// IMPORTS FROM SHADCN COMPONENTS
import { Checkbox } from "./ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SelectInput from "./SelectInput";
import { useState } from "react";

//  COMPONENTS type.
type ContactFormProps = {
  showTextInput?: boolean;
  showSelectOption?: boolean;
  secondButton?: boolean;
  contactButton?: boolean;
  modalButton?: boolean;
  checkBox?: boolean;
};

const apiBaseUrl = process.env.REACT_APP_API_URL || "http://localhost:8000";

const ContactForm: React.FC<ContactFormProps> = ({
  showTextInput = false,
  showSelectOption = false,
  secondButton = false,
  contactButton = false,
  modalButton = false,
  checkBox = false,
}) => {
  //states declarations
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const formSchema = z.object({
    fullname: z.string().min(2, {
      message: "Please enter your full name.",
    }),
    phonenumber: z
      .string()
      .min(10, {
        message: "Please enter a valid phone number.",
      })
      .max(14, {
        message: "Please enter a valid phone number.",
      }),
    city: z.string().min(2, {
      message: "Please enter your city.",
    }),
    emailAddress: z.string().email({
      message: "Please enter a valid email address.",
    }),
    ...(showSelectOption && {
      selectOption: z.string().min(1, {
        message: "Please select an option.",
      }),
    }),
    ...(showTextInput && {
      textarea: z.string().min(2, {
        message: "Please enter your message.",
      }),
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phonenumber: "",
      city: "",
      emailAddress: "",
      ...(showSelectOption && { selectOption: "" }),
      ...(showTextInput && { textarea: "" }),
    },
  });

  // Define a submit handler.
  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    // console.log(value);
    console.log(form.getValues());
    // Send the data.
    setSubmitting(true);

    const isValid = await form.trigger();

    console.log(isValid);

    if (!isValid) {
      // console.log(form.formState.errors);
      setSubmitting(false);
      // setSubmitError("Please fill out all required fields.");
      return;
    }

    try {
      const response = await fetch(`${apiBaseUrl}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      if (response.ok) {
        console.log("Email sent successfully");
        form.reset();
        setSubmitting(false);
      } else {
        throw new Error("Server is not responding");
      }
    } catch (error) {
      setSubmitting(false);
      form.reset();
      // console.log(form.getValues());
      // console.log(error);
      setSubmitError("Error sending email");
    }
  };

  return (
    <div className=" w-full ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8   ">
          <div className="grid grid-cols-2 mobile:flex mobile:flex-col pb-3 gap-5 px-10 m-0 w-full   ">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Full Name"
                      {...field}
                      className="mobile:text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Phone Number"
                      className="mobile:text-xs"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="mobile:text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="City"
                      {...field}
                      className="mobile:text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {showTextInput && (
              <FormField
                control={form.control}
                name="textarea"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormControl>
                      <Textarea
                        placeholder="Please, enter your message"
                        className="h-[200px] mobile:text-xs"
                        {...field}
                        value={field.value as string} // explicitly set the type of the value property to string
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {showSelectOption && (
              <FormField
                control={form.control}
                name="selectOption"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <SelectInput
                        value={field.value as string}
                        onChange={field.onChange}
                        options={[
                          "Carpentry",
                          "Painting",
                          "Bathroom Remodeling",
                          "Kitchen Remodeling",
                          " General Remodeling",
                        ]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {modalButton && (
              <Button
                type="submit"
                disabled={submitting}
                onClick={() => {
                  onSubmit(form.getValues());
                }}
              >
                {submitting ? "Form Submited" : "Submit"}
              </Button>
            )}

            {contactButton && (
              <Button
                type="submit"
                className="h-[50px] col-span-2 "
                disabled={submitting}
                onClick={() => {
                  onSubmit(form.getValues());
                }}
              >
                {submitting ? "Form Submited" : "Submit"}
              </Button>
            )}

            {secondButton && (
              <Button
                type="submit"
                className=" bg-red-600 hover:bg-red-800 rounded-none"
                disabled={submitting}
                onClick={() => {
                  onSubmit(form.getValues());
                }}
              >
                {submitting ? "Form Submited" : "  Start Saving Today"}
              </Button>
            )}
          </div>

          {checkBox && (
            <div className="flex justify-center  w-full px-10 mt-10 ">
              <Checkbox
                className=" mr-2 w-[1rem] h-[1rem]"
                required
                id="checkbox"
              />
              <a
                className=" hidden mobile:flex mobile:text-xs underline "
                onClick={openModal}
              >
                Click to check agreement
              </a>
              <label htmlFor="terms1" className=" text-xs mobile:hidden flex ">
                I’m interested in learning more about ABJ Remodeling and its
                services. By checking this box, I consent and authorize ABJ
                Remodeling to contact me via phone call or text message. ABJ
                Remodeling may use any of the telephone numbers I have provided
                for these communications.
              </label>
            </div>
          )}

          {/* Modal Component */}
          {isModalOpen && (
            <div className="fixed w-full translate-y-[-2rem] h-full top-0 inset-0 mt-0  bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-8 rounded shadow-lg max-w-lg mx-4 mt-0">
                <h2 className="text-xl font-bold mb-4">Agreement</h2>
                <p>
                  I’m interested in learning more about ABJ Remodeling and its
                  services. By checking this box, I consent and authorize ABJ
                  Remodeling to contact me via phone call or text message. ABJ
                  Remodeling may use any of the telephone numbers I have
                  provided for these communications.
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-950 text-white rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {submitError && <div className="text-red-500">{submitError}</div>}
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
