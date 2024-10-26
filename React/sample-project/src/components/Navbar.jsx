import React,{ useState } from 'react'

const Navbar = ({param1}) => {
    const [numberstate,setNumberstate]=useState(0)
    const [stringstate,setStringstate]=useState("a")
    const [arraystate,setArraystate]=useState(["a",false,0])

    console.log(numberstate)
    console.log(stringstate)
    console.log(arraystate)
  


    return (
    <>
        {param1.appname}
        <br />
        {param1.age}
    </>
    )
}

export default Navbar