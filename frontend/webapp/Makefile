run_code_generation: clean_generated_files generate_protobuf

clean_generated_files:
	rm -rf ../src/gen/*

proto_codegen_output = src/gen/proto_codegen.js
generate_protobuf:
	node_modules/.bin/pbjs \
	--no-create \
	--no-verify \
	-t  static-module -w commonjs -o "${proto_codegen_output}" ../../backend/game_server/api/*\.proto 
	{ echo "/*eslint-disable*/"; cat "${proto_codegen_output}"; } > "${proto_codegen_output}.new"
	mv "${proto_codegen_output}.new" "${proto_codegen_output}"

.PHONY: run_code_generation clean_generated_files generate_protobuf