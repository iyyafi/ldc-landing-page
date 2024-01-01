import { cva } from 'class-variance-authority'

export const button = cva(
    ['button', 'border-transparent', 'rounded-[50px]', 'w-full', 'text-center'],
    {
        variants: {
            intent: {
                primary: ['bg-[#f8a833]', 'text-white', 'font-bold'],
            },
            size: {
                md: ['px-4', 'py-2.5', 'md:text-lg'],
            },
        },
    }
)
