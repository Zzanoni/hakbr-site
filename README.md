# HakBr — site

Site estático (HTML/CSS puro, sem build). Estrutura:

```
/index.html                      → hakbr.com.br
/thehacklab/docs/index.html      → hakbr.com.br/thehacklab/docs
/style.css                       → estilos compartilhados
```

## Como colocar no ar (GitHub Pages)

1. Crie um repositório novo no GitHub (ex: `hakbr-site`). Pode ser público.
2. Suba estes arquivos para o repositório (mantendo a estrutura de pastas).
3. No repositório: **Settings → Pages → Source → Deploy from a branch**, escolha a branch `main` e a pasta `/ (root)`. Salve.
4. O GitHub vai te dar uma URL temporária tipo `seu-usuario.github.io/hakbr-site` — confirme que abre certo antes de conectar o domínio.
5. Ainda em **Settings → Pages**, no campo **Custom domain**, digite `hakbr.com.br` e salve. Isso cria um arquivo `CNAME` no repositório automaticamente.
6. No painel do Registro.br (onde o domínio foi registrado), configure os DNS:
   - Um registro **A** apontando para os IPs do GitHub Pages:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Um registro **CNAME** para `www` apontando para `seu-usuario.github.io`
7. Aguarde a propagação (minutos a algumas horas) e marque a opção **Enforce HTTPS** de volta em Settings → Pages assim que o certificado for emitido.

## Conteúdo

O conteúdo da página do Eclipse (`/thehacklab/docs/index.html`) já está preenchido.
Para revisar textos, edite diretamente o HTML — é estático, sem build.
