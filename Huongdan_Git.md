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

1) Show key shh

cat ~/.ssh/id_rsa.pub

2) Create a key

ssh-keygen -t rsa

3) Fetch

git fetch

git branch -a

4) For upload file

git add * / git add filename.extents

git commit -m 'message'

git push origin haanhduclinh
bower install bootstrap --save
npm install body-parse --save


// MONGODB GUIDE FOR NEWBIES
1. Create database : 
mongodb su dung : lenh use de create database, neu database da ton tai thi se su dung luon database do, neu khong thi tao moi
2. Check database list : 
Neu muon check list database thi dung : show dbs 
Neu muon check database hien tai : db
Neu database chua co ban ghi nao thi se khong the hien ra o list database, luc nay phai them it nhat 1 ban ghi thi moi show duoc

