import Stripe from 'stripe';
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if(req.method === "POST") {
    try {
      //Create checkout session
      const session = await stripe.checkout.sessions.create({
          submit_type: 'pay',
          mode: 'payment', 
          payment_method_types: ['card'],
          shipping_address_collection: {
            allowed_countries: ['AR', 'AU', 'AT', 'BE', 'BO', 'BR', 'BG', 'CA', 'CL', 'CO', 'CR', 'HR', 'CY', 'CZ', 'DK', 'DO', 'EG', 'EE', 'FI', 'FR', 'DE', 'GR', 'HK', 'HU', 'IS', 'IN', 'ID', 'IE', 'IL', 'IT', 'JP', 'LV', 'LI', 'LT', 'LU', 'MT', 'MX', 'NL', 'NZ', 'NO', 'PY', 'PE', 'PL', 'PT', 'RO', 'SG', 'SK', 'SI', 'ES', 'SE', 'CH', 'TH', 'TT', 'AE', 'GB', 'US', 'UY']
          }, 
          allow_promotion_codes: true,
          shipping_options: [
            { shipping_rate: "shr_1MBaHML6Cc4MjcBZzbIkTSxL" }
          ],
          line_items: req.body.map(item => {
            return {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: item.title,
                  images: [item.image.data.attributes.formats.thumbnail.url],
                },
                unit_amount: item.price * 100,
              },
              adjustable_quantity: {
                enabled: true,
                minimum: 1,
              },
              quantity: item.quantity,
            };
          }),
          //Direct to success or failed page
          success_url: `${req.headers.origin}/success`,
          cancel_url: `${req.headers.origin}/cancel`
        });
      res.status(200).json(session);
    } catch(error) {
      res.status(error.statusCode || 500).json(error.message);
    }
  }
}