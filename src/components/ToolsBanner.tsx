export function ToolsBanner() {
  return (
    <div className="w-full h-[400px] md:h-[500px] bg-[#F7F7F7] relative overflow-hidden flex items-center justify-center border-b border-[#E0E0E0]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute w-[120vw] md:w-[90vw] h-[150px] md:h-[200px] bg-[#E87722] rounded-[100%]"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-25deg)',
            filter: 'blur(120px)',
            opacity: 0.06,
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-normal text-[#000000] mb-6 tracking-tight">Tools</h1>
        <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto font-normal">
          Practical resources and utilities to streamline your digital workflows.
        </p>
      </div>
    </div>
  );
}
