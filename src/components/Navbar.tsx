"use client"

import { Link as ScrollLink } from "react-scroll"
import { Button } from "@/components/ui/Button"
import { type Dispatch, type ReactNode, type SetStateAction, useEffect, useState } from "react"
import { Menu, X, Globe, ShoppingCart } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export const Navbar = ({ displayMode }: { displayMode?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const changeNav = () => {
    if (window.scrollY >= 96) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const toggleHome = () => {
    if (pathname === "/" || pathname === "/index") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      router.push("/")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
    return () => window.removeEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      {/* Main Navbar - Always white background */}
      {!displayMode && (
        <NavbarTop>
          <NavbarContent
            isScrollNav={false}
            toggleHome={toggleHome}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </NavbarTop>
      )}

      {/* Sticky Navbar on Scroll - Also white */}
      <NavbarScroll className={`${displayMode ? "top-0" : scrollNav ? "top-0" : "-top-[4.5rem]"}`}>
        <NavbarContent
          isScrollNav={true}
          toggleHome={toggleHome}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </NavbarScroll>

      {/* Mobile Menu */}
      <MobileNavbarContent scrollNav={scrollNav} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  )
}

const NavbarTop = ({ children }: { children: ReactNode }) => {
  return <nav className="w-full bg-white h-16 flex items-center mt-1">{children}</nav>
}

const NavbarScroll = ({
  className,
  children,
}: {
  className: string
  children: ReactNode
}) => {
  return (
    <nav
      className={`sticky z-50 flex justify-center items-center transition-all duration-700 w-full bg-white/80 backdrop-blur-xl border-b border-slate-900/10 h-[4.5rem] -mt-[4.5rem] ${className}`}
    >
      {children}
    </nav>
  )
}

const NavbarContent = ({
  isScrollNav,
  toggleHome,
  isMenuOpen,
  setIsMenuOpen,
}: {
  isScrollNav: boolean
  toggleHome: () => void
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className="flex justify-between items-center h-16 w-full max-w-7xl mx-auto px-4 md:px-8">
      {/* Logo Section */}
      <div className="flex items-center">
        <button className="flex items-center gap-2" onClick={toggleHome}>
          <img src="/webgo.png" alt="WebGo" className="w-32 h-auto" />
        </button>
      </div>

      {/* Right Section - Navigation, CTA and Cart */}
      <div className="flex items-center gap-8">
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <ScrollLink
            to="como-trabajamos"
            smooth
            spy
            offset={-72}
            className="text-black hover:text-gray-600 cursor-pointer transition-colors font-medium"
          >
            ¿Cómo Trabajamos?
          </ScrollLink>
          <ScrollLink
            to="planes"
            smooth
            spy
            offset={-72}
            className="text-black hover:text-gray-600 cursor-pointer transition-colors font-medium"
          >
            Planes
          </ScrollLink>
        </div>

        {/* Contact Button and Cart */}
        <div className="flex items-center gap-4">
          {/* Contact Button - Desktop */}
          <ScrollLink to="contacto" smooth spy offset={-72} className="hidden lg:block">
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full font-medium">
              Contáctanos
            </Button>
          </ScrollLink>


          {/* Mobile Menu Button */}
          <button className="lg:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  )
}

const MobileNavbarContent = ({
  scrollNav,
  isMenuOpen,
  setIsMenuOpen,
}: {
  scrollNav: boolean
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div
      className={`z-40 fixed top-20 left-0 right-0 lg:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
    >
      <div className="bg-white mx-4 rounded-xl shadow-xl border border-gray-100 py-6">
        <div className="flex flex-col space-y-4 px-6">
          <ScrollLink
            to="como-trabajamos"
            smooth
            spy
            offset={-72}
            className="text-black hover:text-gray-600 py-2 font-medium cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            ¿Cómo Trabajamos?
          </ScrollLink>
          <ScrollLink
            to="planes"
            smooth
            spy
            offset={-72}
            className="text-black hover:text-gray-600 py-2 font-medium cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Planes
          </ScrollLink>
          <ScrollLink to="contacto" smooth spy offset={-72} onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-full font-medium mt-4">
              Contáctanos
            </Button>
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}
