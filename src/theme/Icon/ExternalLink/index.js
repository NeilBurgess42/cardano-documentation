import React from 'react'
import styles from './styles.module.css'
export default function IconExternalLink({ width = 24, height = 24 }) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={styles.iconExternalLink}
    >
      <g id="arrow/out">
        <path
          id="Vector"
          d="M15.7515 9.12342L7.70674 17.1682C7.55625 17.3187 7.37947 17.3939 7.17641 17.3937C6.97336 17.3939 6.79658 17.3187 6.64608 17.1682C6.49559 17.0177 6.4204 16.8409 6.42052 16.6378C6.4204 16.4348 6.49559 16.258 6.64608 16.1075L14.6908 8.06276L7.38041 8.06276C7.17017 8.06276 6.99522 7.99164 6.85556 7.84939C6.71603 7.70703 6.6462 7.52619 6.64608 7.30687C6.65339 7.09473 6.72457 6.91749 6.85963 6.77512C6.99469 6.63276 7.17193 6.56158 7.39137 6.56158L16.3578 6.56158C16.4903 6.56158 16.6068 6.58473 16.7073 6.63105C16.808 6.67725 16.9009 6.74295 16.9861 6.82816C17.0713 6.91336 17.137 7.00629 17.1832 7.10693C17.2295 7.20746 17.2527 7.32396 17.2527 7.45642L17.2527 16.4229C17.2527 16.6188 17.1815 16.7901 17.0391 16.937C16.8968 17.0838 16.7195 17.1609 16.5074 17.1682C16.2881 17.1681 16.1073 17.0969 15.965 16.9546C15.8227 16.8123 15.7514 16.6314 15.7513 16.4121L15.7515 9.12342Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
