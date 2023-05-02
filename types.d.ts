import { AnyIfEmpty } from "react-redux"

interface IAssets {
   _ref:string
   _type:string
}

interface ImageObjectInterface {
   desktop: {
      alt?:string,
      asset: IAssets,
   },
   tablet: {
      alt?:string,
      asset: IAssets,
   },
   mobile: {
      alt?:string,
      asset: IAssets,
   },
}

interface IProductBoxContent {
   item: string,
   quantity: number,
   _key: string
}

interface IGalleryImageContent {
   asset:IAssets,
   _type:string,
   alt:string,
   _key:string
}

interface IGalleryImage {
   desktop: IGalleryImageContent[],
   tablet: IGalleryImageContent[],
   mobile: IGalleryImageContent[]
}


// product type
type Product = {
   _id: string,
   previewPageImage: ImageObjectInterface,
   price:number,
   slug:{
      current: string
   },
   isNew: boolean,
   overviewText: string,
   productImage: ImageObjectInterface,
   features: any /*sanity block content*/,
   category: string,
   productInCartImage: {
      asset: IAssets
   },
   boxContents: IProductBoxContent[],
   galleryImages: IGalleryImage
   productName: string,
   productSuggestionImage: ImageObjectInterface
}

// product highlight type
type ProductBase = Pick<Product, '_id' | 'slug' | 'isNew' | 'overviewText' | 'previewPageImage' | 'productName' >

type IBanner = {
   bannerImage: ImageObjectInterface,
   overviewText: string,
   featuredProduct:{
     _ref: string,
   }
}

interface IBannerData  {
   overviewText: string,
   productName: string,
   isNew: boolean | null,
   slug: {
      current: string
   },
   bannersImages: ImageObjectInterface | null
}


interface ICompanyOverviewData {
   companyOverviewText: any, //sanity block content
   companyOverviewImage: ImageObjectInterface
}


interface IsuggestProductData {
   productSuggestionImage:ImageObjectInterface
   productName: string,
   category: string,
   slug: {current:string},
   _id: string
} 




// cart

type CartProductDetails = Pick<Product, '_id' | 'price' | 'productInCartImage' | 'productName' >

interface ICartProductData {
   productDetails: CartProductDetails,
   orderCount: number
}