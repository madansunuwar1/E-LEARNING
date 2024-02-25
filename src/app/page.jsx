import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-black border-b-2 pb-64 font-Oswald">
        <div className="h-[30vh] md:h-[60vh] bg-contain flex justify-center mt-12">
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
      </div>
      <div className="px-8 py-20 flex gap-7 border-b-2">
        <h1 className="text-green-400 text-4xl font-[500] text-center font-Oswald">Greetings, Students!</h1>
        <p className="text-green-400 font-Oswald font-extralight text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque labore porro voluptas. Nostrum, quos numquam tempore non saepe voluptatem voluptatum voluptates explicabo eum fugiat, nihil obcaecati. Voluptate perspiciatis, magnam magni voluptatem animi, deserunt, saepe illum facere sint veniam fuga iure architecto dolore dolorum accusantium esse repudiandae eius iusto? Cumque quis officiis dolorum excepturi ad fugit harum explicabo laudantium reprehenderit temporibus vitae eligendi repellendus dolore quia, quaerat nam magnam incidunt ab molestias accusantium obcaecati eveniet? Obcaecati voluptatibus aliquid animi molestias fuga nobis excepturi. Hic, delectus harum, consectetur ullam, corrupti fuga incidunt temporibus ipsum sapiente itaque doloribus? Molestiae, illum ipsum.</p>
      </div>
    </>
  );
}
