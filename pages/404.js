import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Notfound()
{
    const router = useRouter()

    useEffect(() =>
    {
        setTimeout(() =>
        { 
            router.push('/')
        }, 3000);
    },[ ])
  return (
      <div className="not-found">
          <h1> 404</h1>
          <h2>Oops. that page can not be found :(</h2>
          <p>redirecting to  <Link href='/'> Home Page </Link> for more Marmites</p>
          <style jsx>{`
            .not-found {
                max-width: 1200px;
                margin: 1rem auto;
                background-color: #dbcc1a;
                padding: 1rem;
            }
            h1{
                text-align: center;font-size: 3em;

            }
`}</style>
    </div>
  )
}
