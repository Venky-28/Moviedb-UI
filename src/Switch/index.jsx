import { useState } from "react";

const Switch = ({items, onToggle}) => {

    const [isToggled, setToggle] = useState(false)

    const handleToggle = (toggleState)=>{
        setToggle(toggleState)
    }

    onToggle(isToggled?items[1]:items[0]);

    const activeTextColor = "bg-clip-text text-transparent bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] "

    return <div className="h-8 hover:cursor-pointer ml-6 border-solid border-tmbdarkBlue rounded-[30px] border-[1px] font-semibold flex relative z-[1]">
    <div onClick={()=>{handleToggle(false)}} className={`py-1 px-5 h-8 rounded-[30px] ${isToggled || activeTextColor}`}>{items[0]}</div>
    <div onClick={()=>{handleToggle(true)}} className={`py-1 px-5 h-8 rounded-[30px] ${isToggled && activeTextColor}`}>{items[1]}</div>
        <div className="h-8 w-20 bg-tmbdarkBlue rounded-[30px] absolute z-[-1] transition-all duration-150 ease-in " style={
            isToggled?{
                left:'80px',
                width:'120px'
            }:{
                left:'0',
                width:'80px'
            }
        }></div>
    </div>
}

export default Switch;