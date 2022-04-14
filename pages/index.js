import { createClient } from "contentful"
import RecipeCrd from "../components/RecipeCrd";

export async function getStaticProps()
{ 
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,

  })
  const res = await client.getEntries({
    content_type: "recipe",
  })
  return {
    props: {
      recipes: res.items,
      revalidate: 1,
    }
  }
}

export default function Recipes({recipes})
{
  console.log(recipes);
  return (
    <div className="recipe-list">
      {
        recipes.map(recipe => (
          <div>
            <RecipeCrd key={recipe.sys.id} recipe = {recipe}/>
        </div>
        ))
      }
      <style jsx>{`
      .recipe-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
      }
      `}</style>
    </div>
  )
}