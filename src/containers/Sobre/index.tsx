import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero
      excepturi soluta natus suscipit assumenda, fugiat, ad eveniet atque eos
      laboriosam tempora. Mollitia optio officiis alias quibusdam voluptatem,
      tenetur vero.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=vittaoo&show_icons=true&theme=gotham" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Vittaoo&layout=compact&langs_count=7&theme=gotham" />
    </GithubSecao>
  </section>
)

export default Sobre
