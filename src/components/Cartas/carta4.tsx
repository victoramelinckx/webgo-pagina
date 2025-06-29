import { Plus } from "lucide-react";
import { FaShopify } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCcStripe } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrWordpress } from "react-icons/gr";
import { IoLogoFigma } from "react-icons/io5";
import { FaAws } from "react-icons/fa";


import type { FC } from "react";




// Placeholder components for logos
const TypescriptLogo: FC = () => <div className="flex flex-row items-center gap-x-1 text-xs font-bold"><BiLogoTypescript className="h-8 w-auto" />TypeScript</div>;
const ShopifyLogo = () => <div className="flex flex-row items-center gap-x-1 text-xs font-bold"><FaShopify className="h-8 w-auto" />Shopify</div>;
const VercelLogo = () => <div className="flex flex-row items-center gap-x-1 text-xs font-bold"><SiVercel className="h-8 w-auto" />Vercel</div>;
const StripeLogo = () => <div className="flex flex-row items-center gap-x-1 text-xs font-bold"><FaCcStripe className="h-8 w-auto" />Stripe</div>;
const ReactLogo = () => <div className="flex flex-row items-center gap-x-1 text-xs font-bold"><FaReact className="h-8 w-auto" />React</div>;
const FirebaseLogo = () => <div className="flex flex-row items-center gap-x-1 text-xs font-bold"><IoLogoFirebase className="h-8 w-auto" />Firebase</div>;
const TailwindLogo = () => <div className="flex flex-row items-center gap-x-1 text-xs font-bold"><RiTailwindCssFill className="h-8 w-auto" />Tailwind</div>;
const WordpressLogo = () => <div className="flex flex-row items-center gap-x-1 text-xs font-bold"><GrWordpress className="h-8 w-auto" />Wordpress</div>;
const FigmaLogo = () => <div className="flex flex-row items-center gap-x-1 text-xs font-bold"><IoLogoFigma className="h-8 w-auto" />Figma</div>;
const AwsLogo = () => <div className="flex flex-row items-center gap-x-1 text-xs font-bold"><FaAws className="h-8 w-auto" />Aws</div>;
export default function Carta4() {
    return (
        <div className="bg-white rounded-[2rem] pt-14 pb-20 px-8 md:py-[90px] md:px-[80px] relative overflow-hidden shadow-xl">
            <h3 className="text-[40px]  md:text-5xl font-bold mb-6 leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#6D80BE] to-[#00DB71]">
                Tecnología de vanguardia en cada proyecto.
                <br />
                <span className="">Y en partners selectos.</span>
            </h3>

            {/* Tech Logos */}
            <div className="flex flex-wrap items-center mx-auto justify-center gap-x-6 gap-y-4 mt-8 mb-6 text-black">
                <ShopifyLogo />
                <VercelLogo />
                <TypescriptLogo />
                <StripeLogo />
                <ReactLogo />
                <FirebaseLogo />
                <TailwindLogo />
                <WordpressLogo />
                <FigmaLogo />
                <AwsLogo />
            </div>

            <div className="text-gray-600 text-xs text-center">Stack moderno y escalable para proyectos enterprise. Tu negocio merece una base tecnológica sólida y de vanguardia.</div>

            <div className="absolute bottom-8 right-8 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
            </div>
        </div>
    );
}