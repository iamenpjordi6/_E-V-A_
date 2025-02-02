FROM node:16.6.1-buster

RUN apt-get update && \
     apt-get install -y \
     neofetch \
     chromium \
     ffmpeg \
     wget \
     mc \
     imagemagick && \
     rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install -g npm@7.20.5
RUN npm install
RUN npm audit fix
COPY . .

EXPOSE 5000

CMD ["node . --big-qr", ".", "--server"]`
