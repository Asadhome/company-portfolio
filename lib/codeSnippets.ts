// Decorative code snippets for the ambient CodeBackground animation. Each
// section gets its own set so the motion feels tied to what that section is
// about, instead of repeating the same four columns down the page.

export const heroSnippets = [
  `export default function Hero() {
  const [theme, setTheme] = useState('dark');
  return (
    <main className="hero">
      <h1>createpixel</h1>
    </main>
  );
}

// fetch storefront products
const products = await shopify.query(\`
  query {
    products(first: 10) {
      edges { node { title } }
    }
  }
\`);

export async function getStaticProps() {
  const posts = await fetchPosts();
  return { props: { posts }, revalidate: 60 };
}`,
  `app.get('/api/projects', async (req, res) => {
  const data = await db
    .collection('projects')
    .find()
    .toArray();
  res.json(data);
});

// shopify liquid snippet
{% for product in collection.products %}
  <div class="card">
    {{ product.title }}
  </div>
{% endfor %}

function debounce(fn, delay) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}`,
  `git commit -m "feat: add PDP gallery"
git push origin main

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});

// node/express middleware
function auth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }
  next();
}

npm run build && vercel --prod`,
  `useEffect(() => {
  const ctrl = new AbortController();
  fetchData(ctrl.signal);
  return () => ctrl.abort();
}, []);

// klaviyo flow trigger
await klaviyo.events.create({
  event: 'Abandoned Cart',
  customer_properties: { $email },
  properties: { items },
});

type Project = {
  title: string;
  stack: string[];
  live: boolean;
};`,
];

export const servicesSnippets = [
  `type Service = {
  title: string;
  discipline: 'web' | 'email';
  stack: string[];
};

const services: Service[] = [
  { title: 'Web Development', discipline: 'web' },
  { title: 'Email Marketing', discipline: 'email' },
  { title: 'CRM Integrations', discipline: 'email' },
];

export function quoteProject(scope: Scope) {
  return estimate(scope.hours, scope.rate);
}`,
  `// welcome flow — day 0
await klaviyo.flows.trigger('welcome-series', {
  profile: { email },
  source: 'signup-form',
});

// abandoned cart — 1hr delay
scheduler.after('1h', () =>
  klaviyo.flows.trigger('abandoned-cart', { cartId })
);

// post-purchase — 3d delay
scheduler.after('3d', () =>
  klaviyo.flows.trigger('post-purchase', { orderId })
);`,
  `app.post('/webhooks/order-created', async (req, res) => {
  const order = verify(req.body, req.headers['x-hmac']);
  await hubspot.contacts.upsert({
    email: order.email,
    properties: { last_order_total: order.total },
  });
  res.status(200).end();
});

// REST + GraphQL, whichever the platform speaks`,
  `// n8n workflow — webhook trigger
{
  "nodes": [
    { "type": "n8n-nodes-base.webhook", "name": "New Lead" },
    { "type": "n8n-nodes-base.hubspot", "name": "Upsert Contact" },
    { "type": "n8n-nodes-base.slack", "name": "Notify Sales" }
  ],
  "connections": {
    "New Lead": { "main": [["Upsert Contact"]] },
    "Upsert Contact": { "main": [["Notify Sales"]] }
  }
}`,
];

export const stackSnippets = [
  `{
  "name": "client-storefront",
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "klaviyo-api": "^11.0.0",
    "@hubspot/api-client": "^12.0.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}`,
  `# stack.yml
frontend: [React, Next.js, TypeScript, Liquid]
backend:  [Node.js, PHP, Express]
email:    [Klaviyo, HubSpot, Braze, SFMC]
commerce: [Shopify, WordPress, WooCommerce]
data:     [MySQL, MongoDB, Firebase]
tooling:  [Git, Vercel, Postman]`,
  `SELECT customer_id, SUM(total) AS ltv
FROM orders
WHERE created_at >= NOW() - INTERVAL '90 days'
GROUP BY customer_id
ORDER BY ltv DESC
LIMIT 50;

// segment sync
await klaviyo.lists.addProfiles(listId, highLtvProfiles);`,
  `$ git log --oneline -5
a1c9e2f fix: cart drawer focus trap
0d7b4a1 feat: klaviyo back-in-stock flow
55e3f90 perf: image loader for PDP
c2a1119 fix: hubspot form validation
88f0aa2 feat: shopify metafield sync

$ npm run build && vercel --prod`,
];

export const workSnippets = [
  `// klaviyo — event tracking
klaviyo.push(['track', 'Added to Cart', {
  ProductName: item.title,
  Price: item.price,
  ItemUrl: item.url,
}]);

// shopify — product query
const { products } = await storefront.query(PRODUCTS_QUERY, {
  variables: { first: 12 },
});`,
  `// hubspot — lead capture
await hubspot.crm.contacts.basicApi.create({
  properties: {
    email, firstname, lastname,
    lifecyclestage: 'lead',
  },
});

// wordpress — custom post type
register_post_type('case_study', [
  'public' => true,
  'show_in_rest' => true,
]);`,
  `// sfcc — order webhook
export async function POST(req: Request) {
  const order = await req.json();
  await klaviyo.events.create({
    event: 'Placed Order',
    customer_properties: { $email: order.email },
    properties: { $value: order.total },
  });
  return Response.json({ ok: true });
}`,
  `.card {
  display: grid;
  gap: 12px;
  border-radius: 8px;
  transition: transform .15s ease;
}
.card:hover { transform: translateY(-2px); }

/* case study grid */
.grid {
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}`,
];

export const contactSnippets = [
  `export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  await resend.emails.send({
    from: 'createpixel <hello@createpixel.co>',
    to: COMPANY_EMAIL,
    subject: \`New inquiry from \${name}\`,
    text: message,
  });

  return NextResponse.json({ ok: true });
}`,
  `const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message }),
});

if (!res.ok) throw new Error('send failed');`,
  `function isValidEmail(value: string) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
}

// reply within 1–2 business days
const SLA_HOURS = 48;`,
  `$ curl -X POST https://createpixel.co/api/contact \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Jane","email":"jane@co.com"}'

{ "ok": true }`,
];
