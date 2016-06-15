# -*-makefile-gmake-*-

.PHONY: test list style ntest

all: es5 es5/sitedarts.js

es5:
	mkdir -p es5

es5/sitedarts.js: es5 node_modules/babel-cli
	./node_modules/babel-cli/bin/babel.js -o es5/sitedarts.js es6/sitedarts.js

node_modules/http-server node_modules/babel-cli:
	npm install

serve: node_modules/http-server es5/sitedarts.js
	./node_modules/http-server/bin/http-server .

clean:
	rm -fr es5
	rm -fr node_modules
