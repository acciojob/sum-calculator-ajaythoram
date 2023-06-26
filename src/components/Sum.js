import React, { useState } from "react";

const Sum = ()=>{
    let [sum,setSum] = useState(0);
    return(
        <div>
 <input type="number" onChange={(e)=>(setSum(parseInt(sum) + parseInt(e.target.value)))} />
  <p>Sum: {sum}</p>
        </div>
    )
}
export default Sum;