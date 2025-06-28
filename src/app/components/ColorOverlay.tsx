"use client"

export default function ColorOverlay() {
   
    return (
        <>
           <div 
            className="absolute inset-0 mix-blend-overlay pointer-events-none z-10"
            style={{ backgroundColor: `rgba(245, 255, 252, 0.35)` }}
            />
        </>
    );
}


