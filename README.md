# Parkside.hr - Premium Domain Sale Landing Page

A modern, professional Next.js landing page for selling the premium Croatian domain **parkside.hr** - perfect for LIDL's PARKSIDE brand expansion into Croatia.

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 18, and TypeScript
- **Premium Design**: Professional aesthetics with custom fonts (Inter & Plus Jakarta Sans)
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Comprehensive metadata for Croatian market
- **Animated UI**: Smooth animations and micro-interactions
- **Type-Safe**: Full TypeScript implementation with strict mode
- **Email Integration**: Resend API for professional email handling
- **Performance**: Optimized build with minimal JavaScript (104 KB First Load JS)

## 📋 Sections

1. **Hero Section**
   - Animated gradient background with floating particles
   - Large domain display with "For Sale" badge
   - Feature highlights and dual CTAs

2. **Value Propositions**
   - 6 benefit cards highlighting domain advantages
   - Statistics panel (.hr domain, 8 characters, LIDL brand ready)
   - Hover effects and animations

3. **Contact Form**
   - Professional form with validation
   - Email delivery via Resend API
   - Loading states and success/error feedback
   - Configurable recipient email

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: CSS Modules with custom design system
- **Fonts**: Google Fonts (Inter, Plus Jakarta Sans)
- **Email**: Resend API
- **Deployment Ready**: Vercel, Netlify, or any Node.js host

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ivan-veres/parkside-hr.git
cd parkside-hr

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your Resend API key
```

## 🔑 Environment Setup

### 1. Get Resend API Key

1. Sign up at [Resend.com](https://resend.com)
2. Verify your email
3. Go to [API Keys](https://resend.com/api-keys)
4. Create a new API key
5. Copy the key

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your-email@example.com
```

**Important Notes:**
- `RESEND_FROM_EMAIL`: Use `onboarding@resend.dev` for testing, or verify your own domain in Resend
- `RESEND_TO_EMAIL`: The email where form submissions will be sent (set this to your email)
- Never commit `.env.local` to version control (it's in `.gitignore`)

### 3. Verify Domain (Optional)

For production use with a custom sender email:
1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain
3. Add the DNS records provided
4. Update `RESEND_FROM_EMAIL` to use your verified domain

## 🌐 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

The app runs on [http://localhost:3000](http://localhost:3000) by default.

## 📧 Email Features

### Beautiful HTML Emails
Form submissions are sent with a professionally designed HTML email template featuring:
- Branded header with gradient background
- Highlighted offer amount
- Contact information (name, email)
- Optional message field
- Timestamp in Croatian timezone
- Responsive design

### Email Content
Each submission includes:
- **Subject**: "Domain Offer for Parkside.hr - [Offer Amount]"
- **To**: Your configured email address
- **From**: Configured sender email
- **Format**: Both HTML and plain text versions

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts       # Email API endpoint
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Hero.module.css
│   │   ├── ValueProps.tsx
│   │   ├── ValueProps.module.css
│   │   ├── ContactForm.tsx    # Form with API integration
│   │   └── ContactForm.module.css
│   ├── layout.tsx             # Root layout with fonts & SEO
│   ├── page.tsx               # Main landing page
│   └── globals.css            # Global styles & design system
├── .env.local                 # Environment variables (create this)
├── .env.example               # Environment variables template
└── tsconfig.json              # TypeScript configuration
```

## 🎨 Design System

The app uses a comprehensive design system with:
- CSS custom properties for colors, spacing, typography
- Deep blue (#0A2540) and gold (#F59E0B) color palette
- Responsive typography with fluid scaling
- Reusable animation keyframes
- Consistent shadows and border radius

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app works on any platform that supports Next.js:
- Netlify
- Railway
- Render
- Any Node.js hosting

**Remember to set environment variables on your hosting platform!**

## 🔧 Configuration

### TypeScript

The project uses strict TypeScript configuration with:
- Strict mode enabled
- Path aliases (`@/*` → `./src/*`)
- Next.js plugin for optimal type checking

### ESLint

Next.js ESLint configuration with recommended rules.

## 📊 Performance

- **First Load JS**: 104 KB (optimized)
- **Build Time**: ~3 seconds
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

## 🐛 Troubleshooting

### Email not sending?
1. Check your Resend API key is correct in `.env.local`
2. Verify the API key has permission to send emails
3. Check the browser console for error messages
4. Ensure you haven't exceeded the free tier limits (100 emails/day)

### Hydration errors?
The `suppressHydrationWarning` prop on the `<html>` tag is intentional to prevent font-related hydration mismatches.

### Build errors?
1. Delete `.next` folder and `node_modules`
2. Run `npm install` again
3. Run `npm run build`

## 📄 License

This project is for domain sale purposes. All rights reserved.

## 👤 Contact

For domain inquiries, use the contact form on the website.

---

Built with ❤️ for LIDL's PARKSIDE brand expansion into Croatia
