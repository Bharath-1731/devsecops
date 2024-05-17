# Use an official Tomcat 8.5 image as the base
FROM tomcat:8.5

# Set the working directory to /usr/local/tomcat
WORKDIR /usr/local/tomcat

# Copy the WAR file from the current directory into the Tomcat webapps directory
COPY target/your-app.war /usr/local/tomcat/webapps/

# Expose the Tomcat port
EXPOSE 8080

# Run Tomcat when the container starts
CMD ["catalina.sh", "run"]