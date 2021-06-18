import twilio from 'twilio';

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// twilioClient.messages.create -> Promise <to sewnd an SMS>
export const sendSms = (to, message) => {
  return twilioClient.messages.create({
    body: message,
    from: process.env.TWILIO_NUMBER,
    to
  });
};
