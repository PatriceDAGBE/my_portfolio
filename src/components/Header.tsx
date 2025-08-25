import Logo from "@/components/Logo"

const Header = () => {
    return (
        <header className="w-full flex justify-between items-center pt-8 rounded-full">
            {/* Logo full - left section */}
            <div>
                <Logo/>
            </div>

            {/* Menu items - middle section */}
            <ul className="hidden md:flex space-x-4">
                <li><a href="#services" className="hover:text-amber-800 text-gray-300 text-xl transition-colors">Services</a></li>
                <li><a href="#resume" className="hover:text-amber-800 text-gray-300 text-xl transition-colors">Resume</a></li>
                <li><a href="#" className="hover:text-amber-800 text-gray-300 text-xl transition-colors">Works</a></li>
                <li><a href="#" className="hover:text-amber-800 text-gray-300 text-xl transition-colors">Skills</a></li>
                <li><a href="#" className="hover:text-amber-800 text-gray-300 text-xl transition-colors">Testimonial</a></li>
            </ul>

            {/* Contact button - full right section */}
            <button className="hidden md:block bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors">
                Let&apos;s talk
            </button>
        </header>
    );
}

export default Header;