rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "upload update" &&
git branch -M main &&
git remote add origin git@github.com:Knight174/iSQ-UI.git
git push -f -u origin main &&
cd ..
echo https://knight174.github.io/iSQ-UI/#/