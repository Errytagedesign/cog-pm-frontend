import { managers } from "../../../../Data/manage"



export default function handler (req, res){
    res.status(200).json(managers)
}