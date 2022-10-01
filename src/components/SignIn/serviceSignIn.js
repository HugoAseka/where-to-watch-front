import axios from "axios";

export async function signInRequest(body){
    
    const requisition = await axios.post("/signin", body);
    console.log(requisition);
}