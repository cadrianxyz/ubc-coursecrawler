export const MobileEntry = ({ text = '', href = '#', icon: Icon = '' }) => (
<a href={href} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
    {Icon && <Icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />}
    <span className="ml-3 text-base font-medium text-gray-900">{text}</span>
</a>
)

export const MobileLink = ({ text = '', href = '#' }) => (
    <a
        href={href}
        className="text-base font-medium text-gray-900 hover:text-gray-700"
    >
        {text}
    </a>
)