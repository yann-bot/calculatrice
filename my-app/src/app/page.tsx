
import Grille from './interface_memo/page'


export default function Home() {
  return (
    <main className=" h-full w-full"> 
        <div className=" w-full h-full flex flex-col">
            <div className="border m-5 mb-0  h-100 rounded-2xl flex flex-col justify-end">
                  {/* Screen */}
                 <div className="border-t h-20">
                    {/* calcul */}
                 </div>
             </div>
             <div className="border m-5 mb-0 h-10 ">
                 

             </div>
             <Grille />
             
        </div>
   </main>

  );
}