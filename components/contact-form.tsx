import { FormEvent } from "react";
import {sendEmail} from "@/utils/send-email";

export type AplosContactForm = {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export function ContactForm() {
    let successMessage = '';
    let errorMessage = '';

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        successMessage = '';
        errorMessage = '';

        const formData = new FormData(e.currentTarget);
        let payload: any = {};
        formData.forEach(function (value: any, key: string) {
            payload[key] = value;
        });

        try {
            e.currentTarget.reset();
            await sendEmail(payload as AplosContactForm)
            successMessage = 'You will hear from us soon!';
        } catch(e) {
            errorMessage = 'Unable to submit form. Whoops. You can always reach us at contact@aploscreative.com';
        }
    }

    return (
        <div className="flex items-center justify-center p-12 bg-white rounded">
            <div className="mx-auto w-full max-w-[550px]">
                {
                    successMessage
                        ? <div>{successMessage}</div>
                        : <form onSubmit={onSubmit}>
                            <div className="mb-2">
                                <label
                                    htmlFor="name"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="email"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@domain.com"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="phone"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone number"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="message"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                }
            </div>
        </div>
    )
}
