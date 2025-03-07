install: 
		npm ci
brain-games: 
		node ./bin/brain-games.js
brain-even: 
		node ./bin/brain-even.js
brain-calc: 
		node ./bin/brain-calc.js
brain-progression: 
		node ./bin/brain-progression.js
brain-prime: 
		node ./bin/brain-prime.js
publish: 
		npm publish --dry-run
lint:	 
		npx eslint .
record: 
		asciinema rec demo.cast
push:
		git add .
		git pull
		git commit -m 'test'
		git push