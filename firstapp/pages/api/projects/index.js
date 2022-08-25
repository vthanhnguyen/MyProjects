

import {projects} from '../../../customer_data'

export default function handler(req,res){
  res.status(200).json(projects)

}