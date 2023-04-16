const RentalNavBar = () => {
    const handleClick = () =>{
        console.log("Clicked");
    }
  return (
  <section className="w-4/5 m-auto bg-primary">
   <main className="w-3/4 m-auto flex justify-between h-12 items-center mb-4">
    <div className="w-1/4 h-full border-l border-r items-center flex justify-center cursor-pointer text-white" onClick={handleClick} >Home</div>
    <div className="w-1/4 h-full border-r items-center flex justify-center cursor-pointer text-white" onClick={handleClick} >Applications</div>
    <div className="w-1/4 h-full border-r items-center flex justify-center cursor-pointer text-white" onClick={handleClick} >Rent</div>
    <div className="w-1/4 h-full border-r items-center flex justify-center cursor-pointer text-white" onClick={handleClick} >Documents</div>
   </main>
  </section>
  )
};

export default RentalNavBar;
 