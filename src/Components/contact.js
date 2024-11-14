import React, { useState } from "react";
import "../Style/contact.css"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/6e969c80-2d4d-11ee-9314-312e17da8d1e"; // TODO - fill on the later step

const ContactForm = () => {


    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <div id="contactArea">
                <div id="contactText">
                    <h1>DROP US A LINE</h1>
                </div>

                <div id="contactForm">
                    <p>Thank you!</p>
                </div>

                <div id="contactText" className="pageEnd">
                    <h2>BETTER YET, SEE US IN PERSON!</h2>
                    <p><span className="smallerText">(Please call before coming to confirm we're there)</span></p>
                    <br />
                    <p>Buffalo Fabrication Ltd,</p>
                    <p>Unit 7 Churchill Yard,</p>
                    <p>Waterlooville,</p>
                    <p>PO7 7RF</p>
                    <br />
                    <p><b>01794 328611</b></p>
                </div>

            </div>
        );
    }

    return (
        <div id="contactArea">
            <div id="contactText">
                <h1>DROP US A LINE</h1>
            </div>

            <div id="contactForm">
                <form
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="inputField"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="inputField"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Message"
                            name="message"
                            id="messageArea"
                            className="inputField"
                            required
                        />
                    </div>
                    <div>
                        <button id="contactButton" type="submit">
                            SEND A MESSAGE
                        </button>
                    </div>
                </form>
            </div>

            <div id="contactText" className="pageEnd">
                <h2>BETTER YET, SEE US IN PERSON!</h2>
                <p><span className="smallerText">(Please call before coming to confirm we're there)</span></p>
                <br />
                <p>Buffalo Fabrication Ltd,</p>
                <p>Unit 7 Churchill Yard,</p>
                <p>Waterlooville,</p>
                <p>PO7 7RF</p>
                <br />
                <p><b>01794 328611</b></p>
            </div>

        </div>
    );
};

export default ContactForm;
