export default {
   name: "banner",
   title: "Banner",
   type: "document",
   fields: [
      {
         name: "name",
         title: "name",
         type: "string"
      },
      {
         name: "featuredProduct",
         title: "Featured Product",
         type: "reference",
         to: [{ type: "product" }],
      },
      {
         name: "overviewText",
         title: "Overview Text",
         type: "text"
      },
      {
         name: "bannerImage",
         title: "Banner Image",
         type: "object",
         fields: [
            {
               name: "desktop",
               title: "Desktop Banner Image",
               type: "image",
               options: {
                  hotspot: true
               }
            },
            {
               name: "tablet",
               title: "Tablet Banner Image",
               type: "image",
               options: {
                  hotspot: true
               }
            },
            {
               name: "mobile",
               title: "Mobile Banner Image",
               type: "image",
               options: {
                  hotspot: true
               }
            }
         ]
      }
   ],
   preview: {
      select: {
         product: "product.name",
         productImage: "product.image.asset.url",
      },
      prepare({ product, productImage } : {product:string,productImage:string}) {
         return {
           title: product,
           media: productImage,
         }
      }       
   },
}