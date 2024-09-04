import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const SideBar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Vitor Hugo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Vittaoo
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default SideBar
