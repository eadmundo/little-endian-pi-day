#!/bin/bash

cd ${TRAVIS_BUILD_DIR}
git config user.name "Travis CI"
git config user.email "travis@littleendianpiday.org"
git checkout gh-pages
git ls-tree --name-only gh-pages | grep -v -e '.gitignore\|.nojekyll\|CNAME' | xargs rm -r
cp dist/* .
git add .
git commit -m "Deployed from Travis CI"
git push -f -q "https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}" origin gh-pages