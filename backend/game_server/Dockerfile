# Start from a base image with Go pre-installed
FROM golang:1.21.5

# Set the working directory inside the container
WORKDIR /app

# Copy the Go module and sum files first for caching dependencies
COPY go.mod go.sum ./

# Download the dependencies
RUN go mod download

# Copy the rest of the source code
# RUN ls -la /app
COPY ./ ./

# Build the Go application
# RUN ls -la /app
RUN make build_server

# Expose the port your service runs on
EXPOSE 8080

# Command to run the executable
CMD make run_server