'use client'
import { FaCheck } from 'react-icons/fa'

const ChecklistItem = ({
  text,
  iconBgColor = 'bg-primary-100',
  iconColor = 'text-primary',
}) => {
  return (
    <li className="flex items-center gap-x-5 rounded border border-dashed border-gray-100 p-2.5 dark:border-borderColour-dark">
      <span className={`shadow-icon relative h-10 w-10 flex-shrink-0 rounded-full ${iconBgColor} dark:bg-dark-200`}>
        <FaCheck className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${iconColor}`} />
      </span>
      <span className="font-jakarta font-semibold">{text}</span>
    </li>
  )
}

export default ChecklistItem
