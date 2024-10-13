# Tengu-Drip Frontend

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

<img src="frontend-image.png" alt="Tengu-Drip Frontend" style="width: 100%; height: auto;">

**Tengu-Drip** é um e-commerce desenvolvido utilizando **Next.js** no frontend, com suporte a animações complexas fornecidas pelo **Framer Motion**, estilização eficiente via **Tailwind CSS**, e tipagem segura e robusta através do **TypeScript**.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor (SSR) e geração estática.
- **Tailwind CSS**: Framework CSS utilitário que permite criar layouts rápidos e responsivos.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática, facilitando a manutenção e escalabilidade do código.
- **Framer Motion**: Biblioteca de animações que facilita a criação de transições e interações fluidas.

## Funcionalidades

- **Catálogo de Produtos**: Exibição responsiva e otimizada de produtos com filtros e busca.
- **Carrinho de Compras**: Interações dinâmicas e fluídas no gerenciamento de itens no carrinho.
- **Checkout**: Processo de finalização de compra simples e otimizado.
- **Animações**: Transições e interações visuais atraentes usando **Framer Motion**.
- **Dark Mode**: Suporte para tema claro e escuro, com transições suaves entre modos.

## Estrutura do Projeto

A estrutura do projeto foi planejada para garantir a manutenibilidade e escalabilidade do código. Algumas das principais pastas e arquivos são:

- `components/`: Componentes reutilizáveis do UI.
- `pages/`: Cada página da aplicação seguindo a estrutura de rotas do Next.js.
- `styles/`: Arquivos de estilos customizados além de configurações do Tailwind CSS.
- `animations/`: Animações complexas implementadas com Framer Motion.

### Exemplos de Animações

```tsx
import { motion } from "framer-motion";

const MyComponent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    Bem-vindo ao Tengu-Drip!
  </motion.div>
);



## Ajustes e Melhorias

O projeto está em constante desenvolvimento, com novas funcionalidades e melhorias sendo adicionadas regularmente. Aqui estão algumas das próximas etapas:

- [x]  Estrutura básica da aplicação
- [x]  Implementação das animaçoes e interatividade  
- [ ]  Integração com backend via API
- [ ]  Melhorias de performance e SEO
- [ ]  Cobertura de Testes Unitários e E2E

## 🚀 Como Contribuir

Se você quiser contribuir com o desenvolvimento do **Tengu-Drip**, siga os passos abaixo:

1. **Fork o repositório**
2. **Crie uma branch** para a sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit as suas mudanças** (`git commit -m 'Adiciona minha nova feature'`)
4. **Envie para a branch** (`git push origin feature/MinhaFeature`)
5. **Abra um Pull Request**


## 📝 Licença
Este projeto está licenciado sob a [MIT License](LICENSE).