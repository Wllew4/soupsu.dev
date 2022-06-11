FROM node:16

# SHELL [ "bin/bash", "-c" ]
# RUN apt update -y && apt install -y curl
# # RUN curl -fsSL https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash && \
# # 	source ~/.bashrc && \
# # 	nvm install 16 && \
# # 	nvm which 16
# # ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin:${PATH}"
# # RUN nvm which 16
# # RUN node -v && npm -v
# # RUN npm i -g yarn

# ENV NVM_DIR /usr/local/nvm
# ENV NODE_VERSION 16

# # install nvm
# # https://github.com/creationix/nvm#install-script
# RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# # install node and npm
# RUN source $NVM_DIR/nvm.sh \
#     && nvm install $NODE_VERSION \
#     && nvm alias default $NODE_VERSION \
#     && nvm use default

# # add node and npm to path so the commands are available
# ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
# ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# # confirm installation
# RUN node -v
# RUN npm -v

WORKDIR /soupsu.dev
ENTRYPOINT cd client && yarn install && yarn build && \
	cd ../server && yarn install && yarn build && \
	yarn launch
