import { useEffect, useState } from "react";

const ScrollProgress = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.body.scrollHeight - window.innerHeight;

            const totalScroll = (scrollTop / docHeight) * 100;
            setScrollPercent(totalScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    //   console.log(scrollPercent);
    if (scrollPercent === 0) return null

        return (
            <div
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 w-14 h-14 text-lg font-bold rounded-full bg-primary text-white flex items-center justify-center cursor-pointer shadow-xl z-50 border-4"
            >
                {Math.round(scrollPercent)}%
            </div>
        );
};

export default ScrollProgress;
