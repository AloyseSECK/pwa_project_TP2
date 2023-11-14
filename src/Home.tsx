function Home() {
  return (
    <html>
      <header>
        <button id="disconnect_button"> Se déconnecter</button>
      </header>
      <body className="flex min-h-screen">
        {/* <button> Se deconnecter </button> */}
        <div id="mygrid" className="grid grid-cols-8 gap-4">
          <div className="col-span-6 md:col-span-2 bg-zinc-800 text-white p-4 ">
            <img
              id="marioBros"
              src="images/mario.webp"
              alt="Mario Bros Avatar"
              className="rounded-full w-16 h-16 object-scale-down "
            />
            <h1>Mario Bros</h1>
            <p>Un petit plombier moustachu</p>
          </div>
          <div className="col-span-6 md:col-span-2 bg-zinc-800 text-white p-4 ">
            <img
              id="V"
              src="images/v.webp"
              alt="Mario Bros Avatar"
              className="rounded-full w-16 h-16 object-cover"
            />
            <h1>V</h1>
            <p>La cybernétique au service de l'humain </p>
          </div>
          <div className="col-span-6 md:col-span-4 md:row-span-2 bg-zinc-800 text-white p-4 ">
            <img id="pikachu" src="./images/pikachu.png" alt="pikachu image" />
            <h1>Picachu </h1>
            <p>Est-ce vraiment nécessaire de vous le présenter ? </p>
          </div>
          <div
            id="master_chief"
            className="col-span-6 md:col-span-4 bg-zinc-800 text-white p-4 "
          >
            <div id="masterChiefResume">
              <h1>Master Chief</h1>
              <p>La peur incarnée des convenants </p>
            </div>
            <div id="masterChief_img">
              <img
                src="images/halo.jpeg"
                alt="MasterChief Avatar"
                className="rounded-full object-cover w-60 h-60"
              />
            </div>
          </div>
          <div className="col-span-6 md:col-span-2 bg-zinc-800 text-white p-4 ">
            <img
              id="ethanWinters"
              src="images/ethan.jpeg"
              alt="Ethan Avatar"
              className="rounded-full  w-16 h-16 object-cover"
            />
            <h1>Ethan Winters</h1>
            <p>L'homme malchanceux de Resident Evil</p>
          </div>
          <div className="col-span-6 md:col-span-2 bg-zinc-800 text-white p-4 ">
            <img
              id="solidSnake"
              src="images/solidSnake.webp"
              alt="Solid Snake Avatar"
              className="rounded-full  w-16 h-16 object-scale-down"
            />
            <h1>Solid Snake</h1>
            <p>L'agent secret contre Metal Gear</p>
          </div>
          <div className="col-span-6 md:col-span-2 bg-zinc-800 text-white p-4 ">
            <img
              id="kratos"
              src="images/kratos.png"
              alt="Kratos Avatar"
              className="rounded-full  w-16 h-16 object-scale-down"
            />
            <h1>Kratos</h1>
            <p>Le papa contre les dieux qui voulait protéger son fils</p>
          </div>
          <div className="col-span-6 md:col-span-2 bg-zinc-800 text-white p-4 ">
            <img
              id="aloy"
              src="images/aloy.webp"
              alt="Aloy Avatar"
              className="rounded-full  w-16 h-16 object-cover"
            />
            <h1>Aloy</h1>
            <p>L'héroïne à l'arc contre les méca</p>
          </div>
        </div>
      </body>
    </html>
  );
}
export default Home;
