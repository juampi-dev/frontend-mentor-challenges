import Image from "next/image"
import Link from "next/link"
import githubIcon from "public/img/icon-github.svg"
import linkedinIcon from "public/img/icon-linkedin.svg"

const size = 22

export default function Footer(){
  return(
    <footer className="bg-neutral-black flex flex-col gap-y-2 py-2">
      <h5 className="text-center px-16 text-neutral-white font-thin text-sm mx-auto">
        - Frontend Mentor Challenge made by Juan Pablo Sinkachkuk -
      </h5>
      <div className="mx-auto flex flex-wrap gap-x-4 sm:gap-x-2">
        <Link className="bg-neutral-white rounded-full hover:bg-neutral-light-lavender" href="https://github.com/juan-ps" target="_blank"><Image src={githubIcon} width={size} height={size} alt="Github icon" /></Link>
        <Link className="rounded-md bg-neutral-white hover:bg-neutral-light-lavender hover:shadow-neutral-light-lavender hover:shadow-sm" href="https://www.linkedin.com/in/juanps94/" target="_blank"><Image src={linkedinIcon} width={size} height={size} alt="LinkedIn icon"/></Link>
      </div>
    </footer>
  )
}