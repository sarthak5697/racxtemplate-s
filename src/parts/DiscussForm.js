/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'elements/Form';
import Button from 'elements/Button';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobile, setMobile] = useState('');
  const [company, setCompany] = useState('');
 
  const handleSubmit = (e) => {
    // e.preventDefault();

    const serviceId = 'service_4nsbxjk';
    const templateId = 'template_9vzwd0l';
    const publicKey = 'HGk1jZ2nsr-3de4iw';

    const templateParams = {
      from_name: name,
      from_email: email,
      from_mobile: mobile,
      from_company: company,
      to_name: 'FataFat tech',
      message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      toast.success('Success! we\'\ll get back to you soon. Thank you!');
      console.log('Email sent sucessfully !', response);
      setName('');
      setEmail('');
      setMobile('');
      setCompany('');
      setMessage('');
    })
    .catch((error) => {
         toast.error(error);

      console.error('Error sending email:', error);
    });
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">
      <Fade bottom>
        <h1 className="text-5xl text-theme-blue text-center font-bold">Lets Discuss</h1>

        <p className="font-light text-lg text-gray-400 text-center mb-12">          
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Please fill out the form below to discuss your project and we'll get back to you in less than 24 hours.
        </p>
        {/* ready to take some help  */}
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={name}
              placeholder="Your name"
              className=""
              onChange={(e) => setName(e.target.value)}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={company}
              placeholder="Your company"
              className=""
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="Your email address"
              className=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form
              id="mobile"
              name="mobile"
              type="number"
              value={mobile}
              placeholder="Your contact number"
              className=""
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={message}
              placeholder="Tell us in brief about your factory operations"
              className=""
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </Fade>

      <ToastContainer />

    </section>
  );
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input 
  //       type="text"
  //       placeholder="Your Name"
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //     />
  //     <input 
  //       type="email"
  //       placeholder="Your Email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     />
  //     <input 
  //       type="mobile"
  //       placeholder="Your Mobile Number"
  //       value={mobile}
  //       onChange={(e) => setMobile(e.target.value)}
  //     />
  //     <input 
  //       type="company"
  //       placeholder="Your Company Name"
  //       value={company}
  //       onChange={(e) => setCompany(e.target.value)}
  //     />
  //     <textarea
  //       cols="30"
  //       rows="10"
  //       value={message}
  //       onChange={(e) => setMessage(e.target.value)}
  //     />
  //     <button type="submit">Send Email</button>
  //     <ToastContainer />

  //   </form>

  // );
};

export default EmailForm;

// export default function DiscussForm(props) {
//   const { data, resetForm } = props;

//   const submitEmail = () => {
//     const {
//       name, company, email, phone, projectIdea,
//     } = data;

//     const templateParams = {
//       from_name: `${name} - ${company} ( ${phone} - ${email} )`,
//       to_name: 'Racxstudio',
//       message: projectIdea,
//     };

//     if (
//       name !== ''
//             && company !== ''
//             && email !== ''
//             && phone !== ''
//             && projectIdea !== ''
//     ) {
//       emailjs.send(
//         'service_4nsbxjk',
//         'template_9vzwd0l',
//         templateParams,
//         'user_csqIxzN5mKsl1yw4ffJzV',
//       )
//         .then(() => {
//           toast.success('Success! we\'\ll get back to you soon. Thank you!');
//           resetForm();
//         }, (error) => {
//           toast.error(error);
//         });
//     } else {
//       toast.error('Please fill out the blank form.');
//     }
//   };

//   return (
//     <section className="flex flex-col container mx-auto mt-10 justify-center">
//       <Fade bottom>
//         <h1 className="text-5xl text-theme-blue text-center font-bold">Lets Discuss</h1>

//         <p className="font-light text-lg text-gray-400 text-center mb-12">          
//           {/* eslint-disable-next-line react/no-unescaped-entities */}
//           Please fill out the form below to discuss your project and we'll get back to you in less than 24 hours.
//         </p>
//         {/* ready to take some help  */}
//         <div className="flex flex-col">
//           <div className="flex flex-col sm:flex-row mx-auto">
//             <Form
//               id="name"
//               name="name"
//               type="text"
//               value={data.name}
//               placeholder="Your name"
//               className=""
//               onChange={props.onChange}
//             />
//             <Form
//               id="company"
//               name="company"
//               type="text"
//               value={data.company}
//               placeholder="Your company"
//               className=""
//               onChange={props.onChange}
//             />
//           </div>

//           <div className="flex flex-col sm:flex-row mx-auto">
//             <Form
//               id="email"
//               name="email"
//               type="email"
//               value={data.email}
//               placeholder="Your email address"
//               className=""
//               onChange={props.onChange}
//             />
//             <Form
//               id="phone"
//               name="phone"
//               type="tel"
//               value={data.phone}
//               placeholder="Your contact number"
//               className=""
//               onChange={props.onChange}
//             />
//           </div>

//           <div className="mx-auto">
//             <Form
//               id="projectIdea"
//               name="projectIdea"
//               type="textarea"
//               value={data.projectIdea}
//               placeholder="Tell us in brief about your factory operations"
//               className=""
//               onChange={props.onChange}
//             />
//           </div>

//           <Button
//             className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
//             type="button"
//             onClick={submitEmail}
//           >
//             Submit
//           </Button>
//         </div>
//       </Fade>

//       <ToastContainer />

//     </section>
//   );
// }
