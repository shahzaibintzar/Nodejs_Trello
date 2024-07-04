import React, { useEffect, useRef } from 'react';
import './index.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const onMouseMove = (e) => {
            const cursor = cursorRef.current;
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        const onMouseEnter = () => {
            cursorRef.current.classList.add('custom-cursor-hover');
        };

        const onMouseLeave = () => {
            cursorRef.current.classList.remove('custom-cursor-hover');
        };

        window.addEventListener('mousemove', onMouseMove);
        document.querySelectorAll('a, button').forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.querySelectorAll('a, button').forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
