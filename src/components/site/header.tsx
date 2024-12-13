import Link from 'next/link'

interface Props {
  page?: string
}

export const Header = ({ page }: Props) => {
  return (
    <div className="sm:flex gap-4 justify-between items-start">
      {page ? (
        <h1 className="flex gap-2 font-normal">
          <Link className="reset-link text-muted-foreground hover:text-foreground" href="/">
            Bridger Tower
          </Link>
          <span>/</span>
          {page}
        </h1>
      ) : (
        <h1 className="reset-link font-normal">Bridger Tower</h1>
      )}
    </div>
  )
}
