#!/usr/bin/env bash

# Update this to the coverage file you want to upload to the standards repo
COVERAGE_SOURCE_FILE=coverage/coverage-final.json

# -=- Nothing below here should need to be changed -=-

echo "Starting the coverage data push to the standards repo..."
echo "Generating the SHA.txt file"
PROJECT_NAME=$(basename `git rev-parse --show-toplevel`)
echo $PROJECT_NAME
COVERAGE_SHA=$(git rev-list HEAD | head -1)
echo $COVERAGE_SHA > SHA.txt
cat SHA.txt
echo "Cloning the standards repo in the parent directory"
cd ..
git clone https://codecov:${GH_TOKEN}@github.com/codecov/standards.git
cd standards
echo "Creating the coverage_data directory if it does not exist"
COVERAGE_DEST_DIR="coverage_data/$PROJECT_NAME"
mkdir -p $COVERAGE_DEST_DIR
echo "Copying the coverage file and SHA.txt to the coverage directory"
echo "Coverage dest dir"
echo $COVERAGE_DEST_DIR
ls $COVERAGE_DEST_DIR
echo "Coverage source file Name"
ls ..
echo "Project Name"
ls ../$PROJECT_NAME
echo "Project Name/coverage"
ls ../$PROJECT_NAME/coverage/
echo "Project Name/COVERAGE_SOURCE_FILE"
ls ../$PROJECT_NAME/$COVERAGE_SOURCE_FILE
echo "Project Name/coverage-final.json"
ls ../$PROJECT_NAME/coverage/coverage-final.json
cp ../$PROJECT_NAME/coverage/coverage-final.json $COVERAGE_DEST_DIR/
cp ../$PROJECT_NAME/SHA.txt $COVERAGE_DEST_DIR/
echo "Commiting and pushing the coverage data to the standards repo."
git config --global user.email "devops@codecov.local"
git config --global user.name "Codecov Devops"
git status
git add coverage_data
git commit -m "Updating coverage data for $PROJECT_NAME with SHA $COVERAGE_SHA"
git push origin --force
echo "Push to upstream complete!"