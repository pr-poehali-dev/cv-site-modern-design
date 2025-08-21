export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-slate-800/80 backdrop-blur-sm">
      <div className="flex items-center gap-4 p-6">
        <img 
          src="/img/e9a5bf2e-ca94-42fe-bcc2-6ba5c166a61f.jpg" 
          alt="Раиса Ильинская" 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="text-white">
          <h2 className="text-xl font-inter font-bold">Раиса Ильинская</h2>
          <p className="text-orange-400 text-sm">Ворожея</p>
        </div>
      </div>
    </header>
  );
}