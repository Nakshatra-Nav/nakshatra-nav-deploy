# Nakshatra Nav - Deployment Guide

## Project Overview
Nakshatra Nav is a Transit Rewards Platform for Ahmedabad Metro. It's a Next.js web application with Firebase backend integration.

## Repository Setup

This repository has been configured for automated deployment using GitHub Actions.

### Files Included
- `.github/workflows/deploy.yml` - GitHub Actions workflow for automated builds
- `package.json` - Project dependencies and scripts
- `README.md` - Project description
- `.gitignore` - Excludes node_modules and other build artifacts

## Local Development

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Nakshatra-Nav/nakshatra-nav-deploy.git
cd nakshatra-nav-deploy

# Install dependencies
npm install
```

### Running Locally

```bash
# Development server
npm run dev

# Visit http://localhost:3000
```

## Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Automated Deployment

This repository uses GitHub Actions to automatically build and test on every push to the main branch.

### GitHub Actions Workflow
The `.github/workflows/deploy.yml` file defines:
- Automatic builds on push to main/master
- Node.js 18.x environment setup
- npm dependency installation
- Application build
- Build artifact upload

## Deployment Options

### Option 1: GitHub Pages
Deploy to GitHub Pages by configuring your repository settings:
1. Go to Settings > Pages
2. Select "Deploy from branch"
3. Choose main branch and `/root` directory

### Option 2: GitHub Actions with Custom Host
Modify `.github/workflows/deploy.yml` to add deployment steps for your hosting provider.

### Option 3: Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Deploy: `firebase deploy`

## Environment Variables

Create a `.env.local` file for local development with Firebase configuration:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Features

- TP (Transit Points) Collection System
- Rewards Store with Multiple Tiers
- Tower Defense Game
- Spin Wheel Daily Rewards
- Character Management
- Metro Rewards Tracking
- User Authentication
- Responsive UI

## Support

For issues or questions, please open an issue on GitHub.

## License

This project is private and proprietary.


