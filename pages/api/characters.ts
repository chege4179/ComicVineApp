import {NextApiRequest, NextApiResponse} from "next";
import qs from "qs";
import {API_KEY, BASE_URL} from "../../util/config";
import axios from "axios";
import {GetCharactersResponse} from "../../types/GetCharactersResponseTypes";
import {ErrorResponse} from "../../types/ErrorResponse";


interface RequestBody extends NextApiRequest {
     query: {
          offset: number,
          limit: number
     }
}


async function characters(req: RequestBody, res: NextApiResponse<GetCharactersResponse | ErrorResponse>) {
     switch (req.method) {
          case "GET":
               console.log({
                    limit: req.query.limit,
                    offset: req.query.offset,
               })
               const queryparams = qs.stringify({
                    format: "json",
                    api_key: API_KEY,
                    limit: req.query.limit,
                    offset: req.query.offset,
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
