import { SITE } from "./products";

// Builds a wa.me deep link that opens WhatsApp with a pre-filled message.
export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encoded}`;
}

export function openWhatsApp(message) {
  window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
}
