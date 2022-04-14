docker run -v /mnt/input/data:/input -v /mnt/output:/output -it pointstools-no-conda /bin/bash -c "date > /output/start.txt && node ./src/index.js configFile.js && date > /output/finish.txt"
