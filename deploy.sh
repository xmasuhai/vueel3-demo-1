rm -rf dist &&
vite build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M gh-pages &&
git remote add origin git@github.com:xmasuhai/vueel3-demo-website.git &&
git push -f -u origin gh-pages &&
cd -
echo https://xmasuhai.xyz/vueel3-demo-website/index.html
