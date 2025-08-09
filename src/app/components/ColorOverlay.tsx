"use client"

export default function ColorOverlay() {
   
    return (
        <>
            <div 
            className="absolute inset-0 mix-blend-screen pointer-events-none z-9"
            style={{ backgroundColor: `rgba(255, 153, 161, 0.075)` }}
            />
           <div 
            className="absolute inset-0 mix-blend-overlay pointer-events-none z-8"
            style={{ backgroundColor: `rgba(199, 227, 255, 0.45)` }}
            />
        </>
    );
}


