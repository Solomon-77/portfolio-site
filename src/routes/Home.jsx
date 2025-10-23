import Typewriter from 'typewriter-effect';

const Home = () => {
   return (
      <div className='h-full flex flex-col items-center justify-center text-center'>
         <div className="font-bold text-3xl mb-8">
            <Typewriter
               options={{
                  strings: ["Hi, I'm Cyrill Eustaquio"],
                  autoStart: true,
                  loop: true,
                  delay: 120
               }}
            />
         </div>
         <div className='max-w-[700px] font-extralight leading-relaxed'>
            I cherish simplicity in design, and I love building fast and secure applications that offer a great user experience.
         </div>
      </div>
   )
}

export default Home