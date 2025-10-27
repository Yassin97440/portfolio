import { Resend } from 'resend';
import { generateContactEmailTemplate, type ContactEmailData } from '../templates/contactEmailTemplate';

export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig();
  const resend = new Resend(config.resendApiKey);
  const body = await readBody(event);
  
  // Préparation des données pour le template
  const emailData: ContactEmailData = {
    from_name: body.from_name,
    subject: body.subject,
    budget: body.budget,
    found_through: body.found_through,
    from_email: body.from_email,
    message: body.message
  };
  
  (async function () {
    const { data, error } = await resend.emails.send({
      from: 'Site Web <contact@abdulla.fr>',
      to: ['yassin.abdulla.pro@protonmail.com'],
      subject: 'Contact WEB - '+body.subject,
      html: generateContactEmailTemplate(emailData),
    });
  
    if (error) {
      return console.error({ error });
    }
  
    console.log({ data });
  })();
  return {
    status: 200,
    message: 'Email sent with Resend'
  }
})
