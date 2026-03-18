const BlurGradient = ({ position = 'center' }) => {
  const positionClasses = {
    top: '-top-[300px] left-1/2 -translate-x-1/2',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    bottom: '-bottom-[350px] left-1/2 -translate-x-1/2',
  }

  return (
    <div
      className={`pointer-events-none absolute -z-10 flex max-md:hidden ${positionClasses[position]}`}>
      <div className="h-[335px] w-[335px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[442px] xl:w-[442px]" />
      <div className="-ml-[170px] h-[335px] w-[335px] rounded-full bg-primary-200/25 blur-[145px] xl:h-[442px] xl:w-[442px]" />
      <div className="-ml-[170px] h-[335px] w-[335px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[442px] xl:w-[442px]" />
    </div>
  )
}

export default BlurGradient
