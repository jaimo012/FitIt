import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'default' | 'white' | 'icon'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeMap = {
  sm: { width: 80, height: 32 },
  md: { width: 120, height: 48 },
  lg: { width: 160, height: 64 },
  xl: { width: 200, height: 80 },
}

export function Logo({ 
  variant = 'default', 
  size = 'md', 
  className 
}: LogoProps) {
  const { width, height } = sizeMap[size]
  
  const getLogoSrc = () => {
    switch (variant) {
      case 'white':
        return '/images/logo/fitit-logo-white.png'
      case 'icon':
        return '/images/logo/fitit-logo-icon.png'
      default:
        return '/images/logo/fitit-logo.png'
    }
  }

  return (
    <Image
      src={getLogoSrc()}
      alt="Fit-!T - 맞춤형 SaaS 비교 플랫폼"
      width={width}
      height={height}
      className={cn('object-contain', className)}
      priority={size === 'lg' || size === 'xl'}
    />
  )
} 