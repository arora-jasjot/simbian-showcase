const Arrow = () => {
  return (
    <div className="relative h-64 w-1 flex justify-center items-start mr-5">
      <div className="w-px h-full bg-gradient-to-b from-white/10 to-white/100"></div>
      <div className="absolute bottom-0">
        <div className="w-3 h-3 border-b-2 border-r-2 border-white rotate-45"></div>
      </div>
    </div>
  )
}

export default Arrow