FROM node:22.18.0-bullseye-slim

# Build args (defaults for local builds)
ARG GITHUB_REPOSITORY=""
ARG APP_DIR="/workspace"
ENV APP_DIR=${APP_DIR}

LABEL org.opencontainers.image.source="https://github.com/${GITHUB_REPOSITORY}"

# Install OS packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates curl build-essential git \
  && rm -rf /var/lib/apt/lists/*

# set absolute workdir
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# Copy package manifests first (cache-friendly)
# package*.json matches package.json and package-lock.json (if present)
COPY package*.json ${APP_DIR}/

RUN npm ci --prefer-offline --no-audit --no-fund

# Copy rest of the repo (this includes .vscode if you want it in the image)
COPY --chown=node:node . ${APP_DIR}

# Build step (if you have a build script)
RUN npm run build || true

# Ensure permissions (tolerant)
RUN if [ -d "${APP_DIR}" ]; then chown -R node:node "${APP_DIR}" || true; fi

USER node
ENV HOME=/home/node

EXPOSE 3000
CMD ["npm", "start"]
