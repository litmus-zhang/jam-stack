import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { createClient } from "contentful"
import Image from 'next/image'

const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,

})
  
export const getStaticPaths = async () =>
{ 
  const res = await client.getEntries({
    content_type: "recipe",
  })
  const paths = res.items.map(item => {
    return { params: { slug: item.fields.slug } }
  })
  return {
    paths, fallback: false,
  }
}

export async function getStaticProps({ params })
{ 
  const {items} = await client.getEntries({
    content_type: "recipe",
    'fields.slug': params.slug,
  })
  return {
    props: { recipe: items[0] },
  }
 
}



export default function RecipeDetails({ recipe })
{
  const {title, slug, cookingTime, featuredImage, method, ingredients } = recipe.fields;
  console.log(recipe);
  return (
    <div>
      <div className="banner">
        <Image src={`https:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
         <h2>{title}</h2>
      </div>
      <div className="info">

     
      <p>Takes about {cookingTime} to cook</p>
      <h3>Ingredients:</h3>
      {ingredients.map(ingredient => (
        <span key={ingredient}>{ingredient} </span>
      ))}
      </div>
      <div className="content">
        <h3>Method:</h3>
        <div>{documentToReactComponents( method)}</div>
      </div>
      <style jsx>{`
        h2,h3{
          text-transform: capitalize;
        }
        .banner {
          position: relative;
        }
        .banner h2{
          background-color: #fff;
          width: max-content;
          height: max-content;
          padding: 1rem;
          top: -60px;
          bottom: -10;
          left: 0;
          

        }
        .info p{
          margin: 1rem 0;
          font-size: 1.2rem;
        }
        .content{
          margin-top: 2rem;
          font-size: 1.2rem;
          line-height: 1.4;
        }
        .info span:after{
          content: ", ";
        }
        .info span:last-child:after{
          content: ".";
        }
      `}</style>
    </div>
  )
}