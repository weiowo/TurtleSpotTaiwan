export async function POST(req: Request) {
  const body = await req.json();
  const response = await fetch('https://f2e-test.simpleinfo.tw/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
