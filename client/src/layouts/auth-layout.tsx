import { Button, ButtonGroup } from "flowbite-react";
import { Link, Outlet, useLocation } from "react-router-dom"

import image from "../assets/images/LOGO.png";

function AuthLayout() {
    const pathname = useLocation().pathname

    return (
        <main className="bg-beige min-h-screen w-full" style={{
            fontFamily: "Poppins, verdana"
        }}>
            <header className="p-6 flex flex-col items-center justify-between">
                <div className="my-10">
                    <img src={image} alt="image" />
                </div>
                <nav className="w-full">
                    <ButtonGroup className="w-full" >
                        <Button className="" fullSized gradientMonochrome="teal" outline={pathname != "/login"} >
                            <Link to="/login" className="w-full text-xs">Login</Link>
                        </Button>
                        <Button className="" fullSized gradientMonochrome="teal" outline={pathname != "/create-account"} >
                            <Link to="/create-account" className="w-full text-xs">Sign Up</Link>
                        </Button>
                    </ButtonGroup>
                </nav>
            </header>
            <div className="p-4">
                <Outlet />
            </div>
            <footer className="text-center text-sm my-4">© Team J - campus sync app</footer>
        </main>
    )
}

export default AuthLayout