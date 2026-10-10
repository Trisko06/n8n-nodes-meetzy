# Changelog

## 0.1.2

- LinkedIn → Send Invitation: optional note (300 characters max, merge tags like `{{contact.first_name}}` filled in for each person).
- Watch LinkedIn Connections Accepted: Meetzy now notices accepted invitations on its own (LinkedIn reports them within a few hours).
- Prospect Finder → Find Prospects: describe who you look for in a sentence (`query`), in any language; the filters refine it.
- Website → Find Visitors: segments (identified, all, returning, hot, customers) and sort (last seen, score, visits, pages, time).

## 0.1.1

- Example workflows (website form → lead + follow-up task, deal won → Slack, Shopify order → deal) in `examples/`.
- Published from GitHub Actions through npm trusted publishing (no token).

## 0.1.0

- First release: Meetzy node (contacts, companies, deals, tasks, WhatsApp, LinkedIn, email, Prospect Finder, sequences, quotes, ERP analytics, workspace) and Meetzy Trigger (webhook events).
