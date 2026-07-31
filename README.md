# Salgadex'S — Site Oficial

Site completo da Salgadex'S: cardápio, promoções, fotos, botão de WhatsApp, mapa e funciona como aplicativo no celular (PWA).

## 📂 O que tem aqui

```
index.html      → a página do site
styles.css      → todo o visual (cores, fontes, layout)
script.js       → menu mobile, abas do cardápio, funcionalidade de app
manifest.json   → configuração do "app" (nome, ícone, cor)
sw.js           → deixa o site funcionar offline
favicon.ico     → ícone da aba do navegador
icons/          → ícones do app em vários tamanhos
images/         → logo e mascote
```

## 🚀 Como colocar no ar (passo a passo)

### 1. Subir os arquivos no GitHub

1. Entre no seu repositório: `salgadex-site` (ou o nome que você criou).
2. Clique em **Add file → Upload files**.
3. Arraste **todos os arquivos e pastas** desta pasta (mantendo a estrutura: `images/` e `icons/` como pastas).
4. Escreva uma mensagem tipo "primeira versão do site" e clique em **Commit changes**.

### 2. Publicar no Cloudflare Pages (grátis)

1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com) e faça login (ou crie uma conta grátis).
2. Clique em **Create a project → Connect to Git**.
3. Autorize o Cloudflare a acessar seu GitHub e selecione o repositório `salgadex-site`.
4. Em **Build settings**, deixe tudo em branco/padrão (não precisa de comando de build) e clique em **Save and Deploy**.
5. Em 1–2 minutos o Cloudflare te dá um link tipo `https://salgadex-site.pages.dev` — esse já é o site no ar!

Depois disso, toda vez que você atualizar algo no GitHub, o site atualiza sozinho.

### 3. (Opcional) Domínio próprio

Se você comprar um domínio (tipo `salgadexs.com.br`), no mesmo projeto do Cloudflare Pages vá em **Custom domains** e siga as instruções — também é gratuito para conectar.

## 📸 Trocando as fotos

Na seção "Fotos" do site tem 6 quadros de espaço reservado (coxinha, esfiha, etc). Para trocar por fotos reais:

1. Coloque suas fotos dentro da pasta `images/` (ex: `images/coxinha.jpg`).
2. No arquivo `index.html`, procure por `class="photo-slot"` e troque o conteúdo de cada `<div>` por uma tag `<img src="images/coxinha.jpg" alt="Coxinha">`.

Se preferir, me manda as fotos aqui que eu já deixo tudo montado pra você.

## 📞 Dados usados no site

- WhatsApp: (11) 97796-3668
- Endereço: Av. Barão de Mauá, 4157
- Instagram: @salgados.xx

Se algum desses dados mudar, é só me falar que eu atualizo.

## 💰 Preços no cardápio

- Assados e fritos: R$ 2,99
- Pastel 1 sabor: R$ 7,99
- Pastel 2 sabores: R$ 9,99
- Porções de mini salgados: R$ 6,99 a R$ 49,99 (10 a 100 unidades)
