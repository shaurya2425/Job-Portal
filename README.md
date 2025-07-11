# 🏆 HIRRD - Modern Job Portal for Recruiters & Candidates

[🌐 **Live Demo**](https://job-portal-shaurya-rajputs-projects.vercel.app/)

**Hirrd** is a next-gen, full-featured job portal built using **React.js**, **Tailwind CSS**, **Supabase**, and **Clerk Auth**. It enables seamless job creation, candidate applications, and role-based user experience — tailored for the modern hiring workflow.

> “In the hiring world, timing and visibility is everything — Hirrd gives you both.”

---

## 🚀 Why Use Hirrd?

### 🧑‍💼 For Recruiters
- Post jobs with rich descriptions
- View and manage applications
- Delete or update job postings easily
- Role-based access for secure control

### 🧑‍🎓 For Candidates
- Explore jobs from verified recruiters
- Apply with resume upload (Supabase Storage)
- Track application status in real-time
- Clean, mobile-first UI

---

## 💡 Key Features

| Feature                           | Description                                                                 |
|-----------------------------------|-----------------------------------------------------------------------------|
| 🔐 Clerk Authentication           | Secure, real-time authentication with support for sessions & roles         |
| 🗃️ Supabase Integration           | Handles backend: job posting, applications, resumes, and user data         |
| 📝 Markdown Job Descriptions      | Write beautiful rich-text descriptions using `react-md-editor`             |
| 🌍 Country/State Dropdown         | Location selectors powered by `country-state-city`                         |
| 🧭 Routing                        | Built with `react-router-dom@6` for clean and dynamic route management     |
| ⚡ Real-time Experience           | Instant updates, fast page transitions                                     |
| 🎨 Elegant UI                     | Tailwind CSS + Lucide Icons + Embla carousel for modern job cards          |
| 📦 Modular Form Handling          | Built with `react-hook-form`, `zod`, and `@hookform/resolvers`            |

---

## 🔧 Tech Stack

### Frontend
- **React 19** + **Vite**
- **Tailwind CSS 4**
- **Clerk Auth**
- **React Router v6**
- **Zod**, **React Hook Form**

### Backend & Services
- **Supabase** (DB + Auth + Storage)
- **Supabase JS v2**
- **Clerk.dev**

---

## 🌐 Environment Variables

Create a `.env` file in the root and include:

```env
VITE_SUPABASE_URL=https://zrmkutsszyqflxnnfpmq.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```
## 🛠️ Getting Started

### ✅ Prerequisites

- Node.js 18+
- Supabase Project (set up tables for `jobs`, `applications`, etc.)
- Clerk.dev Project (for authentication)

---

### 📦 Installation

```bash
git clone https://github.com/shaurya2425/Job-Portal.git
cd Job-Portal
npm install
npm run dev
```
## 🛡️ Security & Roles

- 🔐 Routes are protected using Clerk’s `SignedIn`, `SignedOut`, and `useUser()` hooks
- 👤 **Candidates** can view and apply to jobs
- 🧑‍💼 **Recruiters** can create, delete, and manage jobs/applications

---

## 📁 Folder Structure

```bash
/src
  /components       -> Reusable UI components
  /pages            -> Route-level pages
  /lib              -> Supabase and Clerk configurations
  /hooks            -> Custom hooks
  /utils            -> Helper logic and utilities
```
## 📈 Performance & Deployment

- 🚀 **Blazing-fast performance** with [Vite](https://vitejs.dev)
- ☁️ **Backend powered by [Supabase](https://supabase.com)** (database, auth, storage)
- 🧩 **Authentication powered by [Clerk](https://clerk.dev)**
- ✅ **Easily deployable** to Vercel, Netlify, or any modern static host
## 🤝 Contributing

## We welcome all contributions!

1. **Fork the repository**

2. **Create your feature branch**  
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add new feature"
   ```
 
4. **Push to the branch** 
     ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request 🚀**
⭐ Star the repo if you find it useful or inspiring!

## 🙏 Acknowledgements

- **Clerk.dev** for authentication services  
- **Supabase** for backend and storage  
- **Radix UI** and **Lucide Icons** for UI excellence  

---

## 📢 Let's Connect

- 👨‍💻 **GitHub:** [@shaurya2425](https://github.com/shaurya2425)
- 🔗 **LinkedIn:** [Shaurya Rajput](https://www.linkedin.com/in/shaurya-rajput/)
- 🌐 **Project Repo:** [HIRRD Job Portal](https://github.com/shaurya2425/Job-Portal)

---

🛠️ *Built with ❤️ by Shaurya Rajput — aspiring full-stack developer & product builder.*

