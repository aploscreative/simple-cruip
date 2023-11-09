import {useState} from "react";
import {sendEmail} from "@/utils/send-email";

export type AplosContactForm = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const [formSuccess, setFormSuccess] = useState(false)
    const [formSuccessMessage, setFormSuccessMessage] = useState("")

    const handleInput = (e: any) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm =  (e: any) => {
        e.preventDefault()

        // POST the data to the URL of the form
        sendEmail(formData as AplosContactForm).then(response => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            })

            setFormSuccess(true)
            setFormSuccessMessage("We will be in touch soon!")
        })
    }

    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                {
                    formSuccess
                        ? <div>{formSuccessMessage}</div>
                        : <form method="POST" onSubmit={submitForm}>
                            <div className="mb-5">
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
                                    value={formData.name}
                                />
                            </div>
                            <div className="mb-5">
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
                                    value={formData.email}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="phone"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone number"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    value={formData.phone}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="subject"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Enter your subject"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    value={formData.subject}
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
                                    value={formData.message}
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
