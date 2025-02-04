"use client"

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

interface LayoutProps {
    children: React.ReactNode;
    headerPosition?: 'absolute' | 'sticky';
}

const Layout = ({children, headerPosition = 'sticky'}: LayoutProps) => {
    return (
        <div className={"min-h-screen flex flex-col max-w-screen overflow-x-hidden"}>
            <Header position={headerPosition}/>
            <main className={"bg-background flex-1 w-screen overflow-x-hidden"}>{children}</main>
            <Footer/>
        </div>
    );

};

export default Layout;