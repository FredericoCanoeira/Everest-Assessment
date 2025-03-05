# Usa a imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instala as dependências
RUN npm install --legacy-peer-deps

# Copia todos os arquivos do projeto para dentro do container
COPY . .

# Expõe a porta onde o React será servido
EXPOSE 3000

# Comando padrão para rodar o app
CMD ["npm", "start"]