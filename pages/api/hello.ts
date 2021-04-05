import { NextApiRequest, NextApiResponse } from 'next'

type Response = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Response>) => {
  res.statusCode = 200
  res.json({ name: `John Doe` })
}
