FROM amazoncorretto:21

WORKDIR /app
COPY build/libs/*.jar /programa.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar","/programa.jar"]