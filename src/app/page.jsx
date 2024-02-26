import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-black border-b-2 font-Oswald flex flex-col pb-8 pt-4 md:py-24 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-[30vh] md:h-[60vh] bg-contain flex justify-center">
          <div className="text-6xl md:text-9xl text-white font-bold">
            <div className="relative font-Lora">
              <div className="flex gap-9 text-center">
                <div>EAT</div>
                <div className="text-green-400">CODE</div>
              </div>
              <div >
                <img src="./boy.png" className="absolute top-0" />
              </div>
              <div className="absolute mt-64 ml-12 text-center">
                <div className="text-white">SLEEP</div>
                <div className="text-green-400">REPEAT</div>
              </div>
            </div>
          </div>
        </div>
        <button className="text-green-400 mt-56 border mx-auto px-5 py-2 text-xl font-semibold hover:bg-white hover:text-black md:hidden">Take test</button>
      </div>
      <div className="py-20 flex gap-7 border-b-2 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <h1 className="text-green-400 text-2xl font-[500] text-center font-Oswald">Greetings, Students!</h1>
        <p className="text-green-400 font-extralight font-Oswald text-md text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque labore porro voluptas. Nostrum, quos numquam tempore non saepe voluptatem voluptatum voluptates explicabo eum fugiat, nihil obcaecati. Voluptate perspiciatis, magnam magni voluptatem animi, deserunt, saepe illum facere sint veniam fuga iure architecto dolore dolorum accusantium esse repudiandae eius iusto? Cumque quis officiis dolorum excepturi ad fugit harum explicabo laudantium reprehenderit temporibus vitae eligendi repellendus dolore quia, quaerat nam magnam incidunt ab molestias accusantium obcaecati eveniet? Obcaecati voluptatibus aliquid animi molestias fuga nobis excepturi.</p>
      </div>
      <div className="py-16 gap-7 border-b-2 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <h1 className="text-green-400 text-4xl font-[500] text-center font-Oswald">FAQ</h1>
        <div className="flex justify-center">
          <ul className="text-green-400 mt-8 font-extralight flex flex-col gap-4 list-disc font-Oswald text-md text-justify mx-6">
            <li>
              What is main concern of students ?
              <p className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius est sit sint aliquid, tempore suscipit!</p>
            </li>
            <li>
              When will the classes start ?
            </li>
            <li>
              Is it for free ?
            </li>
            <li>
              what kind of courses you offer
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </>
  );
}
