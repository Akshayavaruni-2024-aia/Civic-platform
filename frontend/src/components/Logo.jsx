export default function Logo({ size = 28, className = '' }) {
  return <img src="/logo.svg" alt="CivicAI logo" width={size} height={size} className={className} />
}
