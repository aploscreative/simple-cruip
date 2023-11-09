import {AplosContactForm} from "@/components/contact-form";

export function sendEmail(data: AplosContactForm) {
    const apiEndpoint = '/api/email';

    return fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            alert(response.message);
        })
        .catch((err) => {
            alert(err);
        });
}
