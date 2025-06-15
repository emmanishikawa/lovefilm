"use client"

export default function ColorOverlay() {
   
    return (
        <>
           <div 
            className="absolute inset-0 mix-blend-overlay pointer-events-none z-10"
            style={{ backgroundColor: `rgba(235, 235, 255, 0.4)` }}
            />
        </>
    );
}


