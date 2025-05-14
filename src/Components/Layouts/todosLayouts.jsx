import { useState, useEffect } from "react"
import { motion } from "motion/react"

const TodosLayouts = () => {
    const [greeting, setGreeting] = useState('')

    useEffect(() => {
        const hour = new Date().getHours();
        if ( hour < 12 ) setGreeting('Good morning!')
        else if ( hour < 18 ) setGreeting('Good Afternoon!')
        else setGreeting('Good Evening!')
    },[])

    return(
        <div className="flex justify-center mx-2">
            <div className="mt-5 border-none rounded-xl shadow-2xl w-full lg:w-[600px]">
                <div className="px-5 py-5">
                    <motion.h1 
                        className="font-bold text-xl"
                        initial={{ y: -200}}
                        animate={{ y: -10}}
                        >Tasks</motion.h1>
                    <motion.p
                        initial={{ opacity: 0}}
                        animate={{ opacity: 2}}
                    >{greeting}</motion.p>
                </div>
            </div>
        </div>
    )
}

export default TodosLayouts