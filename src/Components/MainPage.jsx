import Movies from "./Movies";
import Cinemas from "./Cinemas";
import Offers from "./Offers";
import AppRoutes from "./AppRoutes";
function MainPage({currentPage}) {
  console.log (currentPage);
  return (
   <>
  {/* //   {currentPage==="default" && (<h1>Welcome to PickMyShow</h1>)}
  //     {currentPage== "Movies" && (<Movies/>)}
  //      {currentPage== "Cinemas" && (<Cinemas/>)}
  //      {currentPage== "Offers" && (<Offers/>)} */}
       
    
    
    {/* { <main>
  //     <section id="home">
  //       <div className="container text-center mt-5"> */}
          {/* <h1>Welcome to PickMyShow</h1> */}
          {/* <p>Book your favourite movies and enjoy the show!</p>
  //       </div>
  //     </section>
  //   </main> } */}
    <AppRoutes/>
   </>
  );
}

export default MainPage;