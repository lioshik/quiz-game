run_code_generation: clean_generated_files generate_protobuf

generate_protobuf:
	protoc --proto_path=./api/ --go_out=./internal/gen  ./api/*.proto;

clean_generated_files:
	rm -rf ./internal/gen/*;

run_server build_server:
	./game_server

build_server run_code_generation:
	go build -o game_server ./cmd/run-server/main.go

docker_build_image:
	docker build -t game_server .

docker_run docker_build_image:
	docker rm -f game_server_container
	docker run -p 8080:8080 -it --name game_server_container game_server

.PHONY: run_code_generation generate_protobuf clean_generated_files docker_build_image build_server docker_run
