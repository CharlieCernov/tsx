type Props = {
    title: string
    subtitle: string
}

export const Header = ({title, subtitle}: Props) => {
    return(
      <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <hr/>
      </header>
    )
}


