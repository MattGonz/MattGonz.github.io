export default function App() {
  return (
    <div className="dark">
      <main className="bg-background text-foreground relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_50%_45%,hsl(0_0%_15%)_0%,transparent_70%)]"
        />
        <span
          aria-hidden
          className="text-muted-foreground inline-block h-16 w-[6px] bg-current sm:h-20 sm:w-[7px] md:h-24 md:w-2 [animation:blink_1.1s_steps(2,end)_infinite]"
        />
        <style>{`@keyframes blink { 0%,50% { opacity: 1 } 50.01%,100% { opacity: 0 } }`}</style>
      </main>
    </div>
  )
}
