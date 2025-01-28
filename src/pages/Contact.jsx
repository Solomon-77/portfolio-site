

const Contact = () => {
   return (
      <div className="max-w-[600px] mx-auto space-y-9">
         <h1 className="text-2xl font-bold text-center">Contact Me</h1>
         <div className="space-y-9">
            <h1 className="text-center opacity-80 font-extralight">Feel free to reach out for inquiries, collaborations, or professional opportunities.</h1>
            <form className="flex flex-col gap-4">
               <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                     <h1 className="mb-2">Name</h1>
                     <input
                        className="border bg-[#21252c] outline-none w-full rounded-md py-2 px-3 border-[#373b45]"
                        type="text"
                        name=""
                        id=""
                     />
                  </div>
                  <div className="w-full">
                     <h1 className="mb-2">Email</h1>
                     <input
                        className="border bg-[#21252c] outline-none w-full rounded-md py-2 px-3 border-[#373b45]"
                        type="text"
                        name=""
                        id=""
                     />
                  </div>
               </div>
               <div className="w-full">
                  <h1 className="mb-2">Message</h1>
                  <textarea
                     className="border-[#373b45] h-24 bg-[#21252c] w-full rounded-md border outline-none p-4"
                     name=""
                     id="">
                  </textarea>
               </div>
               <button className="border border-[#373b45] bg-[#16181d] py-2 rounded-md hover:bg-[#131519] cursor-pointer">Send</button>
            </form>
         </div>
      </div>
   )
}

export default Contact