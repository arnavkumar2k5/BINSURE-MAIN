import React, { useState } from "react";
import axios from "axios";

const Test = () => {
    // State to handle form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    // State for response message
    const [responseMessage, setResponseMessage] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form refresh

        try {
            const response = await axios.post("http://127.0.0.1:5000/api/submit", formData);
            setResponseMessage(response.data.message); // Update response message
        } catch (error) {
            console.error("Error submitting form:", error);
            setResponseMessage("Failed to submit form.");
        }
    };

    return (
        <div className="w-full flex flex-col justify-center px-10 bg-black text-white gap-10">
            <h1>Submit Form to Flask</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col justify-start items-start">
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default Test;
