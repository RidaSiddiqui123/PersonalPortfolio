# Use an official PHP image as the base image
FROM php:8.0-cli

# Install dependencies needed for Composer
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# # Set the working directory inside the container
# WORKDIR /app

# Set working directory to /app
WORKDIR /app

# Copy all files from backend folder
COPY . /app

# Install PHP dependencies
RUN composer install

# Expose port 80 (standard for HTTP traffic)
EXPOSE 80

# Start PHP built-in server on port 80
CMD ["php", "-S", "0.0.0.0:80", "-t", "./"]
