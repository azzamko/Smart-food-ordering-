export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { prompt } = req.body;
  if (!prompt) {
    res.status(400).json({ error: "Prompt is required" });
    return;
  }

  // رد تجريبي بدون الاتصال بـ OpenAI
  const fakeResponse = `📦 تم استلام طلبك: "${prompt}". سيتم معالجته قريباً. (وضع تجربة)`;

  res.status(200).json({ reply: fakeResponse });
}
