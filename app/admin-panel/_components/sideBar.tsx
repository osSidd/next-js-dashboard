'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar(){

    const pathname = usePathname()

    return (
        <div className="bg-white w-3/12 h-full">
            <div className="bg-blue-400 w-full h-48 flex items-center justify-center rounded-lg">
                <h1 className="text-2xl text-white font-semibold">Admin panel</h1>
            </div>
            <div className="mt-8 px-2">
                <Link scroll={false} className={` px-2 py-2 rounded block text-xl ${pathname === '/admin-panel/dashboard' ? 'bg-blue-400 text-white' : ""}`} href='/admin-panel/dashboard'>Dashboard</Link>
                <Link className="block text-xl mt-2 px-2 py-2 rounded" href='/admin-panel/feed/manage'>Manage feeds</Link>
                <Link className="block text-xl mt-2 px-2 py-2 rounded" href='/admin-panel/feed/create'>Create feed</Link>
                <Link className={` block text-xl mt-2 px-2 py-2 rounded ${pathname === '/admin-panel/performance' ? ' bg-blue-400 text-white' : ""}`} href='/admin-panel/performance'>Performance</Link>
            </div>
        </div>
    )
}