import { imageOptions } from "./product";

export default {
   name: "companyOverview",
   type: "document",
   title: "Company Overview",
   fields: [
      {
         name: "companyOverviewText",
         title:  "Company Overview Text",
         type: "array",
         of: [ { type:"block" } ]
      },
      {
         name: "companyOverviewImage",
         title: "Company Overview Image",
         type: "object",
         fields: [
            {
               name: "desktop",
               title: "Desktop Image",
               type: "image",
               options: imageOptions
            },
            {
               name: "tablet",
               title: "Tablet Image",
               type: "image",
               options: imageOptions
            },
            {
               name: "mobile",
               title: "Mobile Image",
               type: "image",
               options: imageOptions
            }
         ]
      }
   ]
}