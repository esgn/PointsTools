# 16.13.1 is nodejs LTS version, and bullseye is the code for debian 11, the last LTS debian 
FROM node:16.13.1-bullseye

# ENV TZ=Europe/Moscow
RUN apt-get update -y && apt-get install --no-install-recommends -y \
nano parallel s3cmd \
&& apt-get -qq -y autoremove \
&& apt-get autoclean

RUN npm install -g npm

ENV PATH="/root/miniconda3/bin:${PATH}"
RUN wget -nv https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh \
    && mkdir /root/.conda \
    && bash Miniconda3-latest-Linux-x86_64.sh -b \
    && rm -f Miniconda3-latest-Linux-x86_64.sh 

RUN conda update -n base -c defaults conda

RUN git clone https://github.com/esgn/PointsTools.git
WORKDIR PointsTools

RUN conda env create -n pointstools -f environment.yml
RUN echo "source activate pointstools" > ~/.bashrc
ENV PATH /opt/conda/envs/env/bin:$PATH

RUN npm install
