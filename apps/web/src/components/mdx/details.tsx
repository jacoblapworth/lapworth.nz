// import { useEffect, useState } from 'react'
// import { css } from '@/styled/css'
// import { Collapse } from '../nextra'
// import { DetailsProvider } from '../nextra/contexts'
// import { findSummary } from './find-summary'

// const styles = css({
//   bg: { _dark: 'neutral.800', base: 'white' },
//   borderColor: { _dark: 'neutral.900', base: 'inherit' },
//   borderWidth: '1px',
//   mb: '4',
//   mt: { _first: '0', base: '4' },
//   p: '2',
//   rounded: 'md',
//   shadow: 'sm',
// })

// export const Details = (props: React.ComponentProps<'details'>) => {
//   const { children, open, ...rest } = props
//   const [openState, setOpen] = useState(!!open)
//   const [summary, restChildren] = findSummary(children)

//   // To animate the close animation we have to delay the DOM node state here.
//   const [delayedOpenState, setDelayedOpenState] = useState(openState)

//   useEffect(() => {
//     if (openState) {
//       setDelayedOpenState(true)
//     } else {
//       const timeout = setTimeout(() => setDelayedOpenState(openState), 500)
//       return () => clearTimeout(timeout)
//     }
//   }, [openState])

//   return (
//     <details
//       className={styles}
//       {...rest}
//       data-expanded={openState ? '' : undefined}
//       open={delayedOpenState}
//     >
//       <DetailsProvider value={setOpen}>{summary}</DetailsProvider>
//       <Collapse isOpen={openState}>{restChildren}</Collapse>
//     </details>
//   )
// }
