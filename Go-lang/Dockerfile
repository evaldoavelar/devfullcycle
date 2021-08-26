#Compilar o executavel usando o alpine como base
FROM golang:alpine3.14 as build

# diretório de trabalho
WORKDIR /build-app

# copiar os arquivos
COPY hello.go .

COPY go.mod .

# compilar o pacote
RUN go build .

#usando a menor imagem do alpine
FROM alpine:3.14.1

# diretório de trabalho
WORKDIR /app

#copiar o arquivo compilado
COPY --from=build /build-app/hello .

#rodar a aplicação
ENTRYPOINT [ "/app/hello" ]