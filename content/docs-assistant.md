# About the documentation assistant

The assistant is a documentation navigator with a deliberately narrow output boundary. It helps you find answers and code examples already documented for Luuna.

## Code does the retrieval

The site builds a local index from current guides, contracts, and accepted decisions. A lexical ranker finds matching passages; historical proposals and dated test logs are excluded from AI retrieval. Search itself costs nothing and works without a model key. Ordinary site search can include the archive when you choose it.

## The model selects; the server verifies

With AI enabled, the server sends a bounded question and a small set of public documentation excerpts to OpenRouter. The default model is `qwen/qwen3-coder-next`. It returns only passage identifiers. The server checks those identifiers against the retrieved set and returns the exact stored passages and source links. Arbitrary generated instructions, invented URLs, and tool calls are never rendered as an answer.

This is intentionally extractive: it can point you to documented examples, but cannot write a novel implementation or answer something the docs do not contain. A matching passage is evidence to read, not a guarantee it completely answers your question. If selection fails or the provider is unavailable, the panel clearly labels ordinary search results instead of pretending an AI answer succeeded.

## Privacy and cost

Your question and selected public excerpts go to OpenRouter and a model provider only when the model is enabled and you submit the form. Do not paste secrets or private code. This site does not persist chat transcripts; the visible conversation stays in browser memory until you close or reload it. Hosting and providers may retain operational logs under their policies.

No API key is sent to the browser. The model has no GitHub token, filesystem, Luuna runtime connection, browsing, or execution tools. Responses have bounded output, price ceilings, and no model fallback to a more expensive model. Public AI requires a verified Turnstile challenge. Per-instance throttling is a secondary limit, not a global spending cap; use a dedicated OpenRouter key with a small enforced credit limit.

## Content freshness

The footer and coverage report identify the source commit. This site is a pinned documentation snapshot; it does not silently follow the upstream branch. An update imports a new revision, regenerates the index, checks links and coverage, and redeploys the site. Current architecture and accepted decisions outrank older proposals.
