import { Rule as RuleType } from '@sanity/types';

const altTextField = {
   name: "alt",
   title: "Alt Text",
   type: "string",
   description: "A description of the image for accessibility purposes.",
   validation: (Rule:RuleType) => [
      Rule.required().error("Please provide a short description of the product image"),
      Rule.custom((value: string) => {
         const lengthOfWords = value.trim().split(/\s+/).length;
         if(lengthOfWords > 10){
            return "Too long for an alt text"
         }
         return true;
      })
   ]
}

export const imageOptions = {
   hotspot: true
}



// Product Schema
export default {
   name: "product",
   title: "Product",
   type: "document",
   fields: [
      {
         name: "productName",
         title: "Product Name",
         type: "string",
         validation: (Rule:RuleType) => Rule.required().error("Enter Product's Name")
      },
      {
         name: "price",
         title: "Price",
         type: "number",
         validation: (Rule:RuleType) => Rule.required()
         .custom((price:number) => {
            if(isNaN(price)){
               return "Price Must Be A Valid Number"
            }
            return true
         })
      },

      {
         name: "isNew",
         title: "Is A New Product",
         type: "boolean",
         description: "Set to true if this is a new product"
      },

      {
         name: "slug",
         title: "Slug",
         type: "slug",
         options: {
            source: "productName",
            slugify: (input:string) => input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 100),
            validation: (Rule:RuleType) => Rule.required().error("Generate A Slug For The Product")
         }
      },

      {
         name: "overviewText",
         title: "Overview Text",
         type: "text",
         validation: (Rule:RuleType) => Rule.required().min(50).error("Enter Product Overview")  
      },

      {
         name: "category",
         title: "Category",
         type: "string",
         options: {
           list: [
             { title: 'Earphones', value: 'earphones' },
             { title: 'Headphones', value: 'headphones' },
             { title: 'Speakers', value: 'Speakers' },
           ],
           layout: 'radio',
         },
         validation: (Rule:RuleType) => Rule.required().error("Please Input A Product Category")  
      },

      {
         name: "features",
         title: "Features",
         type: "array",
         of: [ {type: "block"} ],
         validation: (Rule:RuleType) => Rule.required().error("Describe Products Features")  
      },

      {
         name:"boxContents",
         title: "Product Box Consist Of ...",
         type: "array",
         of: [ 
            {
               type: "object",
               fields: [
                  {
                     name: "item",
                     title: "Item",
                     type:  "string"
                  },
                  {
                     name: "quantity",
                     title: "Quantity",
                     type: "number"
                  }
               ]
            }
         ]
      },

      {
         name: "productImage",
         title: "Product Image",
         type: "object",
         fields: [
            {
               name: "desktop",
               type: "image",
               title: "Desktop Image",
               fields: [altTextField],
               options: imageOptions
            },
            {
               name: "tablet",
               type: "image",
               title: "Tablet Image",
               fields: [altTextField],
               options: imageOptions
            },
            {
               name: "mobile",
               type: "image",
               title: "Mobile Image",
               fields: [ altTextField ],
               options: imageOptions
            }
         ]
      },
      
      {
         name:  "galleryImages",
         title: "Gallery Images",
         type: "object",
         fields: [
            {
               name: "desktop",
               title: "Desktop Gallery Images",
               type: "array",
               of: [ 
                  { 
                     type: "image" ,
                     options: imageOptions,
                     fields: [ altTextField ]
                  } 
               ]
            },
            {
               name: "tablet",
               title: "Tablet Gallery Images",
               type: "array",
               of: [ 
                  { 
                     type: "image" ,
                     options: imageOptions,
                     fields: [ altTextField ]
                  } 
               ]
            },
            {
               name: "mobile",
               title: "Mobile Gallery Images",
               type: "array",
               of: [ 
                  { 
                     type: "image" ,
                     options: imageOptions,
                     fields: [ altTextField ]
                  } 
               ]
            }
         ]
      },

      {
         name: "previewPageImage",
         title: "Image Category Page Preview",
         type: "object",
         fields: [ 
            {
               name: "desktop",
               title: "Desktop",
               type: "image",
               fields: [ altTextField ],
               options: imageOptions
            },
            {
               name: "tablet",
               title: "Tablet",
               type: "image",
               fields: [ altTextField ],
               options: imageOptions
            },
            {
               name: "mobile",
               title: "Mobile",
               type: "image",
               fields: [ altTextField ],
               options: imageOptions
            }
         ],
      },

      {
         name: "productInCartImage",
         title: "Product In-Cart Image",
         type: "image",
         options: imageOptions
      },

      {
         name: "productSuggestionImage",
         title: "Product Suggestion Image Highlight",
         type: "object",
         fields: [
            {
               name: "desktop",
               title: "Desktop",
               type: "image",
               fields: [ altTextField ],
               options: imageOptions
            },
            {
               name: "tablet",
               title: "Tablet",
               type: "image",
               fields: [ altTextField ],
               options: imageOptions
            },
            {
               name: "mobile",
               title: "Mobile",
               type: "image",
               fields: [ altTextField ],
               options: imageOptions
            }
         ],
      }
   ]
}