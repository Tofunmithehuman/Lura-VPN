const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { priceId, currency } = req.body;
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "price_1NKTZqIJjSM78lZthUUi9JnT",
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/home?success=true`, //where I want it to redirect back to
        cancel_url: `${req.headers.origin}/home?canceled=true`,
        automatic_tax: { enabled: true },
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
