import React, { useState } from "react";
import "./Form.css";
import upload_area from "../../assets/upload_area.png";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [resume, setResume] = useState(null);
  const [resumePreview, setResumePreview] = useState(null);

  const onSubmithandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("resume", resume);

    setDateOfBirth("");
    setFullName("");
    setEmail("");
    setPhone("");
    setResumePreview(null);
    setResume(null);

    alert("Form submitted successfully!");
    console.log(Object.fromEntries(formData.entries()));
    console.log(resumePreview);
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setResume(file);
      const url = URL.createObjectURL(file);
      setResumePreview(url);
    } else {
      alert("please upload a valid PDF file");
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmithandler} className="form">
        <div className="fullname">
          <label>Name:</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter Your Name"
            type="text"
            pattern="[A-Za-z\s]{2,}"
            title="Only letters, minimum 2 characters"
            required
          />
        </div>

        <div className="email">
          <label>Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            type="email"
            required
          />
        </div>

        <div className="numberDOB">
          <div className="number">
            <label>Number:</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Your Number"
              type="tel"
              pattern="[0-9]{10}"
              title="Enter a 10-digit phone number"
              required
            />
          </div>

          <div className="dob">
            <label>Date of Birth:</label>
            <input
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              min="1900-01-01"
              max="2025-12-31"
              type="date"
              required
            />
          </div>
        </div>

        <div className="resume">
          <p>Upload Resume</p>

          <label
 
          htmlFor="customFile">
            {resume ? (
              <div  className="file-name">
                <p>
                  Uploaded
                </p>
                <span className="material-symbols-outlined">task_alt</span>
              </div>
            ) : (
              <img src={upload_area} alt="resume-pdf" className="preview-img" />
            )}

            <input
              id="customFile"
              type="file"
              accept="application/pdf"
              onChange={handleResumeChange}
              hidden
              required
            />
          </label>
        </div>

        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
