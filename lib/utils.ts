export function getWhatsAppUrl(message: string = "Hi, I want to join your gym. Can you share details?") {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "03333940413";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
}
