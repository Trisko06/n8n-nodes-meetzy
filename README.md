# n8n-nodes-meetzy

This is an n8n community node. It lets you use [Meetzy](https://www.meetzy.ai) in your n8n workflows.

Meetzy is a sales CRM for small B2B teams: leads, companies and deals, a 270M+ B2B prospect finder with verified emails, WhatsApp and LinkedIn messaging from your own accounts, email sequences and campaigns, sales analytics and forecasts from your ERP (SAP Business One, Odoo, Shopify…), and an AI sales copilot.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Trigger](#trigger)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Development](#development)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation. On n8n Cloud, search for **Meetzy** in the node panel; self-hosted, install `n8n-nodes-meetzy` from **Settings → Community nodes**.

The package ships two nodes:

- **Meetzy** — actions and searches on your CRM (usable as a tool by AI agents).
- **Meetzy Trigger** — starts a workflow on Meetzy events (webhooks).

## Operations

Every operation calls the public Meetzy REST API (`https://meetzy.me/api/v1`). Searches return one item per record and support **Return All** (automatic paging) wherever the endpoint pages with `limit` / `offset`.

### Contact / Lead

- **Create a Lead / Contact** — Adds a lead to the Meetzy CRM and links it to its company (found by email domain or name). An existing email returns the existing contact.
- **Create or Update a Lead (by Email)** — The safest way to sync from another tool: creates the contact, or updates the fields you send on the one with the same email.
- **Update a Lead / Contact** — Changes the fields you send: stage, owner, temperature, score, tags, follow-up date, custom properties…
- **Get a Lead / Contact (360° View)** — Everything about one person: record, engagement, LinkedIn status, company with what it buys (ERP), deals, tasks, timeline, notes and sequences.
- **Delete a Lead / Contact** — Removes the contact and its timeline. Cannot be undone.
- **Search Leads / Contacts** — Finds contacts by text, company, owner, stage, lifecycle, minimum score or last update — sorted by lead score.
- **Add a Note to a Lead** — Writes a timestamped note on the contact’s timeline.
- **Move a Lead to a Sales Cycle Stage** — Moves one or several leads to a stage of a sales cycle (CRM board); their open deals follow.
- **Set a Follow-up Reminder** — Sets the date and note of the next follow-up on a lead.
- **Assign a Lead to a Teammate** — Gives the lead an owner (or clears it).
- **Get Next Best Action (AI Sales Copilot)** — What to do next with a lead, from every conversation (email, WhatsApp, LinkedIn), the sales cycle and the ERP.
- **Get a Lead’s Interactions (Timeline)** — Website visits, email opens and clicks, LinkedIn and WhatsApp messages, meetings, sequences, stage changes, deals, quotes.

### Company

- **Create a Company (Account)** — Creates a company. With a domain that already exists, the existing company is returned.
- **Update a Company** — Changes the fields you send: owner, lifecycle stage, type, tier, tags, custom properties…
- **Get a Company (Account View)** — The company with its contacts, deals, tasks, timeline and what it buys from your ERP.
- **Search Companies** — Finds companies by words in name, domain, industry, city, country or ERP code, with contact, deal and revenue roll-ups.
- **Get a Company’s Sales (ERP)** — What one customer buys from your ERP or shop: this year vs last year, every year, products, brands, receivables.

### Deal

- **Create a Deal** — Creates a deal in a pipeline with its contact, company, amount, close date and line items.
- **Update a Deal (Move, Win, Lose)** — Moves a deal, wins or loses it, changes its amount, owner, close date… Winning makes its contacts and company customers.
- **Get a Deal** — The deal with its pipeline, company, contacts, line items, tasks, timeline and quotes.
- **Search Deals** — Finds deals by pipeline, status (open, won, lost), stage, owner, company, contact, close date or name.
- **List Pipelines & Stages** — Every deal pipeline with its stages (IDs, probabilities).

### Task & Activity

- **Create a Task** — Creates a task (to-do, call, email, meeting, LinkedIn, follow-up) for a teammate, on a contact, deal or company.
- **Complete or Update a Task** — Marks a task done (an activity is logged with the outcome) or changes it.
- **Search Tasks** — Open tasks by default, soonest first — by owner, due (overdue, today, upcoming), type, contact, deal or company.
- **Log a Call, Meeting or Activity** — Writes a call, meeting, email, WhatsApp, LinkedIn message or note on the timeline — and updates “last contacted”.
- **Search Activities (Timeline)** — Timeline entries, newest first: calls, meetings, emails, messages, notes, stage moves.

### WhatsApp, LinkedIn & Email

- **Send a WhatsApp Message** — Sends a WhatsApp message from your own number to a CRM contact, a known chat or any phone number — no prior conversation needed.
- **Get WhatsApp Conversation** — Recent WhatsApp messages with a contact, a phone number or a chat, oldest first.
- **Get WhatsApp Inbox (Who to Answer)** — Conversations where you need to reply, where a follow-up is due, and where you are waiting — matched to CRM contacts.
- **Send a LinkedIn Message** — Sends a LinkedIn message from your own account to a contact (1st-degree connections).
- **Send a LinkedIn Invitation** — Sends a LinkedIn connection request to a contact from your own account.
- **Get LinkedIn Connection Status** — Connected, invitation pending or not connected with a contact, with their LinkedIn profile.
- **Get LinkedIn Conversation** — Recent LinkedIn messages with a contact, oldest first.
- **Send an Email to a Lead (Tracked)** — Sends one email from your connected mailbox (Gmail, Outlook…) with open and click tracking, logged on the timeline. Merge tags like `{{contact.first_name}}` work.
- **Send an Email From Your Mailbox** — Sends an email to any addresses from your connected mailbox, with your signature.
- **Draft an Email with AI** — Writes a subject and body from a goal, in the tone and language you want, with merge tags. Uses AI credits.
- **Send an Email Campaign to Contacts** — Emails a list of contacts now (or later) with a template or a subject and body — unsubscribe link added automatically.

### Prospect Finder

- **Find B2B Prospects (People & Companies)** — Searches 270M+ professional contacts and companies by job title, seniority, industry, size, location, technologies or keywords. People search is free; company search costs 1 credit per page.
- **Reveal Email & Phone, Add to CRM** — Reveals the email, phone and employment of prospects from a search and adds them to the CRM (1 credit per prospect, failed reveals refunded).
- **Get Prospect Finder Credits** — Credits left this month and what each kind of search costs.
- **Search Website Visitors** — Identified visitors of your website (name, company, pages, score), most recent first.
- **Add Website Visitors to the CRM** — Creates or updates a contact for each identified visitor, tagged website.

### Sequence & Workflow

- **Enroll a Lead in a Sequence** — Starts a multichannel sequence (email, LinkedIn, calls, tasks) for one or several contacts.
- **Remove a Lead From a Sequence** — Stops the sequence for these contacts.
- **List Sequences** — Your sequences with their stats (enrolled, replied, meetings).
- **Run a Meetzy Workflow on Leads** — Enrolls contacts or deals in a Meetzy workflow right away, ignoring its trigger and conditions.

### Quote & Product

- **Create a Quote** — Creates a numbered quote from a deal (its line items) or from lines you give, for a company and contact.
- **Search Quotes** — Quotes by status (draft, sent, viewed, accepted, declined) or deal.
- **Search Products (Catalog)** — Products by name or SKU, from your catalog or the one synced from your ERP or shop.

### ERP Sales Analytics & Forecast

- **Search Invoices, Orders & Quotes (ERP)** — Documents synced from your ERP or shop — invoices, orders, quotes, credit notes — by customer, type, status, date, past due.
- **Get an Invoice or Order with Its Lines** — One ERP document with its customer and lines (SKU, name, quantity, prices, brand).
- **Get Sales Forecast (Next Months)** — The next months of sales, month by month, by customer, brand and salesperson — with the model’s accuracy.
- **Get Sales Analytics (ERP)** — Sales KPIs for a period against the previous one or last year: revenue, documents, customers, average, timeline, breakdowns.
- **Get Pipeline Report & Forecast** — Pipeline value, weighted pipeline, won, win rate, average deal, sales cycle and activity for a period.

### Workspace

- **Search Everything** — Contacts, companies, deals, tasks, quotes, order forms and ERP documents matching a text.
- **Get Credits Balance** — Monthly AI and data credits: total, used, remaining, reset date.
- **Get Team** — Plan, seats and members of the workspace.
- **Search the Event Log** — The latest events of the workspace (contact created, deal won, email opened…), newest first.
- **Custom API Request** — Any call to the Meetzy REST API (method, path, query, body) for everything not covered above. See the [API reference](https://www.meetzy.ai/docs).

Dropdowns for pipelines, stages, sales cycles, teammates, sequences, email templates and workflows are filled live from your workspace; every one of them also accepts an ID through an expression.

## Trigger

**Meetzy Trigger** registers a webhook in your workspace when the workflow is activated and removes it when it is deactivated. Pick one or several events, or **All Events**:

- Contacts: created, stage / status / lifecycle / score / owner changed, replied (email or LinkedIn), email sent / received / opened / clicked, website visit, meeting booked, LinkedIn invitation accepted, tags changed, note added, property changed, deleted, unsubscribed.
- Deals: created, stage changed, won, lost, reopened, amount / owner / property changed, rotting, overdue.
- Companies: created, lifecycle changed.
- Tasks: created, completed, overdue.
- Quotes: sent, viewed, accepted, declined.
- Sequences: enrolled, completed, exited.
- Email: sent, opened, clicked, failed.
- External: inbound webhook received, form submitted, enrolled manually in a workflow.

Each delivery is checked against its `X-Meetzy-Signature` header (HMAC-SHA256 of `timestamp.body` with the webhook secret Meetzy handed out at registration); deliveries with a wrong or stale signature are rejected with a 401 and never reach the workflow.

With **Simplify** on (the default) the node outputs the record itself (`id`, `display_name`, `primary_email`… for a contact; `name`, `amount`, `status`… for a deal) merged with `event`, `type`, `created_at` and the event details (`from` / `to` for stage changes, `won_reason`, `pages`…). Turn it off to receive the raw delivery (`id`, `type`, `created_at`, `organization`, `entity`, `data`, `test`).

## Credentials

1. Sign in to [Meetzy](https://meetzy.me) and open **Apps & integrations → API keys**.
2. Click **New key**, give it the scopes **read**, **write** and **webhooks** (the trigger needs *webhooks*), and copy the key — it starts with `mz_live_`.
3. In n8n, create a **Meetzy API** credential and paste the key. n8n checks it against `GET /me` right away.

The key is sent as a `Authorization: Bearer` header to `https://meetzy.me/api/v1` only. Keys can be revoked at any time from the same page.

## Compatibility

Built and tested with n8n 1.x (`n8nNodesApiVersion` 1, `@n8n/node-cli` 0.51). Requires Node.js 20.15 or newer, like n8n itself. No runtime dependencies.

## Usage

Some workflows people build with these nodes:

- **Inbound form → CRM → WhatsApp.** A *Webhook* or *Typeform* node receives a form, **Meetzy: Create or Update a Lead (by Email)** stores it, **Meetzy: Send a WhatsApp Message** says hello within the minute.
- **New lead → enrich → sequence.** **Meetzy Trigger** on *Contact created*, an *IF* on the lead score, **Meetzy: Enroll a Lead in a Sequence** for the hot ones, **Meetzy: Create a Task** for a human call on the others.
- **Deal won → invoice and celebrate.** **Meetzy Trigger** on *Deal won*, create the invoice in your accounting tool, post in Slack with `{{ $json.name }}` and `{{ $json.amount }}`.
- **Weekly prospecting.** A *Schedule* trigger, **Meetzy: Find B2B Prospects** (job title, location, headcount), **Meetzy: Reveal Email & Phone, Add to CRM** on the best matches, then **Meetzy: Send an Email to a Lead (Tracked)**.
- **ERP sync into other tools.** **Meetzy: Search Invoices, Orders & Quotes (ERP)** with *Return All* and `updated_since` to push documents into a spreadsheet or a data warehouse.
- **AI agent.** Give the Meetzy node to an *AI Agent* as a tool: it can look up a contact’s 360° view, ask for the next best action, draft an email and send it.

Tips:

- IDs come from a trigger, a search or the URL of the record in Meetzy (`…/contacts/<id>`).
- Fields that take several values (tags, contact IDs, job titles…) are comma-separated; objects and line items are JSON.
- Dates are sent as `YYYY-MM-DD`, date-times as ISO strings — the n8n date picker works for both.
- API errors keep the message Meetzy returns (missing scope, not enough credits, rate limit…), and *Continue on fail* puts it in the item’s `error` field.

## Example workflows

Ready to import (n8n → Workflows → Import from file), in [`examples/`](examples):

- **Website form → Meetzy lead + follow-up task** — a webhook receives the form, the person becomes a lead (same email = same contact) and a call is planned for tomorrow.
- **Meetzy deal won → Slack message** — the Meetzy Trigger posts every won deal in your sales channel.
- **Shopify order → Meetzy contact + deal** — each order finds or creates the customer and records the order as a deal.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Meetzy API reference](https://www.meetzy.ai/docs) — every endpoint, field and event used by these nodes
- [Meetzy OpenAPI document](https://meetzy.me/api/v1/openapi.json)
- Support: [contact@meetzy.me](mailto:contact@meetzy.me)

## Development

The node is generated from Meetzy’s connector manifest so that the Make, Zapier and n8n apps stay identical.

```bash
npm install
npm run generate   # rewrites nodes/Meetzy/generated.ts (properties + routing) from the manifest
npm run lint       # n8n's strict community-node lint
npm run build      # compiles to dist/ and copies the icons
npm run dev        # runs a local n8n with the node linked (hot reload)
```

`nodes/Meetzy/generated.ts` is generated from the [Meetzy API reference](https://meetzy.me/docs); changes to operations are released from there.


## Version history

- **0.1.0** — First release: Meetzy node (60 operations across contacts, companies, deals, tasks, WhatsApp / LinkedIn / email, Prospect Finder, sequences, quotes, ERP analytics, workspace) and Meetzy Trigger (50 event types, signed webhooks).

## License

[MIT](LICENSE) — Meetzy Corp FZCO
