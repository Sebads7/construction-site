'use client'

// IMPORTS FROM ZOD AND REACT-HOOK-FORM
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// IMPORTS FROM SHADCN COMPONENTS
import { Checkbox } from './ui/checkbox'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import SelectInput from './SelectInput'
import { useState } from 'react'

const apiUrl = import.meta.env.VITE_API_URL

// if (!apiUrl) {
//   console.error("API URL is not defined");
// }

//  COMPONENTS type.
type ContactFormProps = {
  showTextInput?: boolean
  showSelectOption?: boolean
  modalButton?: boolean
  secondButton?: boolean
  checkBox?: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({
  showTextInput = false,
  showSelectOption = false,
  modalButton = false,
  secondButton = false,
  checkBox = false,
}: ContactFormProps) => {
  //states declarations
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)

  const closeModal = () => setIsModalOpen(false)

  const formSchema = z.object({
    fullname: z.string().min(2, {
      message: 'Please enter your full name.',
    }),
    phonenumber: z
      .string()
      .min(10, {
        message: 'Please enter a valid phone number.',
      })
      .max(14, {
        message: 'Please enter a valid phone number.',
      }),
    city: z.string().min(2, {
      message: 'Please enter your city.',
    }),
    emailAddress: z.string().email({
      message: 'Please enter a valid email address.',
    }),
    ...(showSelectOption && {
      selectOption: z.string().min(1, {
        message: 'Please select an option.',
      }),
    }),
    ...(showTextInput && {
      textarea: z.string().min(2, {
        message: 'Please enter your message.',
      }),
    }),

    ...(checkBox && {
      checkbox: z
        .boolean()
        .refine((val) => val === true, 'You must agree to the terms.'),
    }),
  })

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      phonenumber: '',
      city: '',
      emailAddress: '',
      ...(showSelectOption && { selectOption: '' }),
      ...(showTextInput && { textarea: '' }),
      ...(checkBox && { checkbox: false }),
    },
  })

  // Define a submit handler.
  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    // console.log(value);
    // console.log(form.getValues());
    // Send the data.
    setSubmitting(true)

    const isValid = await form.trigger()

    console.log(isValid)

    if (!isValid) {
      console.log(form.formState.errors)
      setSubmitting(false)
      // setSubmitError("Please fill out all required fields.");
      return
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      })
      if (response.ok) {
        console.log('Email sent successfully')
        setShowSuccessModal(true)
        form.reset()
        setSubmitting(false)
      } else {
        throw new Error('Server is not responding')
      }
    } catch (error) {
      setSubmitting(false)
      form.reset()
      // console.log(form.getValues());
      // console.log(error);
      setSubmitError('Error sending email')
    }
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="m-0 grid w-full grid-cols-2 gap-5 px-10 pb-3 tablet:flex-col mobile:flex mobile:px-5">
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
                          'Carpentry',
                          'Painting',
                          'Bathroom Remodeling',
                          'Kitchen Remodeling',
                          ' General Remodeling',
                        ]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button
              type="submit"
              className={` ${
                secondButton
                  ? 'rounded-none bg-red-600 hover:bg-red-800'
                  : modalButton
                    ? ''
                    : 'relative col-span-2 h-[50px]'
              } ${submitting ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={submitting}
            >
              {submitting && (
                <svg
                  className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {submitting
                ? 'Sending...'
                : secondButton
                  ? 'Start Saving Today'
                  : 'Submit'}
            </Button>
          </div>

          {checkBox && (
            <div className="mt-10 flex w-full justify-center px-10">
              <FormField
                control={form.control}
                name="checkbox"
                render={({ field: { onChange, value } }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        className="mr-2 h-[1rem] w-[1rem]"
                        required
                        onCheckedChange={onChange}
                        checked={value as boolean}
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <a
                className="hidden underline tablet:flex mobile:text-xs"
                onClick={openModal}
              >
                Click to check agreement
              </a>
              <label htmlFor="checkbox" className="flex text-xs tablet:hidden">
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
            <div className="fixed inset-0 top-0 z-50 mt-0 flex h-full w-full translate-y-[-2rem] items-center justify-center bg-black bg-opacity-50">
              <div className="mx-4 mt-0 max-w-lg rounded bg-white p-8 shadow-lg">
                <h2 className="mb-4 text-xl font-bold">Agreement</h2>
                <p>
                  I’m interested in learning more about ABJ Remodeling and its
                  services. By checking this box, I consent and authorize ABJ
                  Remodeling to contact me via phone call or text message. ABJ
                  Remodeling may use any of the telephone numbers I have
                  provided for these communications.
                </p>
                <button
                  className="mt-4 rounded bg-blue-950 px-4 py-2 text-white"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Success Modal Component */}
          {showSuccessModal && (
            <div className="fixed inset-0 top-0 z-50 flex h-full w-full -translate-y-3 items-center justify-center bg-black bg-opacity-50">
              <div className="mx-4 mt-0 flex max-w-lg flex-col gap-5 rounded bg-white p-8 py-14 shadow-lg">
                <div className="flex flex-col items-center justify-center gap-3">
                  {' '}
                  <svg
                    width="60px"
                    height="60px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 130.2 130.2"
                  >
                    <circle
                      className="path circle"
                      fill="none"
                      stroke="#73AF55"
                      strokeWidth="6"
                      strokeMiterlimit="10"
                      cx="65.1"
                      cy="65.1"
                      r="62.1"
                    />
                    <polyline
                      className="path check"
                      fill="none"
                      stroke="#73AF55"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      points="100.2,40.2 51.5,88.8 29.8,67.5 "
                    />
                  </svg>
                  <h2 className="mb-4 text-center text-xl font-bold text-[#73AF55]">
                    Thank you!
                  </h2>
                </div>

                <p className="text-center">
                  Your form has been submitted successfully. We will contact you
                  shortly!
                </p>
                <button
                  className="mx-auto mt-4 w-2/4 rounded bg-black px-4 py-2 text-white"
                  onClick={() => setShowSuccessModal(false)}
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
  )
}

export default ContactForm
