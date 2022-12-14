
import {projects} from '../../../customer_data'

export default function handler({query:{id}},res){
  
    const filtered = projects.filter(project => project.id === id)

    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    }
    else{
        res.status(404).json({message:`Project with ID ${id} is not found`})
    }
}