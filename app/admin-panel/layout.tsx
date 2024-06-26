import Link from "next/link";
import SideBar from "./_components/sideBar";

export default function AdminLayout({children, analytics, dashb}:{
    children: React.ReactNode 
    analytics: React.ReactNode
     dashb: React.ReactNode}
){
    return (
        // <div className=" min-h-screen flex gap-x-4 px-4 py-4">
            // {/* <SideBar/> */}
            <div className="w-9/12">
                {children}
                {analytics}
                {dashb}
            </div>
        // </div>
    )
}