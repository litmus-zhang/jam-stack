

export default function Skeleton(){
  return (
      <div className="skeleton">
          <div className="s-banner"></div>
          <div className="s-Header"></div>
          <div className="s-Content"></div>
          <div className="s-Content"></div>
          <div className="s-Content"></div>
        
          <style jsx>{`
          .skeleton {
              max-width: 1200px;
                margin: 1rem auto;
                background-color: #dbcc1a;
                margin: 1rem 0;
                border-radius: 5px;
          }
          
          .s-banner{
                height: 10rem;
                width: 100%;}
            .s-Header{
                height: 10rem;
                width: 100%;
            }
            .s-Content{
                height: 10rem;
                width: 100%;
            }
         
          `}</style>
    </div>
  )
}
