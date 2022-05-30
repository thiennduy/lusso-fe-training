import DOMPurify from "isomorphic-dompurify"

console.log(DOMPurify.sanitize)
interface IDOMPurifyWindow extends Window {
  DOMPurify: typeof DOMPurify
}
if (typeof window !== "undefined") {
  const purify = (window as unknown as IDOMPurifyWindow)?.DOMPurify || DOMPurify
}

export const sanitize = (html: string): string => DOMPurify.sanitize(html)
