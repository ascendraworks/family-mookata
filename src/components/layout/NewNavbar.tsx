import Image from "next/image";

function NewNavbar() {
    return (
        <div className="w-full flex justify-between items-center px-16 py-4">
            <Image src="/img/logo.png" alt="Family Mookata Logo" width={100} height={100} />
            <div className="flex gap-12 text-lg overflow-hidden">
                <a>Home</a>
                <a>Menu</a>
                <a>Find Us</a>
                <a>About</a>
            </div>
        </div>
    );
}

export default NewNavbar;
