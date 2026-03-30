FROM public.ecr.aws/docker/library/node:16

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]
