import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl'
import ThemedImage from '@theme/ThemedImage'
import styles from './styles.module.css'
import { useLocation } from '@docusaurus/router'
export function LogoImage({ logo }) {
  console.log(logo)
  const { withBaseUrl } = useBaseUrlUtils()
  const location = useLocation()
  const sources = {
    light: withBaseUrl(logo.src),
    dark: withBaseUrl(logo.srcDark ?? logo.src),
  }
  return (
    <ThemedImage
      className={clsx('footer__logo', logo.className)}
      alt={logo.alt}
      sources={sources}
      width={logo.width}
      height={logo.height}
      style={logo.style}
    />
  )
}
export default function FooterLogo({ logo }) {
  return logo.href ? (
    <Link
      href={logo.href}
      className={styles.footerLogoLink}
      target={logo.target}
    >
      <LogoImage logo={logo} />
    </Link>
  ) : (
    <LogoImage
      logo={
        location.pathname === '/'
          ? logo
          : {
              alt: 'Cardano Logo',
              src: 'assets/cardano-logo-blue.svg',
            }
      }
    />
  )
}
