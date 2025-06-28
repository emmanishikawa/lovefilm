import { toPng } from "html-to-image";

export async function downloadElementAsPng(element: HTMLElement, filename = "download.png") {
  try {
    
    const dataUrl = await toPng(element, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
    const img = new Image();
    img.src = dataUrl;
  } catch (err) {
    console.error("Error generating PNG:", err);
  }
}