#! /bin/sh
for((i=1;i<=1000000;i++)); do
        content=$(date -d "${i}" +"%s")
        echo ${content}-${i} >> .commits/changes
        git add .commits/changes
        git commit -m "Commit number ${i}-${i}"
        git commit --amend --no-edit
done
