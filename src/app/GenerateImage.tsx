import { toPng } from "html-to-image";

export async function generatePngFromElement(element: HTMLElement): Promise<string | undefined> {
  try {
    const originalTransform = element.style.transform;
    element.style.transform = "scale(1)";

    const dataUrl = await toPng(element, {
      cacheBust: true,
      pixelRatio: 2,
    });

    element.style.transform = originalTransform;
    return dataUrl;
  } catch (err) {
    console.error("Error generating PNG:", err);
    return undefined;
  }
}