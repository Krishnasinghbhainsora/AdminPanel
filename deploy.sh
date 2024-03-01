set -e

npm run build

cd dist

echo> .nojekyll

git init

git checkbout -B main
git add -A
git commit -m 'deploy'

cd -