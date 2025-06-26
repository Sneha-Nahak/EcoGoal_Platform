import { createContext, useState } from "react";

export const HabitContext = createContext();

export const HabitProvider = ({children}) =>{
    const [habits, setHabits] = useState([]);
    const [logs, setLogs] = useState([]);
    const [Streaks, setStreaks] = useState({});

    const toggleHabit = (id)=>{
        setHabits((prev)=>
        prev.map((habit)=> 
        habit._id == id ? {...habit, isActive: !habit.isActive} : habit
        )
     );
    };

    return (
        <HabitContext.Provider value={{habits,setHabits,toggleHabit,logs,setLogs,Streaks,setStreaks}}>
            {children}
        </HabitContext.Provider>
    )
}