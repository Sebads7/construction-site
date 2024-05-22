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
import { toast } from "./ui/use-toast";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Please enter your first name.",
  }),
  lastname: z.string().min(2, {
    message: "Please enter your last name.",
  }),
  city: z.string().min(2, {
    message: "Please enter your city.",
  }),
  emailAddress: z.string().email({
    message: "Please enter a valid email address.",
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
  selectOption: z.string().min(2, {
    message: "Please select an option.",
  }),
});

//  COMPONENTS type.
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
      city: "",
      emailAddress: "",
      textarea: "",
      selectOption: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
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
              name="emailAddress"
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
              <FormField
                control={form.control}
                name="selectOption"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <SelectInput {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {modalButton && (
              <Button
                type="submit"
                onClick={() => {
                  onSubmit(form.getValues());
                }}
              >
                Submit
              </Button>
            )}

            {contactButton && (
              <Button
                type="submit"
                className="h-[50px] col-span-2"
                onClick={() => {
                  onSubmit(form.getValues());
                }}
              >
                Submit
              </Button>
            )}

            {secondButton && (
              <Button
                type="submit"
                className=" bg-red-600 hover:bg-red-800 rounded-none"
                onClick={() => {
                  onSubmit(form.getValues());
                }}
              >
                Start Saving Today
              </Button>
            )}
          </div>

          {checkBox && (
            <div className="w-full px-10 mt-10 ">
              <Checkbox
                className="mr-2 w-[1rem] h-[1rem]"
                required
                id="checkbox"
              />
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
