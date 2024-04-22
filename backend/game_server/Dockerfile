# Start from a base image with Go pre-installed
FROM golang:1.21.5

# Set the working directory inside the container
WORKDIR /app

# Install dependencies needed for the protoc installation
RUN apt-get update && apt-get install -y unzip wget

# Set the version for protoc and install it
ENV PROTOC_VERSION=3.20.1
RUN wget https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_VERSION}/protoc-${PROTOC_VERSION}-linux-x86_64.zip \
    && unzip protoc-${PROTOC_VERSION}-linux-x86_64.zip -d /usr/local \
    && rm protoc-${PROTOC_VERSION}-linux-x86_64.zip

# Copy the Go module and sum files first for caching dependencies
COPY go.mod go.sum ./

# Download the dependencies including protoc plugins
RUN go mod download \
    && go install google.golang.org/protobuf/cmd/protoc-gen-go@latest \
    && go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

# Set PATH to include binaries
ENV PATH="$PATH:$(go env GOPATH)/bin"

# Copy the rest of the source code
COPY ./ ./

# Build the Go application
RUN make build_server

# Expose the port your service runs on
EXPOSE 8080

# Command to run the executable
CMD make run_server