export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-6">
      <div className="flex items-start gap-4">
        <img 
          src="/img/e9a5bf2e-ca94-42fe-bcc2-6ba5c166a61f.jpg" 
          alt="Раиса Ильинская" 
          className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
        />
        <div className="text-white">
          <h2 className="text-xl font-inter font-bold">Раиса Ильинская</h2>
          <p className="text-orange-300 text-sm">Ворожея</p>
        </div>
      </div>
    </header>
  );
}