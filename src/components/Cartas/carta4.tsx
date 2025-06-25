import { Plus } from "lucide-react";
import { FaShopify } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import type { FC } from "react";




// Placeholder components for logos
const AppleLogo = () => <div className="h-8 w-auto text-sm font-bold"></div>;
const TypescriptLogo: FC = () => <div className="flex flex-row items-center gap-x-1 text-xs font-bold"><BiLogoTypescript className="h-8 w-auto" />TypeScript</div>;
const BookingLogo = () => <div className="h-5 w-auto text-xs font-bold">Booking.com</div>;
const ChargepointLogo = () => <div className="h-5 w-auto text-xs font-bold">chargepoint+</div>;
const DuaneReadeLogo = () => <div className="h-5 w-auto text-xs font-bold">DUANEreade</div>;
const ExxonLogo = () => <div className="h-5 w-auto text-xs font-bold">Exxon</div>;
const MobilLogo = () => <div className="h-5 w-auto text-xs font-bold">Mobil</div>;
const NikeLogo = () => <div className="h-5 w-auto text-sm font-bold">✓</div>;
const UberLogo = () => <div className="h-5 w-auto text-xs font-bold">Uber</div>;
const UberEatsLogo = () => <div className="h-5 w-auto text-xs font-bold">Uber Eats</div>;
const WalgreensLogo = () => <div className="h-5 w-auto text-xs font-bold">Walgreens</div>;


export default function Carta4() {
    return (
        <div className="bg-white rounded-[2rem] p-8 md:py-[90px] md:px-[80px] relative overflow-hidden shadow-xl">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#6D80BE] to-[#00DB71]">
                Tecnología de vanguardia en cada proyecto.
                <br />
                <span className="">Y en partners selectos.</span>
            </h3>

            {/* Tech Logos */}
            <div className="flex flex-wrap items-center mx-auto justify-center gap-x-6 gap-y-4 mt-8 mb-6 text-black">
                <FaShopify className="h-8 w-auto" />
                <SiVercel className="h-8 w-auto" />
                <TypescriptLogo />
                <ChargepointLogo />
                <DuaneReadeLogo />
                <ExxonLogo />
                <MobilLogo />
                <NikeLogo />
                <UberLogo />
                <UberEatsLogo />
                <WalgreensLogo />
            </div>

            <div className="text-gray-600 text-xs text-center">Stack moderno y escalable para proyectos enterprise. Tu negocio merece una base tecnológica sólida y de vanguardia.</div>

            <div className="absolute bottom-8 right-8 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
            </div>
        </div>
    );
}