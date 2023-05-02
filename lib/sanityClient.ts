import { createClient } from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'

const clientConfig = {
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   dataset: "production",
   apiVersion: "2023-04-20",
   useCdn: true
}

export const sanityClient = createClient(clientConfig)
const imageBuilder = imageUrlBuilder(sanityClient)

export const urlFor = (source:string) => {
   return imageBuilder.image(source)
}