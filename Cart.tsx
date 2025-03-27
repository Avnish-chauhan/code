import React from 'react'
// import Hr from './Hr'
import { motion } from "framer-motion";
// import Hr from './Hr';

const Cart = () => {

 
  return (
    <>
   <div className="flex flex-wrap w-full justify-center  p-20  overflow-hidden overflow-x-hidden">

  <div className="absolute mt-4 left-0 w-full h-[2px] bg-gray-800"></div>

  <div className="flex flex-wrap w-full gap-6 justify-center px-4 ">

    <motion.p
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0 }}
      className="text-gray-800 font-bold text-sm w-full sm:w-auto space-y-2"
    >
      <span className="relative w-6 h-6 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
        <span className="w-2 h-2 bg-black rounded-full"></span>
      </span>
      Over 13,336+ successful worldwide projects.
      <p className="block mt-1 font-normal">
      A lightweight, knitted pullover<br></br> shirt with a round neckline.
      A lightweight, <br></br>knitted pullover shirt with a round neckline.
        

      </p>
    </motion.p>

    <motion.p
      initial={{ x: 75, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-gray-800 font-bold text-sm w-full sm:w-auto space-y-2"
    >
      <span className="relative w-6 h-6 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
        <span className="w-2 h-2 bg-black rounded-full"></span>
      </span>
      Over 13,336+ successful worldwide projects.
      <span className="block mt-1 font-normal">
      A lightweight, knitted pullover<br></br> shirt with a round neckline.
      A lightweight, <br></br>knitted pullover shirt with a round neckline.
      </span>
    </motion.p>

    <motion.p
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-gray-800 font-bold text-sm w-full sm:w-auto space-y-2"
    >
      <span className="relative w-6 h-6 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
        <span className="w-2 h-2 bg-black rounded-full"></span>
      </span>
      Over 13,336+ successful worldwide projects.
      <span className="block mt-1 font-normal">
      A lightweight, knitted pullover<br></br> shirt with a round neckline.
      A lightweight, <br></br>knitted pullover shirt with a round neckline.
      </span>
    </motion.p>

    <motion.p
      initial={{ x: 25, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="text-gray-800 font-bold text-sm w-full sm:w-auto space-y-2"
    >
      <span className="relative w-6 h-6 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
        <span className="w-2 h-2 bg-black rounded-full"></span>
      </span>
      Over 13,336+ successful worldwide projects.
      <span className="block mt-1 font-normal">
        A lightweight, knitted pullover<br></br> shirt with a round neckline.
        A lightweight, <br></br>knitted pullover shirt with a round neckline.

      </span>
    </motion.p>
  </div>
</div>

    </>

  )
}


export default Cart