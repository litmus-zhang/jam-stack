import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCrd({ recipe })
{
    const {title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
      <div className="card">
          <div className="card-image">
              <Image src={`https:${thumbnail.fields.file.url}`}
                  width={thumbnail.fields.file.details.image.width}
                  height={thumbnail.fields.file.details.image.height}
                  alt={title} />
              </div>
          <div className="card-content">
              <div className="info">

                  <h4>{title}</h4>
                  <p> Takes approx. { cookingTime} to make</p>
              </div>
              <div className="actions">
                  <Link href={`/recipes/${slug}`}>
                      <a> Cook this</a>
                  </Link>
              </div>
          </div>
          <style jsx>{
              `
                .card {
                    display: flex;
                    flex-direction: column;
                    border-radius: 5px;
                    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
                    background-color: #fff;
                    width: clamp(300px, 1fr, 400px);
                    transition: all 0.3s ease-in-out;
                    transform: rotate(0deg);
               
                }
                .card:hover {
                    transform: rotate(5deg);
                }
                .card-image {
                    width: 100%;
                    height: 10rem;
                    object-fit: cover;
                    overflow: hidden;

                }
                .card-content {
                    padding: 20px;
                }
                .info {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .info h4 {
                    font-size: 1.2rem;
                    margin: 1rem 0;
                }
                .info p {
                    font-size: 1rem;
                    margin: 0;
                    margin-bottom: 1rem;
                }
                .actions {
                    display: flex;

                }
                .actions a {
                    text-decoration: none;
                    color: #000;
                    font-size: 1rem;
                    padding: 10px;
                    border: 1px solid #000;
                    border-radius: 5px;
                    transition: all 0.2s ease-in-out;
                }
                .actions a:hover {
                    background-color: #000;
                    color: #fff;
                }
              `
          }
          </style>
      </div>
  )
}
