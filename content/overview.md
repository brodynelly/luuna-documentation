# Build with evidence. Stay in control.

Luuna is a local-first software engineering workbench for individual developers. It connects a desktop, browser, or terminal client to an independent Rust runtime that coordinates Pi workers, runs real checks, records durable evidence, and asks for exact-plan approval before implementation. You control merging.

## Start with the right expectations

Luuna is an executable development foundation, **not a verified v1 release**. The current source includes approved implementation, candidate checks, independent review, bounded repair, multiple-repository coordination, component workflows, a terminal client, and a GitHub publication slice. Each has a different level of acceptance evidence.

The [release evidence report](/docs/docs-release-evidence) is the release gate. It still calls for a clean Windows installation test, macOS proof, genuine-provider runs on the current tree, real GitHub publication, capable mobile/Flutter runners, and a real-project pilot. A fixture test is not proof of model compatibility or a shipped native distribution.

## Follow a feature from idea to review

1. **Register a repository.** Inspect it without executing its instructions. Review discovery proposals and confirm the project manifest.
2. **Establish a baseline.** Run the required recipes. Missing tools, empty suites, and interrupted checks cannot count as a passing baseline.
3. **Describe a ticket.** Record intent, acceptance criteria, and dependencies. Missions becomes the ticket authority only after explicit component activation.
4. **Approve an exact plan.** Inspect scope, base commits, recipes, selected memory, permissions, and budgets. Approval binds to the immutable revision and full hash.
5. **Implement in an owned worktree.** A scoped Pi writer creates a candidate; it does not modify your development checkout directly.
6. **Validate and independently review.** Real checks and a fresh read-only reviewer examine the exact candidate. Evidence is invalidated when its inputs change.
7. **Repair within limits.** Opt into bounded automatic repair or request a manual repair. Infrastructure problems pause work instead of prompting repeated edits.
8. **Publish, then merge yourself.** The publication slice creates and reconciles linked pull requests. The runtime observes merge status; it has no merge operation.

Continue with the [complete walkthrough](/docs/docs-mvp-walkthrough), [current architecture](/docs/docs-current-architecture), or [capability reference](/docs/reference-capabilities).

## The three supporting tools

| Component | Responsibility | Boundary |
| --- | --- | --- |
| Missions | Tickets, dependencies, intent, acceptance criteria | Seeds-derived CLI; explicit activation makes it the ticket authority |
| Atlas | Scoped knowledge with provenance | Mulch-derived CLI; memory enters a plan only through explicit selection |
| Beacon | Versioned prompt resources | Canopy-derived CLI; exact content, version, and hash are bound into approval |

They are independent public repositories consumed at pinned commits. Their npm package names do not imply published registry releases. Read the [component workflows](/docs/docs-component-workflows) and each component's reference.

## What this site documents

This site preserves the repository's documentation, decision records, component guides, schemas, examples, role contracts, and historical design material. Generated references cover every cataloged capability, served runtime route, package script, and domain schema in the pinned snapshot. The [coverage report](/docs/reference-coverage) records what is included and why private operational material is excluded.

Current architecture and accepted decisions take precedence over old proposals. Dated verification records describe their named revision and platform. They are not new test results from this documentation build.

## Ask the docs

Use **Talk to AI** for a question about Luuna. Code searches the current documentation first. When configured, a small coding model chooses relevant passages; the server returns only exact passages from the approved documentation with links. It cannot browse, execute code, access your runtime, or invent commands outside the docs. Without an AI key, the same panel offers local document matches.
