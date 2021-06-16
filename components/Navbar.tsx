import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/fonts.module.css";
import { useSession } from "next-auth/client";

const Navbar = () => {
    const [session] = useSession();

    return (
        <nav>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <ul className="flex p-4 px-8 py-5 justify-between items-center">
                <div className="flex">
                    <li className="px-2 tracking-tighter">
                        <Link href="/">
                            <a className={`${styles.mono} text-lg font-normal`}>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="px-2 tracking-tighter">
                        <Link href="/dashboard">
                            <a className={`${styles.mono} text-lg font-normal`}>
                                Dashboard
                            </a>
                        </Link>
                    </li>
                </div>
                {session && (
                    <Link href={`/dashboard`}>
                        <a className="flex flex-row justify-between items-center">
                            {/* @ts-ignore */}
                            <p className="text-sm text-gray-500 filter drop-shadow-xl">
                                {/* @ts-ignore */}
                                {session.user.email}
                            </p>
                            <img
                                // @ts-ignore
                                src={session.user.image}
                                // @ts-ignore
                                alt={session.user?.name}
                                className="rounded-full shadow-xl w-12 h-12 ml-4"
                            />
                        </a>
                    </Link>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
