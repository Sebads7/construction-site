"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Please enter your first name.",
  }),
  lastname: z.string().min(2, {
    message: "Please enter your last name.",
  }),
  address: z.string().min(2, {
    message: "Please enter your address.",
  }),
  city: z.string().min(2, {
    message: "Please enter your city.",
  }),
  email: z.string().min(2, {
    message: "Please enter your email.",
  }),
  textarea: z.string().min(2, {
    message: "Please enter your message.",
  }),
  bio: z
    .string()
    .min(10, {
      message: "Please enter your bio.",
    })
    .max(100, {
      message: "Bio should be less than 100 characters.",
    }),
});

type ContactFormProps = {
  showTextInput?: boolean;
  secondButton?: boolean;
  contactButton?: boolean;
  modalButton?: boolean;
  checkBox?: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({
  showTextInput = false,
  secondButton = false,
  contactButton = false,
  modalButton = false,
  checkBox = false,
}) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      email: "",
      textarea: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className=" w-full ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
          <div className="grid grid-cols-2 pb-3 gap-5 px-10 m-0 ">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
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
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {showTextInput ? (
              <FormField
                control={form.control}
                name="textarea"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormControl>
                      <Textarea
                        placeholder="Please, enter your message"
                        className="h-[200px]"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="light">Painting</SelectItem>
                    <SelectItem value="dark">Carpentry</SelectItem>
                    <SelectItem value="system">General Remodeling</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}

            {modalButton && <Button type="submit">Submit</Button>}

            {contactButton && (
              <Button type="submit" className="h-[50px] col-span-2">
                Submit
              </Button>
            )}

            {secondButton && (
              <Button
                type="submit"
                className=" bg-red-600 hover:bg-red-800 rounded-none "
              >
                Start Saving Today
              </Button>
            )}
          </div>

          {checkBox && (
            <div className="w-full px-10 mt-10">
              <Checkbox className="mr-2" required id="" />
              <label htmlFor="terms1" className=" text-xs">
                I’m interested in learning more about [] and its affiliates’
                products. By checking this box, I consent and authorize [] and
                its affiliates to call or text me using an automatic telephone
                dialing system or pre-recorded voice message to provide my free
                estimate and keep me informed about products and offers. [] and
                its affiliate (and their service providers acting on their
                behalf) can use any or all of the telephone numbers I have
                provided above to make such communications. I understand that I
                am not required to consent to receive automated phone calls,
                texts, or emails as a condition of buying any property, goods,
                or services.{" "}
              </label>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};
export default ContactForm;
