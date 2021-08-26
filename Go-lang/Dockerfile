### estágio 1 ###

#Compilar o executavel usando o alpine como base
FROM golang:alpine3.14 as build

# diretório de trabalho
WORKDIR /build-app

#instalar upx
RUN apk add upx

# copiar os arquivos
COPY hello.go .

COPY go.mod .

# compilar o pacote
RUN go build -ldflags "-s -w" hello.go

#compactar o executavel
RUN upx /build-app/hello


### estágio 2 ###

#usando a menor imagem do alpine
FROM busybox:stable

# diretório de trabalho
WORKDIR /app

#copiar o arquivo compilado
COPY --from=build /build-app/hello .

#rodar a aplicação
ENTRYPOINT [ "/app/hello" ]