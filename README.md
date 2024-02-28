## nvm, pm2 설치\n
(https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 8
nvm use 8
npm install -g pm2

## github clone
git clone https://github.com/ggamsang/open-place place
cd place

### 백엔드설치
cd ~/place/back
nano .env
```
  PORT=3001
  # aws
  AWS_DB_HOST=
  AWS_DB_PORT=
  AWS_DB_NAME=
  AWS_DB_USER=
  AWS_DB_PASS=
  AWS_ACCESSKEY_ID=
  AWS_SECRET_ACCESSKEY=
  SECRET_CODE=토큰발급위한
  FACEBOOK_APP_ID=페이스가입위한 _ 현재사용하지않음
  FACEBOOK_APP_SECRET=페이스북 앱등록후 발급되는 시크릿
  # S3
  AWS_S3_BUCKET=S3저장소도메인주소/place
  DEV_S3_BUCKET=S3저장소도메인주소/dev_img
  AWS_UPLOAD_DIRECTORY=S3저장소도메인주소/uploads
  AWS_THUMBNAIL_DIRECTORY=S3저장소도메인주소/thumbnails
  MAIL_ID=지메일아이디 _ 비밀번호발급위한 구글 STMP프로토콜이용 _ 현재 사용하지 않음
  MAIL_PASSWORD=지메일비밀번호 
  NAVER=네이버아이디 _ 비밀번호발급위한 NAVER STMP프로토콜이용
  NAVER_PW=네이버비밀번호
```
npm install
sh pm2.sh 또는 OPERATION=true pm2 start bin/www.js --name placeback

### 프론트설치
cd ~/place/front
nvm install 16
nvm use 16
npm install
npm build


## nginx 설정
server {
  listen 80;
  server_name place.opensrcdesign.com;
  location / {
    return 301 https://$http_host$request_uri;
  }
}
server {
  listen 443 ssl;
  server_name place.opensrcdesign.com;
  client_max_body_size 10000M;

  ssl on;
  ssl_certificate 	/etc/letsencrypt/live/place.opensrcdesign.com/fullchain.pem;
  ssl_certificate_key 	/etc/letsencrypt/live/place.opensrcdesign.com/privkey.pem;

  location / {
    proxy_set_header Access-Control-Allow-Origin *;
    root /home/ubuntu/place/front/build;
    index index.html;
    try_files $uri /index.html;
  }

  location /socket.io {
    include proxy_params;
    proxy_http_version 1.1;
    proxy_buffering off;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_pass http://127.0.0.1:3001/socket.io;
  }
  
  location /api {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-NginX-Proxy true;
    proxy_set_header Access-Control-Allow-Origin *;
    proxy_pass http://127.0.0.1:3001;
    proxy_redirect off;

    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_http_version 1.1;
  }

  gzip on;
  gzip_comp_level 2;
  gzip_proxied any;
  gzip_min_length 10000000000;
  gzip_disable "MSIE [1-6]\." gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
}
