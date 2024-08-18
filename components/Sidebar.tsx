'use client'
 
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({ user }: SiderbarProps) => {
    const pathName = usePathname();
  return (
    <section className='sidebar'>
        <nav className='flax flex-col gap-4'>
            <Link href='/'
            className='mb-12
            cursoe-pointer
            items-center gap-2'>
                <Image 
                src='/icons/logo.svg'
                height={34}
                width={34}
                alt='Benki logo'
                className='size-[24px]
                max-xl:size-14'
                />
                <h1 className='sidebar-logo'>Benki</h1>
            </Link>
            {sidebarLinks.map((item) => {
                const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                return (
                    <Link 
                        href={item.route}
                        key={item.label}
                        className={cn('sidebar-link', {'bg-bank-gradient': isActive})}
                    >
                        <div className='relative size-6'>
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                fill className={cn({
                                    'brightness-[3] invert-0': isActive
                                })}
                            />

                        </div>
                    </Link>
                )
            })}

        </nav>

    </section>
  )
}

export default Sidebar