rm -rf dist &&
vite build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:xmasuhai/vueel3-demo-website.git &&
git push -f -u origin main &&
cd -
