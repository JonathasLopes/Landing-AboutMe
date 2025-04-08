import { useEffect } from "react";

function RemoveHash() {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0 && window.location.hash) {
                window.history.replaceState(null, '', window.location.pathname);
                window.dispatchEvent(new Event("hashchange"));
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return null;
}

export default RemoveHash;