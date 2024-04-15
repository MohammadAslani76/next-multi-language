"use client"

import {usePathname} from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";

const SelectLanguage = () => {

    const pathname = usePathname()

    const redirectedPathName = (locale) => {
        if (!pathname) return "/"
        const segments = pathname.split("/")
        segments[1] = locale
        return segments.join("/")
    }

    const handleLinkClick = (locale) => {
        Cookies.set("locale", locale);
    };

    return (
        <div className="flex items-center justify-center gap-3">
            <Link href={redirectedPathName("fa")}
                  className="px-3 py-1 rounded bg-orange-500 hover:bg-orange-400 transition-all"
                  onClick={() => handleLinkClick("fa")}>
                فارسی
            </Link>
            <Link href={redirectedPathName("en")}
                  className="px-3 py-1 rounded bg-indigo-500 hover:bg-indigo-400 transition-all"
                  onClick={() => handleLinkClick("en")}>
                English
            </Link>
        </div>
    );
};

export default SelectLanguage;