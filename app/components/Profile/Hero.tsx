import { useTypewriter } from "use-typewriter-hook";

function Hero() {
  const targetText = "Hi, I'm Chung!";
  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 150,
  });
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grid */}
      <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="lg:col-span-3">
          <h1 className={`block text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl gradient-text ${wrapperClassName}`}>{typedText}</h1>
          <div className="bio-description md:text-lg leading-10 text-textSmColor">
            <div className="my-10 text-lg xl:text-xl font-light">
              <p className="my-4">Welcome to my personal website!</p>
              <p className="mb-5 xs:mb-10 font-light">I am a fullstack developer passionate about delivering high-quality products. I enjoy building software that improves lives by writing elegant, performant frontend code and robust, secure backend solutions. When I&apos;m not coding, I love enjoying scenic views and taking long walks.</p>
            </div>
          </div>
        </div>
        {/* End Col */}
        <div className="lg:col-span-4 mt-10 lg:mt-0">
          <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80" alt="" />
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div >
  )
}

export default Hero
