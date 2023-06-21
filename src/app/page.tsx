import Image from 'next/image'
import logoImg from '../assets/logo.svg'
import githubImg from '../assets/github.svg'

export default function Home() {
  return (
    <main className="bg-bg w-screen h-screen flex items-center justify-start flex-col gap-8">
      <div className="flex items-center justify-between max-w-5xl w-full">
        <Image src={logoImg} width={143} />

        <div className="nav">
          <a className="text-purple" href="https://github.com/fischerrobson">
            <Image src={githubImg} />
          </a>
        </div>
      </div>

      <div className="text-gray-100 font-roboto flex flex-col max-w-4xl">
        <h2 className="mb-5 text-3xl">Desenvolvendo uma web acessíveis</h2>
        <h4 className="text-xl">Protocolos e diretrizes orientam...</h4>

        <p className="my-3 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          voluptas repudiandae, quas in sint ab nulla consectetur sit laudantium
          aspernatur iste voluptate accusamus voluptatem perferendis vitae
          laborum laboriosam omnis maxime.
        </p>

        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          voluptas repudiandae, quas in sint ab nulla consectetur sit laudantium
          aspernatur iste voluptate accusamus voluptatem perferendis vitae
          laborum laboriosam omnis maxime.
        </p>

        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          voluptas repudiandae, quas in sint ab nulla consectetur sit laudantium
          aspernatur iste voluptate accusamus voluptatem perferendis vitae
          laborum laboriosam omnis maxime.
        </p>

        <h3>O que e acessibilidade</h3>
      </div>
    </main>
  )
}
