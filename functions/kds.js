xport async function onRequestGet({ env, params }) {
  const key = params.user;
  const data = await env.KDR.get(key);
  return new Response(data || "{}", { status: 200 });
}

export async function onRequestPut({ env, params, request }) {
  const key = params.user;
  const body = await request.text();
  await env.KDR.put(key, body);
  return new Response("OK", { status: 200 });
}
