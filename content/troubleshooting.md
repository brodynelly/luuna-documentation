# Troubleshooting

Start with the runtime's reason and the next allowed action. A blocked environment, a failed check, a refused approval, and an interrupted run have different recovery paths.

## The client cannot connect

Confirm the independent service is running on loopback, the address and port match, and the client has the same private token. A wrong token is an authentication failure, not a provider error. `luuna-runtime doctor --json` reports prerequisites and credential presence without printing values. Never expose the loopback runtime to the public internet just to connect a client.

## Pi starts but a model request fails

Check the pinned Pi executable, the provider/model selection, provider network access, and the selected provider's credential. Luuna uses isolated sessions; an existing ordinary Pi OAuth login does not configure them. A missing-key failure verifies the failure path only. Read the runtime's redacted reason and the [runtime reference](/docs/crates-luuna-runtime-readme).

## A baseline is blocked

Install the missing prerequisite or correct the confirmed check recipe. An empty test suite, missing executable, unavailable platform capability, or interrupted check is not a successful baseline. Run it again after correcting the environment. Feature implementation requires a passed baseline matching the current manifest, commit, tree, and host fingerprint.

## Approval or implementation is refused

Check the current ticket revision, manifest, base commit, selected component resources, full plan hash, repository identity, baseline, budgets, and worktree lease. A stale plan needs a new revision and explicit approval. Do not edit stored hashes or force a state transition.

## A reviewer left no verdict

A failed candidate can be revalidated in place only when its current generation's required checks all passed and no verdict was recorded, subject to the runtime's other gates and remaining budgets. Read `revalidate_allowed` and `decision_reasons` from the candidate API. Revalidation reruns checks and starts a fresh reviewer; it does not spend a writer attempt. A recorded verdict, failed/blocked check, or content drift follows a different recovery path.

## Candidate content drift

The candidate no longer matches its recorded tree, or a check modified tracked content. The runtime fails it with a reason naming the change. Use repair or a new plan revision as instructed. Do not reuse old review evidence. Validation cleans untracked and ignored paths only in verified Luuna-owned worktrees.

## The service stopped during work

Restart recovery records unfinished work as interrupted, never successful. An interrupted reviewer or writer can reserve unknown spend and exhaust the approved headroom. Re-plan when required. Closing the client is only a disconnect; it does not cancel work.

## A component source changed

Observe ticket source freshness and reconcile with the expected projection revision. Re-plan after external ticket changes. Re-select memory or prompt resources if their exact snapshots, versions, or hashes changed. Missing components fail closed; do not create a second writable ticket authority.

## Publication timed out

Use the publication reconciliation operation and inspect its per-repository steps. The intent ledger exists to discover whether a push or pull request already succeeded. Do not blindly start another publication. CI status and merge status are distinct; merging remains a human decision. Real GitHub acceptance remains a release gate in this snapshot.

## Restore safely

Use `luuna-runtime backup --output <file>` for an online database snapshot. Stop the runtime before `luuna-runtime restore --input <file>`. Do not replace only the main SQLite file beside a newer WAL. A database snapshot omits artifacts and worktrees; a complete backup is the entire data directory copied after orderly shutdown. See [storage and recovery](/docs/docs-decisions-0016-storage-backup-and-schema-compatibility).
