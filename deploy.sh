#!/bin/bash

GITHUB_PATH="https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}"
cd ${TRAVIS_BUILD_DIR}
git config user.name "Travis CI"
git config user.email "travis@littleendianpiday.org"
git remote set-url --push origin $GITHUB_PATH
git remote set-branches --add origin gh-pages
git fetch -q
git checkout gh-pages
git ls-tree --name-only gh-pages | grep -v -e '.gitignore\|.nojekyll\|CNAME' | xargs rm -r
cp dist/* .
git add --all
git commit -m "Deployed from Travis CI"
git push -f