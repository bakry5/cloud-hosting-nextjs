# ☁️ Cloud Hosting Platform

A modern, full-stack **Cloud Hosting Management Platform** built with **Next.js 14** for educational purposes. This project demonstrates best practices in building a production-ready web hosting management system with user authentication, content management, and a beautiful responsive UI.

<img src="./public/course-nextjs.png" alt="Cloud Hosting Platform" width="800">

---

## ✨ Features

- 🏠 **Landing Page** - Modern hero section with animated elements and glassmorphism design
- 📰 **Articles & Blog** - Browse and read articles about cloud hosting services
- 💬 **Comment System** - Authenticated users can comment on articles
- 🔐 **User Authentication** - Secure login with JWT tokens and password hashing
- 👨‍💼 **Admin Panel** - Admin dashboard for content and user management
- 🎨 **Modern UI** - Responsive design with TailwindCSS, animations, and glassmorphism effects
- 🔔 **Toast Notifications** - Real-time feedback with React Toastify
- ✅ **Form Validation** - Type-safe validation using Zod schemas

---

## 🛠️ Tech Stack

### **Frontend**
| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [TailwindCSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |
| [Axios](https://axios-http.com/) | HTTP client for API calls |

### **Backend**
| Technology | Purpose |
|------------|---------|
| [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) | Serverless API endpoints |
| [Prisma ORM](https://www.prisma.io/) | Database ORM & type-safe queries |
| [PostgreSQL](https://www.postgresql.org/) | Relational database |
| [JWT](https://jwt.io/) | Secure authentication tokens |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | Password encryption |
| [Zod](https://zod.dev/) | Schema validation |

### **Dev Tools**
- ESLint - Code linting
- PostCSS - CSS processing
- TypeScript - Static typing & IntelliSense

---

## 🗄️ Database Schema

```
User ──┬── Email (unique)
       ├── Username
       ├── Password (hashed)
       └── Admin role (boolean)

Article ──┬── Title
          ├── Description
          └── Comments (relation)

Comment ──┬── Text
          ├── Article (FK)
          └── User (FK)
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ installed
- **PostgreSQL** database (local or remote)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd cloud-hosting-project-course-main
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/CloudStorageHostingDB
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
```

### 4. Set Up Database
```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev
```

### 5. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📁 Project Structure

```
cloud-hosting-project/
├── prisma/
│   ├── migrations/          # Database migrations
│   └── schema.prisma        # Prisma database schema
├── public/                  # Static assets
├── src/
│   ├── apiCalls/            # API client functions
│   ├── app/
│   │   ├── (user)/          # User routes (grouped)
│   │   ├── about/           # About page
│   │   ├── admin/           # Admin dashboard
│   │   ├── articles/        # Articles & blog section
│   │   ├── api/             # API routes
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── error.tsx        # Error boundary
│   ├── components/
│   │   ├── articles/        # Article-related components
│   │   ├── comments/        # Comment components
│   │   ├── header/          # Navigation & header
│   │   ├── home/            # Home page components
│   │   ├── Footer.tsx       # Footer component
│   │   └── ButtonSpinner.tsx # Loading spinner
│   ├── generated/           # Auto-generated types (Prisma)
│   └── utils/               # Utility functions
├── .env                     # Environment variables
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # TailwindCSS configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🎨 UI/UX Highlights

- **Glassmorphism Design** - Frosted glass effects with blur and transparency
- **Custom Animations** - Fade-in, float, and scale transitions
- **Brand Color Palette** - Purple/violet gradient theme
- **Responsive Layout** - Mobile-first design with TailwindCSS breakpoints
- **Modern Illustrations** - Clean SVG illustrations from Popsy

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx prisma studio` | Open Prisma database GUI |

---

## 🚢 Deployment

The easiest way to deploy this app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

For other deployment options, see [Next.js Deployment Docs](https://nextjs.org/docs/deployment).

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

---

## 🤝 Contributing

Contributions are welcome! This is an educational project designed to demonstrate full-stack development with Next.js. Feel free to fork, modify, and learn from it.

---

## 📄 License

This project is licensed under the **ISC License**.

---

<p align="center">
  <b>Built with ❤️ using Next.js | For Educational Purposes</b>
</p>
