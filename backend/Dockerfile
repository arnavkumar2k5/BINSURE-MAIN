# Use an official Python runtime as a parent image
FROM python:3.12

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any necessary dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port your Flask app runs on
EXPOSE 8080

# Define environment variable
ENV FLASK_APP=app.py

# Run flask command to start the app
CMD ["flask", "run", "--host=0.0.0.0", "--port=8080"]
