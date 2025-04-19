# notes-joshuayoes-com Redirect Service

This project provides a simple URL redirection service hosted on Vercel.

## Functionality

It redirects requests made to `https://notes-joshuayoes-com.vercel.app/<path>` to the corresponding Markdown file at `https://github.com/joshuayoes/knowledge-bank/blob/main/<path>.md`.

Additionally, the root path `/` redirects to the main README of the knowledge bank repository: `https://github.com/joshuayoes/knowledge-bank/blob/main/README.md`.

## Implementation

The redirection logic is handled entirely by Vercel's Edge Network using rules defined in the `vercel.json` file.

## Deployment

The service is deployed automatically by Vercel whenever changes are pushed to the `main` branch of this repository.
