import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { AnimateSharedLayout } from "framer-motion";
import { motion } from "framer-motion";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <AnimateSharedLayout>
            <Provider session={pageProps.session}>
                <motion.div
                    key={router.route}
                    initial="pageInitial"
                    animate="pageAnimate"
                    variants={{
                        pageInitial: {
                            opacity: 0,
                        },
                        pageAnimate: {
                            opacity: 1,
                        },
                    }}
                >
                    <ToastProvider>
                        <Component {...pageProps} />
                    </ToastProvider>
                </motion.div>
            </Provider>
        </AnimateSharedLayout>
    );
}
export default MyApp;
