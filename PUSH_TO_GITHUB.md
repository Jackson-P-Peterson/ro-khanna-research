# Push to GitHub - Instructions

Your code is committed and ready to push! Here are two ways to do it:

## Option 1: Using HTTPS with Personal Access Token (Recommended)

1. **Create the repository on GitHub:**
   - Go to: https://github.com/new
   - Repository name: `ro-khanna-research`
   - Description: "Opposition research website for Representative Ro Khanna"
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Get a Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name it: "ro-khanna-research"
   - Select scope: `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again!)

3. **Push the code:**
   ```bash
   cd /Users/jacksonpeterson/ro/khanna-research
   git remote set-url origin https://github.com/jacksonpeterson/ro-khanna-research.git
   git push -u origin main
   ```
   - When prompted for username: enter `jacksonpeterson` (or your GitHub username)
   - When prompted for password: **paste your personal access token** (not your GitHub password)

## Option 2: Using SSH

1. **Set up SSH key** (if you haven't already):
   ```bash
   ssh-keygen -t ed25519 -C "jackson@jacksonpeterson.com"
   cat ~/.ssh/id_ed25519.pub
   ```
   - Copy the output and add it to: https://github.com/settings/keys

2. **Create the repository on GitHub** (same as Option 1, step 1)

3. **Push the code:**
   ```bash
   cd /Users/jacksonpeterson/ro/khanna-research
   git remote set-url origin git@github.com:jacksonpeterson/ro-khanna-research.git
   git push -u origin main
   ```

## Current Status

✅ All files are committed
✅ Remote is configured: `git@github.com:jacksonpeterson/ro-khanna-research.git`
✅ Branch is set to `main`

**Next step:** Create the repository on GitHub, then run the push command!
