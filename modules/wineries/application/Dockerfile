FROM eclipse-temurin:17

ENV APPLICATION_USER app
RUN adduser --disabled-password --disabled-login $APPLICATION_USER

RUN mkdir /app
RUN chown -R $APPLICATION_USER /app

USER $APPLICATION_USER

COPY ./build/distributions/winery-server.tar /tmp/
RUN tar xf /tmp/winery-server.tar -C /tmp
RUN mv /tmp/winery-server/* /app/

WORKDIR /app

CMD ["bin/winery-server"]
