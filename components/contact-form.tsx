import {FormEvent, useState} from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";


export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
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

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_zqrg55b',
            'template_x16koi5',
            e.currentTarget,
            'BvZsY9yWDlde1yl2w'
        ).then(({status}) => {
            toast.success("Message sent! We will be in touch!", {
                icon: '👏',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            setFormSuccess(true)
            setFormSuccessMessage('Message sent. We will be in touch!')

        }, () => {
            toast.error("Unable to send message. Please try again...", {
                icon: '❌',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
        })
    }

    return (
        <div className="flex items-center justify-center p-12 bg-white rounded">
            <div className="mx-auto w-full max-w-[550px]">
                {
                    formSuccess
                        ? <div className="ease-in-out duration-300">
                            <h4 className="text-lg text-white p-2 bg-green-700 mb-2">{formSuccessMessage}</h4>
                        </div>
                        : <span></span>
                }
                <form onSubmit={onSubmit}>
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
                            onChange={handleInput}
                            value={formData.name}
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
                            onChange={handleInput}
                            value={formData.email}
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
                            onChange={handleInput}
                            value={formData.phone}
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
                            onChange={handleInput}
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
            </div>
        </div>
    )
}
