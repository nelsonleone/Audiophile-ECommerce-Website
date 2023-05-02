import type { NextApiRequest, NextApiResponse } from 'next'

type countryDataObj = {
  name:{
    common:string,
    official:string,
    nativeName:{
      dan:{
        official:string,
        common:string
      },
      fao:{
        official: string,
        common:string
      }
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    const resData = await fetch("https://restcountries.com/v3.1/all?fields=name")
    const data:countryDataObj[] = await resData.json()
    const sortedData = data.sort((a,b) => a.name.common.localeCompare(b.name.common))
    const filteredData = sortedData.map(value => value.name.common)

    res.status(200).json(filteredData)
  }

  catch(err){
    res.status(500).json({error:"countries data no found"})
  }
}
