import cx from 'classnames'

interface Props {
  className?: string
}

const POST_ID = 1280258

// Toggle via NEXT_PUBLIC_SHOW_PRODUCT_HUNT_BADGE (set to "true" to show).
// Inlined at build time, so flip it in the Vercel env vars and redeploy.
const isEnabled = process.env.NEXT_PUBLIC_SHOW_PRODUCT_HUNT_BADGE === 'true'

export const ProductHuntBadge = ({ className }: Props) => {
  if (!isEnabled) return null

  return (
    <a
      href={`https://www.producthunt.com/products/web3-icons?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-web3-icons`}
      target="_blank"
      rel="noopener noreferrer"
      className={cx('inline-block w-fit', className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Web3 Icons - Most comprehensive icon set for web3 | Product Hunt"
        width={250}
        height={54}
        src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${POST_ID}&theme=dark&t=1792189279505`}
      />
    </a>
  )
}
