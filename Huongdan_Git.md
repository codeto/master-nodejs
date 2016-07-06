#1) Kiem tra trang thai hien tai
 git status

#2) Tạo branch new từ branch master

git checkout -b new origin/master

#3) Xem code của người khác

git checkout ten_branch_ng_khach
git pull origin ten_branch_ng_khach

#4) Commit code lên server

## Add tất các file đang làm việc
git add -A

## Add từng file cụ thể
git add ten_file_1 ten_file_2 ...

git commit -m "Message"

git push origin ten_branch_cua_minh

#5) Xem tất cả branch
git fetch
git branch -a

#6) Merge code (cuongbn ==> sonha)

## Merge tu remote
git checkout sonha
git pull origin cuongbn

## Merge o local
git checkout cuongbn
git pull origin cuongbn

git checkout sonha
git merge cuongbn