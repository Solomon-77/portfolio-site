import { useRef, useState } from 'preact/hooks';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
   const form = useRef();
   const [loading, setLoading] = useState(false);

   const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs
         .sendForm(serviceID, templateID, form.current, {
            publicKey: publicKey,
         })
         .then(
            () => {
               setLoading(false);
               toast.success('Message sent successfully!');
               form.current.reset();
            },
            (error) => {
               setLoading(false);
               toast.error('Failed to send message. Please try again.');
               console.error(error);
            },
         );
   };

   return (
      <div className="max-w-[600px] mx-auto space-y-9">
         <h1 className="text-2xl font-bold text-center">Contact Me</h1>
         <div className="space-y-9">
            <h1 className="text-center opacity-80 font-extralight">Feel free to reach out for inquiries, collaborations, or professional opportunities.</h1>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
               <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                     <label htmlFor="user_name" className="mb-2">Name</label>
                     <input
                        id="user_name"
                        className="border bg-[#21252c] outline-none w-full rounded-md py-2 px-3 border-[#373b45]"
                        type="text"
                        name="user_name"
                        required
                     />
                  </div>
                  <div className="w-full">
                     <label htmlFor="user_email" className="mb-2">Email</label>
                     <input
                        id="user_email"
                        className="border bg-[#21252c] outline-none w-full rounded-md py-2 px-3 border-[#373b45]"
                        type="email"
                        name="user_email"
                        required
                     />
                  </div>
               </div>
               <div className="w-full">
                  <label htmlFor="message" className="mb-2">Message</label>
                  <textarea
                     id="message"
                     className="border-[#373b45] h-24 bg-[#21252c] w-full rounded-md border outline-none p-4"
                     name="message"
                     required
                  />
               </div>
               <button
                  type="submit"
                  className="flex items-center justify-center border border-[#373b45] bg-[#16181d] py-2 rounded-md hover:bg-[#131519] cursor-pointer"
                  disabled={loading}
               >
                  {loading ? <ClipLoader size={24} color="#ffffff" /> : "Send"}
               </button>
               <ToastContainer />
            </form>
         </div>
      </div>
   );
};

export default Contact;
