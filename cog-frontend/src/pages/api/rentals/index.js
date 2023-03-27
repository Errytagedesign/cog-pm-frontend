import { rentals } from "../../../../Data/rentals"



export default function handler (req, res){
    res.status(200).json(rentals)
}