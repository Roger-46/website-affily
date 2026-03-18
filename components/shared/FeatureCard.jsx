'use client'

const FeatureCard = ({
  icon,
  title,
  description,
  theme = 'dark',
}) => {
  const isDark = theme === 'dark'
  const bgClass = isDark ? 'bg-dark-200' : 'bg-white dark:bg-dark-200'
  const borderClass = isDark ? 'border-borderColour-dark' : 'border-gray-100 dark:border-borderColour-dark'
  const titleClass = isDark ? 'text-white' : ''
  const descClass = isDark ? 'text-paragraph-muted' : 'text-paragraph dark:text-paragraph-muted'

  return (
    <div className={`h-full rounded-medium ${bgClass} p-2.5 shadow-nav`}>
      <div className={`h-full rounded border border-dashed ${borderClass} p-6`}>
        <div className="mb-4 flex h-10 w-10 items-center justify-center">
          {icon}
        </div>
        <h3 className={`mb-2 font-semibold ${titleClass}`}>{title}</h3>
        <p className={`text-sm ${descClass}`}>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
