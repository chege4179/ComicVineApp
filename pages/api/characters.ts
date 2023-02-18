import {NextApiRequest, NextApiResponse} from "next";
import qs from "qs";
import {API_KEY, BASE_URL} from "../../util/config";
import axios from "axios";
import {GetCharactersResponse} from "../../types/GetCharactersResponseTypes";
import {ErrorResponse} from "../../types/ErrorResponse";


function getOffset(offset:number,limit:number){
     if (offset === 1) {
          return 0
     }else {
          return (offset - 1) * limit
     }
}

async function characters(req: NextApiRequest, res: NextApiResponse<GetCharactersResponse | ErrorResponse>) {
     switch (req.method) {
          case "GET":
               console.log({
                    limit: req.query.limit,
                    page :req.query.offset,
                    offset: getOffset(Number(req.query.offset),Number(req.query.limit)),
               })
               const queryparams = qs.stringify({
                    format: "json",
                    api_key: API_KEY,
                    limit: req.query.limit ,
                    offset: getOffset(Number(req.query.offset),Number(req.query.limit)),
               })
               try {
                    const response = await axios.get<GetCharactersResponse>(`${BASE_URL}/api/characters?${queryparams}`)

                    return res.json(response.data)
               } catch (err) {
                    return res.json({
                         msg: "An unexpected error occurred",
                         success: false,
                    })

               }

     }
}


export default characters
