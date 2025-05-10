export default async function handler(req, res) {
  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
  const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL;

  if (!OPENROUTER_API_KEY || !OPENROUTER_MODEL) {
    return res.status(500).json({ message: "Missing API config" });
  }

  const { prompt } = await req.json();

  try {
    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": req.headers.referer || "",
        "X-Title": "Open Note"
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!r.ok) {
      const err = await r.json().catch(() => ({}));
      return res.status(r.status).json({ message: err.message || r.statusText });
    }

    const data = await r.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message || "Internal error" });
  }
}
