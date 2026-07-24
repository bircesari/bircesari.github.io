# Chat History and Website Maintenance Guide

This document is a living note for this website project. It captures the recurring update workflow, the files that need to be changed for new blog posts, and the commands used to verify the site locally.

## Purpose
Use this file whenever a new blog post is added or when the homepage content needs to be updated.

## Project Structure
- Main homepage: [index.html](index.html)
- Alternative homepage variant: [Mainpage.html](Mainpage.html)
- Updated homepage variant: [Updated.html](Updated.html)
- Blog posts folder: [blog/](blog/)
- Shared post list data: [blog/posts.js](blog/posts.js)
- Sitemap: [sitemap.xml](sitemap.xml)

## Standard Workflow for a New Blog Post
When a new post is added, update the following files:

1. Create or update the article HTML file in [blog/](blog/).
2. Add the post entry to [blog/posts.js](blog/posts.js) with title, URL, tag, date, and description.
3. Add the post card to the main blog section in [index.html](index.html).
4. Add the same post card to the blog section in [Mainpage.html](Mainpage.html).
5. Add the same post card to the blog section in [Updated.html](Updated.html).
6. Add the new post URL to [sitemap.xml](sitemap.xml).
7. Verify the homepage locally.

## Website Update Rules
- Keep the blog cards consistent across all homepage versions.
- Place newer posts at the top of the visible blog list.
- If a placeholder or older governance-themed card is no longer relevant, comment it out from the visible list.
- Keep SEO metadata, canonical links, and sitemap entries updated.
- Keep the tone and visual structure aligned with the existing site design.

## Commands Used for Verification
Run these commands from the project root:

```bash
python3 -m http.server 8000 --directory /workspaces/bircesari.github.io
curl -I http://127.0.0.1:8000/index.html | head -5
```

Optional review commands:

```bash
git status --short
git diff --stat
```

## Current Project Notes
- The homepage has multiple versions, so updates should be mirrored across [index.html](index.html), [Mainpage.html](Mainpage.html), and [Updated.html](Updated.html).
- The Scandinavia post was added as a featured blog card and the older governance placeholder card was removed from the visible homepage blog list.
- The post was registered in [blog/posts.js](blog/posts.js) and added to [sitemap.xml](sitemap.xml).

## Update Log
- 2026-07-24: Added the Scandinavia blog post, updated the homepage blog listings, commented out the governance placeholder card, updated the shared post list, and added the new article to the sitemap.

## Commit, Push, and Final Verification Process
When the content update is ready to publish, follow this sequence:

1. Review the changed files:

```bash
git status --short
git diff --stat
```

2. Stage the intended changes:

```bash
git add index.html Mainpage.html Updated.html blog/posts.js sitemap.xml blog/Myway_of_Scandinavia.html chat_history.md
```

3. Commit the update with a clear message:

```bash
git commit -m "Update homepage with new blog post and maintenance notes"
```

4. Push the commit to the remote repository:

```bash
git push origin main
```

5. Re-run the local website checks after the changes are made:

```bash
python3 -m http.server 8000 --directory /workspaces/bircesari.github.io
curl -I http://127.0.0.1:8000/index.html | head -5
```

## Notes for Future Use
- If a change affects the homepage, update all homepage variants consistently.
- If a new blog post is added, always update the shared blog post list and sitemap.
- If the change is intended for publishing, always finish with commit and push steps.
- Keep this file updated by appending new workflow steps, commands, and project-specific notes rather than deleting existing content.
