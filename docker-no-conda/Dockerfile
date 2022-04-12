FROM debian:bullseye

ARG INSTALL_PREFIX=/usr/local

# Install packages
RUN apt update -y && apt upgrade -y && \
    apt install -y \
        cmake \
        build-essential \
        pdal \
        libpdal-dev \
        vim \
        wget \
        parallel \
        nodejs \
        npm \
        git \
    && rm -rf /var/lib/apt/lists/*

# Entwine
RUN mkdir /opt/entwine
RUN mkdir /opt/entwine/build

RUN wget -q https://github.com/connormanning/entwine/archive/refs/tags/2.2.0.tar.gz \
    && tar -zxvf 2.2.0.tar.gz --strip-components=1 -C /opt/entwine \
    && rm 2.2.0.tar.gz
    
WORKDIR /opt/entwine/build
RUN LDFLAGS="$LDFLAGS -Wl,-rpath-link,$INSTALL_PREFIX/lib" cmake .. \
      -DCMAKE_LIBRARY_PATH:FILEPATH="$INSTALL_PREFIX/lib" \
      -DCMAKE_INCLUDE_PATH:FILEPATH="$INSTALL_PREFIX/include" \
      -DCMAKE_INSTALL_PREFIX=${INSTALL_PREFIX} \
      -DCMAKE_BUILD_TYPE=RelWithDebInfo \
      && make -j$(($(nproc) + 1)) \
      && make install

# PointTools
RUN mkdir /opt/pointstools
WORKDIR /opt/pointstools
RUN git clone https://github.com/esgn/PointsTools.git .
RUN npm install
