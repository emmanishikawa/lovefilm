import { toPng } from "html-to-image";

export async function downloadElementAsPng(element: HTMLElement, filename = "download.png") {
  try {
    
    const originalTransform = element.style.transform;
    element.style.transform = "scale(1)";

    const dataUrl = await toPng(element, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
  } catch (err) {
    console.error("Error generating PNG:", err);
  }
}