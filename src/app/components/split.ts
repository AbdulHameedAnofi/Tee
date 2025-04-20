"use client";

import { animate, stagger } from "framer-motion";
import { splitText } from "motion-plus";
import { useEffect } from "react";

export function useSplitTextAnimation(ref: React.RefObject<HTMLElement>, delayOffset = 0) {
    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!ref.current) return;
            ref.current.style.visibility = "visible";

            const { words } = splitText(ref.current);
            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 1.5,
                    bounce: 0.1,
                    delay: stagger(0.05, { }),
                }
            );
        });
    }, [ref, delayOffset]);
}
