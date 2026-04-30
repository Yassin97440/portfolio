export default defineEventHandler((event) => {
  // Configuration de la redirection QR Code
  // Tu peux modifier ces valeurs selon tes besoins (campagne, destination, etc.)
  const config = {
    destination: '/contact-reunion',
    utmSource: 'qr_code',
    utmMedium: 'print',
    utmCampaign: 'business_card',
    utmContent: 'carte_visite_v1',
  };

  const queryParams = new URLSearchParams({
    utm_source: config.utmSource,
    utm_medium: config.utmMedium,
    utm_campaign: config.utmCampaign,
    utm_content: config.utmContent,
  });

  const redirectUrl = `${config.destination}?${queryParams.toString()}`;

  return sendRedirect(event, redirectUrl, 302);
});
