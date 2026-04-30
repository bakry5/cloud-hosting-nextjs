import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 relative overflow-hidden bg-slate-50">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-3xl p-10 animate-fade-in-up">
        <h1 className="text-4xl font-black text-slate-800 mb-2 text-center tracking-tight">Welcome Back</h1>
        <p className="text-slate-500 text-center mb-8 font-medium">Log into your hosting account</p>
        <LoginForm />
      </div>
    </section>
  )
}

export default LoginPage