"use client"

export default function ColorOverlay() {
   
    return (
        <>
           <div 
            className="absolute inset-0 mix-blend-overlay pointer-events-none z-9"
            style={{ backgroundColor: `rgba(255, 240, 255, 0.35)` }}
            />
        </>
    );
}


