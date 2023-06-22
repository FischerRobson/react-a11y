import Image from 'next/image'
import logoImg from '../assets/logo.svg'
import githubImg from '../assets/github.svg'

export default function Home() {
  return (
    <div className="bg-bg w-screen h-screen flex items-center justify-start flex-col gap-8">
      <header
        role="banner"
        className="flex items-center justify-between max-w-5xl w-full py-2"
      >
        <Image src={logoImg} width={143} alt="Rocketseat blog" />

        <nav aria-label="">
          <a
            aria-label="acessar github" // image is within link
            className="text-purple"
            href="https://github.com/fischerrobson"
          >
            <Image src={githubImg} alt="" />
          </a>
        </nav>
      </header>

      <main>
        <article className="text-gray-100 font-roboto flex flex-col max-w-4xl">
          <header>
            <h2 className="mb-5 text-3xl">Desenvolvendo uma web acessíveis</h2>
            <h4 className="text-xl">Protocolos e diretrizes orientam...</h4>
          </header>

          <p className="my-3 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            voluptas repudiandae, quas in sint ab nulla consectetur sit
            laudantium aspernatur iste voluptate accusamus voluptatem
            perferendis vitae laborum laboriosam omnis maxime.
          </p>

          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            voluptas repudiandae, quas in sint ab nulla consectetur sit
            laudantium aspernatur iste voluptate accusamus voluptatem
            perferendis vitae laborum laboriosam omnis maxime.
          </p>

          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            voluptas repudiandae, quas in sint ab nulla consectetur sit
            laudantium aspernatur iste voluptate accusamus voluptatem
            perferendis vitae laborum laboriosam omnis maxime.
          </p>

          <h3>O que e acessibilidade</h3>
        </article>
      </main>
    </div>
  )
}
