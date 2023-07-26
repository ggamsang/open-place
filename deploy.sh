# # git pull origin develop
# yarn generate-build-version &&
# yarn prebuild &&
# rm -rf build  &&
# yarn build && 
# rm build/static/**/*.map && 
# aws s3 rm s3://opensrcdesign.com --recursive --profile crc &&
# aws s3 cp --cache-control max-age=0 build s3://opensrcdesign.com --recursive --profile crc &&
# aws s3 cp --cache-control max-age=0 ../meet/build s3://opensrcdesign.com/meet/ --recursive --profile crc &&
# # aws s3 cp --cache-control max-age=0 ./build/index.html s3://opensrcdesign.com/
# # aws s3 cp --cache-control max-age=0 ./build/service-worker.js s3://opensrcdesign.com/
# aws cloudfront create-invalidation --distribution-id EHAA2Y3G67XNE --paths "/*" --profile crc
# nvm use 16 &&
rm -rf build &&
yarn build &&
scp -i ~/Downloads/opendesign2023.pem -r build ubuntu@13.125.55.195:/home/ubuntu/front/
